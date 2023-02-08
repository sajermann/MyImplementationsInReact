import { useEffect, useMemo, useState } from 'react';
import { Column, ColumnDef, Row } from '@tanstack/react-table';

import { Select } from '~/Components/Select';
import { Input } from '~/Components/Input';
import { Button } from '~/Components/Button';
import { Popover } from '~/Components/Popover';
import { Icons } from '~/Components/Icons';
import { SuperFilter } from '~/Components/Filter/SuperFilter';
import { TFilterActive } from '~/Types/TFilterActive';
import { Table } from '~/Components/Table';
import { useTranslation } from '~/Hooks/UseTranslation';
import { TPerson } from '~/Types/TPerson';
import { makeData } from '~/Utils/MakeData';
import { useColumns } from '~/Hooks/UseColumns';

type Props = {
	column: Column<any, any>;
};

function FilterId({ column }: Props) {
	const { translate } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	const [selectType, setSelectType] = useState('');
	const [filterValue, setFilterValue] = useState('');
	const options = [
		{ value: 'equals', label: translate('EQUAL') },
		{ value: 'bigger', label: translate('BIGGER_THAN') },
		{ value: 'smaller', label: translate('SMALLER_THAN') },
	];

	function verifyFillFilter() {
		const filterValueTemp = column.getFilterValue() as string[];
		if (
			!filterValueTemp ||
			filterValueTemp[0] === '' ||
			filterValueTemp[1] === ''
		) {
			return false;
		}
		return true;
	}

	return (
		<Popover
			isOpen={isOpen}
			onClose={() => setIsOpen(false)}
			trigger={
				<button
					className="w-5 h-4 flex items-center justify-center"
					type="button"
					onClick={() => setIsOpen(true)}
				>
					<Icons.Funnel fullFill={verifyFillFilter()} />
				</button>
			}
		>
			<>
				<div className="flex flex-col gap-4">
					<div className="w-48">
						<Select
							isClearable
							options={options}
							value={options.find(item => item.value === selectType)?.value}
							onChange={e => setSelectType(e.target.value)}
							id="select_type"
							placeholder={translate('FILTER_TYPE')}
						/>
					</div>
					<div className="w-48">
						<Input
							placeholder={translate('TYPE_VALUE_FOR_FILTER')}
							onChange={e => setFilterValue(e.target.value)}
							value={filterValue}
						/>
					</div>
				</div>

				<div className="w-full flex justify-center gap-4 mt-4">
					<Button
						style={{
							borderRadius: '50%',
							maxHeight: 50,
							maxWidth: 50,
							minWidth: 50,
							width: 50,
						}}
						type="button"
						onClick={() => {
							setSelectType('');
							setFilterValue('');
						}}
					>
						<div className="w-7 h-7">
							<Icons.Trash />
						</div>
					</Button>

					<Button
						style={{
							borderRadius: '50%',
							maxHeight: 50,
							maxWidth: 50,
							minWidth: 50,
							width: 50,
						}}
						type="button"
						onClick={() => {
							column.setFilterValue([selectType, filterValue]);
							setIsOpen(false);
						}}
					>
						<div className="w-7 h-7">
							<Icons.Save />
						</div>
					</Button>
				</div>
			</>
		</Popover>
	);
}

type Props2 = {
	column: Column<any, any>;
	data: TPerson[];
};

function FilterName({ column, data }: Props2) {
	const { translate } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	const [filterValue, setFilterValue] = useState<string[]>([]);

	function getNames() {
		return data.map(item => ({ value: item.name, label: item.name }));
	}

	function verifyFillFilter() {
		const filterValueTemp = column.getFilterValue();
		if (!filterValueTemp || (filterValueTemp as string[]).length === 0) {
			return false;
		}
		return true;
	}

	return (
		<Popover
			isOpen={isOpen}
			onClose={() => setIsOpen(false)}
			trigger={
				<button
					className="w-5 h-4 flex items-center justify-center"
					type="button"
					onClick={() => setIsOpen(true)}
				>
					<Icons.Funnel fullFill={verifyFillFilter()} />
				</button>
			}
		>
			<>
				<Select
					placeholder={translate('FILTER_NAMES')}
					menuPosition="fixed"
					menuPortalTarget={document.body}
					options={getNames()}
					isMulti={{
						onChange: e => {
							setFilterValue(e.target.value);
						},
						value: filterValue,
					}}
					id="filter_names"
				/>

				<div className="w-full flex justify-center gap-4 mt-4">
					<Button
						style={{
							borderRadius: '50%',
							maxHeight: 50,
							maxWidth: 50,
							minWidth: 50,
							width: 50,
						}}
						type="button"
						onClick={() => {
							setFilterValue([]);
						}}
					>
						<div className="w-7 h-7">
							<Icons.Trash />
						</div>
					</Button>

					<Button
						style={{
							borderRadius: '50%',
							maxHeight: 50,
							maxWidth: 50,
							minWidth: 50,
							width: 50,
						}}
						type="button"
						onClick={() => {
							column.setFilterValue(filterValue);
							setIsOpen(false);
						}}
					>
						<div className="w-7 h-7">
							<Icons.Save />
						</div>
					</Button>
				</div>
			</>
		</Popover>
	);
}

export default function Filter() {
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
				filterElement: (column: Column<any, any>, table: any) => (
					<FilterId column={column} />
				),
				filterFn: (row, columnId, valueFilter) => {
					console.log({ row, columnId, valueFilter });
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
				filterElement: (column: Column<any, any>, table: any) => (
					<FilterName column={column} data={data} />
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
			columns[4],
			columns[5],
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
		setData(makeData.person(5));
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

		return false;
	}

	function normalFluxFilter(
		rows: Row<TPerson>,
		columnId: string,
		filters: any
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
		<div className="p-4 flex flex-col gap-2">
			<strong>{translate('UNDER_CONSTRUCTION')}</strong>
			<div>
				<SuperFilter
					globalFilter={globalFilter}
					setGlobalFilter={setGlobalFilter}
				/>
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
				}}
			/>
		</div>
	);
}
