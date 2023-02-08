import { ColumnDef, HeaderContext, Row } from '@tanstack/react-table';
import { useEffect, useState, useMemo } from 'react';

import { Table } from '~/Components/Table';
import { useTranslation } from '~/Hooks/UseTranslation';
import { TPerson } from '~/Types/TPerson';
import { makeData } from '~/Utils/MakeData';
import { Input } from '~/Components/Input';

type Game = { id: string; name: string; price: number };

export default function Footer() {
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

	function getTotals(props: HeaderContext<Game, unknown>) {
		try {
			const identColumn = props.column.id as keyof Game;
			const allItems = [...props.column.getFacetedRowModel().rows];
			console.log(allItems);
			const itemsFiltreds = [
				...props.column
					.getFacetedRowModel()
					// eslint-disable-next-line no-underscore-dangle
					.rows.filter(item => item.columnFilters.__global__ === true),
			];
			console.log({ itemsFiltreds });
			console.log({ globalFilter });
			if (globalFilter === '' && itemsFiltreds.length === 0) {
				const totalValue = allItems.reduce(
					(accumulator, currentValue) =>
						accumulator +
						Number(
							unFormatFromReal(String(currentValue.original[identColumn]))
						),
					0
				);

				return formatForReal(totalValue);
			}

			if (globalFilter !== '' && itemsFiltreds.length > 0) {
				const totalValue = itemsFiltreds.reduce(
					(accumulator, currentValue) =>
						accumulator +
						Number(
							unFormatFromReal(String(currentValue.original[identColumn]))
						),
					0
				);

				return formatForReal(totalValue);
			}

			// console.log(
			//  props.column.getFacetedRowModel().rows[0].getVisibleCells() || ''
			// );
			return 'R$ 0,00';
		} catch {
			console.log('Error');
			return 'R$ 0,00';
		}
	}

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
				footer: props => {
					console.log({ props });
					return <div>Q</div>;
				},
			},
		],
		[translate]
	);

	return (
		<div className="p-4 flex flex-col gap-2">
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
