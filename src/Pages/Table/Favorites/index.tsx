import { CellContext, ColumnDef } from '@tanstack/react-table';
import { useEffect, useMemo, useState } from 'react';

import { useColumns } from '~/Hooks/UseColumns';
import { Table } from '~/Components/Table';
import { useTranslation } from '~/Hooks/UseTranslation';
import { TPerson } from '~/Types/TPerson';
import { makeData } from '~/Utils/MakeData';
import { Icons } from '~/Components/Icons';
import { Main } from '~/Components/Main';
import Section from '~/Components/Section';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';

export function FavoritesPage() {
	const { translate } = useTranslation();
	const [data, setData] = useState<TPerson[]>([]);
	const [selectedItems, setSelectedItems] = useState({});
	const { columns } = useColumns();

	const columnsInternal = useMemo<ColumnDef<TPerson>[]>(
		() => [
			columns[0],
			columns[1],
			columns[2],
			columns[3],
			{
				id: 'select',
				header: translate('FAVORITES'),
				size: 60,
				minSize: 60,
				maxSize: 60,
				align: 'center',
				enableSorting: false,
				cell: ({ row }: CellContext<TPerson, unknown>) => (
					<div className="w-full h-6 flex items-center justify-center hover:cursor-pointer">
						{row.getIsSelected() ? (
							<Icons.Star colorFill="#0054B6" colorStroke="#0054B6" />
						) : (
							<Icons.Star colorStroke="#0054B6" />
						)}
					</div>
				),
			},
		],
		[translate]
	);

	useEffect(() => {
		setData(makeData.person(5));
	}, []);

	return (
		<Main data-content="content-main">
			<Section heading={translate('FAVORITES')}>
				{translate('IMPLEMENTS_FAVORITES_MODE')}
			</Section>
			<Section subHeading={translate('CODES')}>
				<div className="flex gap-2">
					<QuickAccessGithub name="Favorites" />
				</div>
			</Section>
			<Section subHeading={translate('IMPLEMENTS')}>
				<Table
					columns={columnsInternal}
					data={data}
					selection={{
						rowSelection: selectedItems,
						setRowSelection: setSelectedItems,
						type: 'multi',
						disableCheckbox: true,
					}}
				/>
				{translate('FAVORITE_ROWS')}: {JSON.stringify(selectedItems, null, 2)}
			</Section>
		</Main>
	);
}
