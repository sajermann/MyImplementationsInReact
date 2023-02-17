import { ColumnDef, HeaderContext } from '@tanstack/react-table';
import { useEffect, useState, useMemo } from 'react';

import { Table } from '~/Components/Table';
import { useTranslation } from '~/Hooks/UseTranslation';
import { makeData } from '~/Utils/MakeData';
import { Input } from '~/Components/Input';
import { WarningInfo } from '~/Components/WarningInfo';

type Game = { id: string; name: string; price: number };

export function FooterPage() {
	const { translate } = useTranslation();
	const [data, setData] = useState<Game[]>([]);
	const [globalFilter, setGlobalFilter] = useState('');

	useEffect(() => {
		setData([
			{ id: '1', name: 'God of War', price: 150 },
			{ id: '2', name: 'Horizon Zero Dawn', price: 150 },
			{ id: '3', name: 'Spiderman', price: 90.9 },
			{ id: '4', name: 'Uncharted', price: 100 },
			{ id: '5', name: 'The Last of Us Part II', price: 349.9 },
		]);
	}, []);

	const columns = useMemo<ColumnDef<Game>[]>(
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
				accessorKey: 'name',
				header: translate('NAME'),
				minSize: 100,
				size: 100,
				align: 'center',
				enableSorting: true,
				footer: translate('TOTALS'),
			},
			{
				accessorFn: ({ price }) => String(price),
				accessorKey: 'price',
				header: translate('PRICE'),
				minSize: 100,
				size: 100,
				align: 'center',
				footer: ({ table }) => {
					const myRows = table.getRowModel().rows.map(item => item.original);
					return myRows.reduce(
						(accumulator, currentValue) => accumulator + currentValue.price,
						0
					);
				},
			},
		],
		[translate]
	);

	return (
		<div className="p-4 flex flex-col gap-2">
			<WarningInfo
				type="warning"
				msg={translate('IMPLEMENTS_UNDER_CONSTRUCTION')}
			/>
			<div className="grid grid-cols-12 gap-2">
				<div className="col-span-12">
					<Input
						value={globalFilter ?? ''}
						onChange={e => setGlobalFilter(e.target.value)}
						placeholder={translate('SEARCH_ALL_COLUMNS...')}
						type="search"
					/>
				</div>
			</div>
			<Table
				columns={columns}
				data={data}
				globalFilter={{
					filter: globalFilter,
					setFilter: setGlobalFilter,
				}}
			/>
		</div>
	);
}
