import { useEffect, useState } from 'react';

import { Table } from '~/Components/Table';
import { useTranslation } from '~/Hooks/UseTranslation';
import { TPerson } from '~/Types/TPerson';
import { makeData } from '~/Utils/MakeData';
import { useColumns } from '~/Hooks/UseColumns';
import { Button } from '~/Components/Button';

export default function Loading() {
	const { translate } = useTranslation();
	const [data, setData] = useState<TPerson[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const { columns } = useColumns();

	async function load() {
		setIsLoading(true);
		setData(makeData.person(1000));
		setIsLoading(false);
	}

	useEffect(() => {
		load();
	}, []);

	function handleLoading(withData?: boolean) {
		setData(withData ? makeData.person(1000) : []);
		setIsLoading(true);
	}

	return (
		<div className="p-4 flex flex-col gap-2">
			<div className="flex gap-2">
				<Button onClick={() => handleLoading(true)}>
					{translate('LOADING_WITH_DATA')}
				</Button>
				<Button onClick={() => handleLoading()}>
					{translate('LOADING_WITHOUT_DATA')}
				</Button>

				<Button onClick={() => load()}>{translate('NORMAL_STATE')}</Button>
			</div>
			<Table isLoading={isLoading} columns={columns} data={data} />
		</div>
	);
}
