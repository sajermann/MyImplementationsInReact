import { useEffect, useMemo, useState } from 'react';
import { Column, ColumnDef, Table as TTable } from '@tanstack/react-table';

import { TFilterActive } from '~/Types/TFilterActive';
import { Table } from '~/Components/Table';
import { useTranslation } from '~/Hooks/UseTranslation';
import { TPerson } from '~/Types/TPerson';
import { makeData } from '~/Utils/MakeData';
import { useColumns } from '~/Hooks/UseColumns';
import { SuperFilter } from '~/Components/Filter/SuperFilter';
import { Main } from '~/Components/Main';
import Section from '~/Components/Section';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';
import { formatDate, stringToDate } from '@sajermann/utils/FormatDate';
import { FilterId } from '~/Components/TableExamples/FilterId';
import { FilterBirthday } from '~/Components/TableExamples/FilterBirthday';
import { FilterColumnBySelect } from '~/Components/TableExamples/FilterColumnBySelect';
import { tableUtils } from '~/Utils/Table';

export function FilterPage() {
	const { translate } = useTranslation();
	const [data, setData] = useState<TPerson[]>([]);
	const [globalFilter, setGlobalFilter] = useState<TFilterActive[]>([]);

	const { columns } = useColumns();

	const columns2 = useMemo<ColumnDef<TPerson>[]>(
		() => [
			{
				accessorKey: 'id',
				header: 'ID',
				minSize: 100,
				size: 100,
				meta: {
					align: 'center',
					filterElement: (column: Column<TPerson, string>) => (
						<FilterId column={column} />
					),
				},
				filterFn: (row, columnId, valueFilter) => {
					const columnValue = Number(row.getValue(columnId));
					const [filterType, filterValue] = valueFilter;
					if (filterValue === '' && filterType === '') {
						return true;
					}

					const config: Record<string, boolean> = {
						smaller: columnValue < Number(filterValue),
						bigger: columnValue > Number(filterValue),
						equals: columnValue === Number(filterValue),
					};
					return config[filterType as string] || false;
				},
			},
			columns[1],
			{
				accessorKey: 'name',
				header: translate('NAME'),
				minSize: 100,
				size: 100,
				enableSorting: true,
				meta: {
					align: 'center',
					filterElement: (
						column: Column<TPerson, string>,
						table: TTable<TPerson>
					) => (
						<FilterColumnBySelect
							column={column}
							table={table}
							propForFilter="name"
						/>
					),
				},
				filterFn: (row, columnId, valueFilter) =>
					valueFilter.length === 0 ||
					valueFilter.includes(row.getValue(columnId)),
			},
			columns[3],
			{
				accessorFn: row => formatDate(new Date(row.birthday)),
				accessorKey: 'birthday',
				header: translate('BIRTHDAY'),
				minSize: 100,
				size: 100,
				sortingFn: (rowA, rowB, columnId) => {
					const dateA = stringToDate(rowA.getValue(columnId));
					const dateB = stringToDate(rowB.getValue(columnId));
					return dateB < dateA ? 1 : -1;
				},
				meta: {
					align: 'center',
					filterElement: (column: Column<TPerson, string>) => (
						<FilterBirthday column={column} />
					),
				},
				filterFn: (row, columnId, valueFilter) =>
					tableUtils.filterRangeDate({ row, columnId, valueFilter }),
			},
			{
				accessorKey: 'email',
				header: 'Email',
				minSize: 100,
				size: 100,
				meta: {
					align: 'center',
					filterElement: (
						column: Column<TPerson, string>,
						table: TTable<TPerson>
					) => (
						<FilterColumnBySelect
							column={column}
							table={table}
							propForFilter="email"
						/>
					),
				},
				filterFn: (row, columnId, valueFilter) =>
					valueFilter.length === 0 ||
					valueFilter.includes(row.getValue(columnId)),
			},
			columns[6],
			{
				accessorKey: 'friends',
				accessorFn: e => e.friends.map(item => item.name).join(' | '),
				header: translate('FRIENDS'),
				minSize: 100,
				size: 200,
				cell: info => info.getValue(),
				enableGlobalFilter: false,
			},
		],
		[translate]
	);

	useEffect(() => {
		setData(makeData.person(10));
	}, []);

	return (
		<Main data-content="content-main">
			<Section heading={translate('FILTER')}>
				{translate('IMPLEMENTS_FILTER_MODE')}
			</Section>
			<Section subHeading={translate('CODES')}>
				<div className="flex gap-2">
					<QuickAccessGithub name="Filter" />
				</div>
			</Section>
			<Section subHeading={translate('IMPLEMENTS')}>
				<div className="flex flex-col gap-2">
					<div>
						<SuperFilter onChange={setGlobalFilter} />
					</div>
					<Table
						columns={[...columns2]}
						data={data}
						globalFilter={{
							filter: globalFilter,
							setFilter: setGlobalFilter,
							globalFilterFn: (rows, columnId, filters) => {
								if (filters.length === 0) return true;

								return tableUtils.globalFilterFnCustom(rows, columnId, filters);
							},
							disableInput: true,
						}}
					/>
				</div>
			</Section>
		</Main>
	);
}
