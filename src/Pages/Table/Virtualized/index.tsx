import { useEffect, useState } from 'react';

import { Table } from '~/Components/Table';
import { useTranslation } from '~/Hooks/UseTranslation';
import { TPerson } from '~/Types/TPerson';
import { makeData } from '~/Utils/MakeData';
import { useColumns } from '~/Hooks/UseColumns';
import { Button } from '~/Components/Button';
import { Main } from '~/Components/Main';
import Section from '~/Components/Section';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';

export function VirtualizedPage() {
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
		<Main data-content="content-main">
			<Section heading={translate('VIRTUALIZED')}>
				{translate('IMPLEMENTS_VIRTUALIZED_MODE')}
			</Section>
			<Section subHeading={translate('CODES')}>
				<div className="flex gap-2">
					<QuickAccessGithub name="Virtualized" />
				</div>
			</Section>
			<Section subHeading={translate('IMPLEMENTS')}>
				<div className="flex flex-col gap-2">
					<Button
						onClick={() => setVirtualized(prev => !prev)}
						className="w-44"
					>
						{translate(
							virtualized ? 'DISABLED_VIRTUALIZATION' : 'ACTIVE_VIRTUALIZATION'
						)}
					</Button>

					<Table
						isLoading={isLoading}
						columns={[...columns]}
						data={data}
						disabledVirtualization={!virtualized}
					/>
				</div>
			</Section>
		</Main>
	);
}
