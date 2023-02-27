import { useEffect, useMemo, useState } from 'react';
import { Column, ColumnDef, Row, Table as TTable } from '@tanstack/react-table';

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
				align: 'center',
				filterElement: (column: Column<TPerson, string>) => (
					<FilterId column={column} />
				),
				filterFn: (row, columnId, valueFilter) => {
					if (valueFilter[0] === '' && valueFilter[1] === '') {
						return true;
					}
					if (valueFilter[0] === 'smaller') {
						if (Number(row.getValue(columnId)) < Number(valueFilter[1])) {
							return true;
						}
					}
					if (valueFilter[0] === 'bigger') {
						if (Number(row.getValue(columnId)) > Number(valueFilter[1])) {
							return true;
						}
					}
					if (valueFilter[0] === 'equals') {
						if (Number(row.getValue(columnId)) === Number(valueFilter[1])) {
							return true;
						}
					}

					return false;
				},
			},
			columns[1],
			{
				accessorKey: 'name',
				header: translate('NAME'),
				minSize: 100,
				size: 100,
				align: 'center',
				enableSorting: true,
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
				filterFn: (row, columnId, valueFilter) => {
					if (
						valueFilter.length === 0 ||
						valueFilter.includes(row.getValue(columnId))
					) {
						return true;
					}
					return false;
				},
			},
			columns[3],
			{
				accessorFn: row => formatDate(new Date(row.birthday)),
				accessorKey: 'birthday',
				header: translate('BIRTHDAY'),
				minSize: 100,
				size: 100,
				align: 'center',
				sortingFn: (rowA, rowB, columnId) => {
					const dateA = stringToDate(rowA.getValue(columnId));
					const dateB = stringToDate(rowB.getValue(columnId));
					return dateB < dateA ? 1 : -1;
				},
				filterElement: (column: Column<TPerson, string>) => (
					<FilterBirthday column={column} />
				),
				filterFn: (row, columnId, valueFilter) => {
					if (valueFilter.from === '' && valueFilter.to === '') {
						return true;
					}

					if (valueFilter.from !== '' && valueFilter.to !== '') {
						if (
							new Date(valueFilter.from) <=
								stringToDate(row.getValue(columnId)) &&
							new Date(valueFilter.to) >= stringToDate(row.getValue(columnId))
						) {
							return true;
						}
					}
					if (
						valueFilter.from === '' &&
						new Date(valueFilter.to) >= stringToDate(row.getValue(columnId))
					) {
						return true;
					}

					if (
						new Date(valueFilter.from) <=
							stringToDate(row.getValue(columnId)) &&
						valueFilter.to === ''
					) {
						return true;
					}

					return false;
				},
			},
			{
				accessorKey: 'email',
				header: 'Email',
				minSize: 100,
				size: 100,
				align: 'Center',
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
				filterFn: (row, columnId, valueFilter) => {
					if (
						valueFilter.length === 0 ||
						valueFilter.includes(row.getValue(columnId))
					) {
						return true;
					}
					return false;
				},
			},
			columns[6],
			{
				accessorKey: 'friends',
				accessorFn: e => e.friends.map(item => item.name).join(' | '),
				header: translate('FRIENDS'),
				minSize: 100,
				size: 200,
				align: 'left',
				cell: info => info.getValue(),
				enableGlobalFilter: false,
			},
		],
		[translate]
	);

	useEffect(() => {
		setData(makeData.person(10));
	}, []);

	function verifyFilter(
		filterType: string,
		filterValue: string,
		valueCell: string
	) {
		if (filterType === 'equals') {
			if (filterValue === valueCell) {
				return true;
			}
		}

		if (filterType === 'different') {
			if (filterValue !== valueCell) {
				return true;
			}
		}

		if (filterType === 'bigger') {
			if (Number(valueCell) > Number(filterValue)) {
				return true;
			}
		}

		if (filterType === 'smaller') {
			if (Number(valueCell) < Number(filterValue)) {
				return true;
			}
		}

		if (filterType === 'starts') {
			if (valueCell.startsWith(filterValue)) {
				return true;
			}
		}

		if (filterType === 'ends') {
			if (valueCell.endsWith(filterValue)) {
				return true;
			}
		}

		if (filterType === 'contains') {
			if (valueCell.includes(filterValue)) {
				return true;
			}
		}

		return false;
	}

	function normalFluxFilter(
		rows: Row<TPerson>,
		columnId: string,
		filters: TFilterActive[]
	) {
		const valueCell = rows.getValue(columnId) as string;
		const results: boolean[] = [];

		for (const filter of filters) {
			if (filter.column === columnId) {
				results.push(verifyFilter(filter.type, filter.value, valueCell));
			}
		}
		const result = results.find(item => item === true);
		if (result) {
			return true;
		}
		return false;
	}

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
								if (filters.length === 0) {
									return true;
								}
								return normalFluxFilter(rows, columnId, filters);
							},
							disableInput: true,
						}}
					/>
				</div>
			</Section>
		</Main>
	);
}
