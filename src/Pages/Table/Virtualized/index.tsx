import { useEffect, useState } from 'react';

import { Table } from '~/Components/Table';
import { useTranslation } from '~/Hooks/UseTranslation';
import { TPerson } from '~/Types/TPerson';
import { makeData } from '~/Utils/MakeData';
import { useColumns } from '~/Hooks/UseColumns';
import { Button } from '~/Components/Button';
import { Main } from '~/Components/Main';
import { Section } from '~/Components/Section';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';

export function VirtualizedPage() {
	const { translate } = useTranslation();
	const [data, setData] = useState<TPerson[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [virtualized, setVirtualized] = useState(true);
	const { columns } = useColumns();

	async function load() {
		setIsLoading(true);
		setData(makeData.person(2000));
		setIsLoading(false);
	}

	useEffect(() => {
		load();
	}, []);

	return (
		<Main data-content="content-main">
			<Section title={translate('VIRTUALIZED')} variant="h1">
				{translate('IMPLEMENTS_VIRTUALIZED_MODE')}
			</Section>
			<Section title={translate('CODES')} variant="h2">
				<div className="flex gap-2 bg-dark-400">
					<QuickAccessGithub name="Virtualized" />
				</div>
			</Section>
			<Section title={translate('IMPLEMENTS')} variant="h2">
				<div className="flex flex-col gap-2">
					<Button
						onClick={() => setVirtualized(prev => !prev)}
						className="w-44"
					>
						{translate(
							virtualized ? 'DISABLED_VIRTUALIZATION' : 'ACTIVE_VIRTUALIZATION',
						)}
					</Button>

					<Table
						isLoading={isLoading}
						columns={[...columns]}
						data={data}
						enableVirtualization={virtualized}
					/>
				</div>
			</Section>
		</Main>
	);
}
