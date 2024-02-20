import { ColumnDef } from '@tanstack/react-table';
import { useEffect, useState, useMemo } from 'react';

import { Table } from '~/Components/Table';
import { useTranslation } from '~/Hooks/UseTranslation';
import { makeData } from '~/Utils/MakeData';
import { TVehicle } from '~/Types/TVehicle';
import { Main } from '~/Components/Main';
import { Section } from '~/Components/Section';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';
import { mask } from '~/Utils/Mask';

export function FooterPage() {
	const { translate, currentLanguage } = useTranslation();
	const [data, setData] = useState<TVehicle[]>([]);
	const [globalFilter, setGlobalFilter] = useState('');
	console.log(currentLanguage);

	useEffect(() => setData(makeData.vehicles(50)), []);

	const columns = useMemo<ColumnDef<TVehicle>[]>(
		() => [
			{
				accessorKey: 'id',
				header: 'Id',
				minSize: 100,
				size: 100,
				align: 'center',
				enableResizing: false,
			},
			{
				accessorKey: 'label',
				header: translate('NAME'),
				minSize: 100,
				size: 100,
				align: 'center',
				enableSorting: true,
				footer: translate('TOTALS'),
			},
			{
				accessorFn: ({ price }) => mask.currency(price, currentLanguage),
				accessorKey: 'price',
				header: translate('PRICE'),
				minSize: 100,
				size: 100,
				align: 'center',
				footer: ({ table }) => {
					const myRows = table.getRowModel().rows.map(item => item.original);
					const result = myRows.reduce(
						(accumulator, currentValue) => accumulator + currentValue.price,
						0
					);
					return mask.currency(result, currentLanguage);
				},
			},
		],
		[translate, currentLanguage]
	);

	return (
		<Main data-content="content-main">
			<Section title={translate('FOOTER')} variant="h1">
				{translate('IMPLEMENTS_FOOTER_MODE')}
			</Section>
			<Section title={translate('CODES')} variant="h2">
				<div className="flex gap-2 bg-dark-400">
					<QuickAccessGithub name="Footer" />
				</div>
			</Section>
			<Section title={translate('IMPLEMENTS')} variant="h2">
				<Table
					columns={columns}
					data={data}
					globalFilter={{
						filter: globalFilter,
						setFilter: setGlobalFilter,
					}}
					showFooter
					disabledVirtualization
				/>
			</Section>
		</Main>
	);
}
