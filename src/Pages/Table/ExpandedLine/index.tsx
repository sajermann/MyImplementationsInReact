import { useEffect, useState } from 'react';

import { Table } from '~/Components/Table';
import { TPerson } from '~/Types/TPerson';
import { makeData } from '~/Utils/MakeData';
import { UpdateRowExpanded } from '~/Components/UpdateRowExpanded';
import { useColumns } from '~/Hooks/UseColumns';
import { Main } from '~/Components/Main';
import Section from '~/Components/Section';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';
import { useTranslation } from '~/Hooks/UseTranslation';

export default function ExpandedLinePage() {
	const { translate } = useTranslation();
	const [data, setData] = useState<TPerson[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const { columns } = useColumns();

	async function load() {
		setIsLoading(true);
		setData(makeData.person(20));
		setIsLoading(false);
	}

	useEffect(() => {
		load();
	}, []);

	function handleSaveUpdate(row: any, dataUpdate: TPerson) {
		const updateData = [...data];
		updateData[row.index] = { ...updateData[row.index], ...dataUpdate };
		setData([...updateData]);
		row.getToggleExpandedHandler()();
	}

	return (
		<Main data-content="content-main">
			<Section heading={translate('EXPAND_LINE')}>
				{translate('IMPLEMENTS_EXPAND_LINE_MODE')}
			</Section>
			<Section subHeading={translate('CODES')}>
				<div className="flex gap-2">
					<QuickAccessGithub name="ExpandedLine" />
				</div>
			</Section>
			<Section subHeading={translate('IMPLEMENTS')}>
				<Table
					isLoading={isLoading}
					columns={columns}
					data={data}
					expandLine={{
						render: row => (
							<UpdateRowExpanded row={row} onSave={handleSaveUpdate} />
						),
					}}
					disabledVirtualization
				/>
			</Section>
		</Main>
	);
}
