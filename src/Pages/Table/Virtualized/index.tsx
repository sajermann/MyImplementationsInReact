import { useEffect, useState } from 'react';

import { Table } from '~/Components/Table';
import { useTranslation } from '~/Hooks/UseTranslation';
import { TPerson } from '~/Types/TPerson';
import { makeData } from '~/Utils/MakeData';
import { useColumns } from '~/Hooks/UseColumns';
import { Button } from '~/Components/Button';

export default function Virtualized() {
	const { translate } = useTranslation();
	const [data, setData] = useState<TPerson[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [virtualized, setVirtualized] = useState(false);
	const { columns } = useColumns();

	async function load() {
		setIsLoading(true);
		setData(makeData.person(200));
		setIsLoading(false);
	}

	useEffect(() => {
		load();
	}, []);

	return (
		<div className="p-4 flex flex-col gap-4">
			<Button onClick={() => setVirtualized(prev => !prev)} className="w-44">
				{translate(
					virtualized ? 'DISABLED_VIRTUALIZATION' : 'ACTIVE_VIRTUALIZATION'
				)}
			</Button>
			<div>
				<Table
					isLoading={isLoading}
					columns={[...columns]}
					data={data}
					disabledVirtualization={!virtualized}
				/>
			</div>
		</div>
	);
}
