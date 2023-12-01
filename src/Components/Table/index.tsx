import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import {
	CellContext,
	ColumnDef,
	getCoreRowModel,
	getExpandedRowModel,
	getSortedRowModel,
	HeaderContext,
	Row,
	SortingState,
	useReactTable,
	getFilteredRowModel,
	TableMeta,
	FilterFnOption,
	ColumnSizingState,
	ColumnSizingInfoState,
} from '@tanstack/react-table';

import { TPagination } from '~/Types/TPagination';
import { TSelection } from '~/Types/TSelection';
import { useTranslation } from '~/Hooks/UseTranslation';
import { managerClassNames } from '~/Utils/ManagerClassNames';
import { TDefTools } from '~/Types/TExport';
import { tableUtils } from '~/Utils/Table';
import { Tfoot } from './Tfoot';
import { Header } from './Header';
import { Thead } from './Thead';
import { Tbody } from './Tbody';
import { Pagination } from './Pagination';

import styles from './index.module.css';
import { RadioGroup } from '../Radio';
import { Selector } from './Selector';
import { Expander } from './Expander';

type Props<T, U = undefined> = {
	selection?: TSelection<T>;

	columns: ColumnDef<T, unknown>[];
	data: T[];
	isLoading?: boolean;
	expandLine?: {
		render: (data: Row<T>) => React.ReactNode;
	};

	globalFilter?: {
		filter: U;
		setFilter: Dispatch<SetStateAction<U>>;
		globalFilterFn?: FilterFnOption<T>;
		disableInput?: boolean;
	};

	rowForUpdate?: { row: number; data: T } | null;
	disabledVirtualization?: boolean;
	pagination?: TPagination;
	meta?: TableMeta<T>;
	onResizing?: (data: {
		columnSizing: ColumnSizingState;
		columnSizingInfo: ColumnSizingInfoState;
	}) => void;

	columnVisibility?: Record<string, boolean>;
	columnOrder?: string[];
	height?: string;
	minHeight?: string;
	maxHeight?: string;
	showFooter?: boolean;

	tools?: TDefTools<T>;
	sorting?: {
		manualSorting?: {
			fn: (data: Record<string, unknown>[]) => void;
		};
		disabled?: boolean;
	};
};

export function Table<T, U = undefined>({
	selection,
	columns,
	data,
	isLoading,
	expandLine,
	globalFilter,
	rowForUpdate,
	disabledVirtualization,
	pagination,
	meta,
	onResizing,
	columnVisibility,
	columnOrder,
	height,
	minHeight,
	maxHeight,
	showFooter,
	tools,
	sorting,
}: Props<T, U>) {
	const [sortingInternal, setSortingInternal] = useState<SortingState>([]);
	const { translate } = useTranslation();

	function buildColumns() {
		const result: ColumnDef<T, unknown>[] = [];

		if (selection && !selection.disableCheckbox) {
			const t = [
				{
					id: 'select',
					header: ({ table }: HeaderContext<T, unknown>) => (
						<Selector selection={selection} table={table} />
					),
					size: 50,
					minSize: 50,
					maxSize: 50,
					meta: {
						align: 'center',
					},
					enableSorting: false,
					enableResizing: false,
					cell: ({ row }: CellContext<T, unknown>) => (
						<Selector row={row} selection={selection} />
					),
				},
			];
			result.push(t as unknown as ColumnDef<T, unknown>);
		}

		if (expandLine) {
			const t = [
				{
					id: 'expander',
					header: translate('ACTION'),
					minSize: 50,
					size: 50,
					enableSorting: false,
					enableResizing: false,
					cell: ({ row }: CellContext<T, unknown>) => <Expander row={row} />,
				},
			];
			result.push(t as unknown as ColumnDef<T, unknown>);
		}

		result.push(columns as unknown as ColumnDef<T, unknown>);
		return result.flat();
	}

	const table = useReactTable({
		data,
		columns: buildColumns(),
		getCoreRowModel: getCoreRowModel(),
		columnResizeMode: 'onChange',
		getFilteredRowModel: getFilteredRowModel(),
		pageCount: pagination?.pageCount,
		state: {
			pagination: {
				pageIndex: pagination?.pageIndex || 0,
				pageSize: pagination?.pageSize || 0,
			},
			sorting: sorting?.disabled ? undefined : sortingInternal,
			rowSelection: selection?.rowSelection,
			globalFilter: globalFilter?.filter,
			columnVisibility,
			columnOrder,
		},
		onGlobalFilterChange: globalFilter?.setFilter,
		onRowSelectionChange: selection?.setRowSelection,
		enableRowSelection: selection !== undefined,
		enableMultiRowSelection: selection?.type === 'multi',
		onSortingChange: sorting?.disabled
			? undefined
			: funcUpdater => {
					if (sorting?.manualSorting) {
						const resultSorts = (
							funcUpdater as unknown as (
								dataTempOldSort: SortingState
							) => Record<string, unknown>[]
						)(sortingInternal);
						sorting.manualSorting.fn(resultSorts);
					}
					return setSortingInternal(funcUpdater);
			  },
		getSortedRowModel: getSortedRowModel(),
		getRowCanExpand: () => !!expandLine,
		getExpandedRowModel: getExpandedRowModel(),
		manualPagination: true,
		onPaginationChange: pagination?.setPagination,
		meta,
		globalFilterFn: globalFilter?.globalFilterFn || 'auto',
		manualSorting: !!sorting?.manualSorting,
		enableMultiSort: true,
	});

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (onResizing) {
				onResizing({
					columnSizing: table.getState().columnSizing,
					columnSizingInfo: table.getState().columnSizingInfo,
				});
			}
		}, 1000);

		return () => clearTimeout(timeout);
	}, [table.getState().columnSizing]);

	const tableContainerRef = useRef<HTMLDivElement>(null);

	return (
		<>
			<Header table={table} globalFilter={globalFilter} tools={tools} />
			<div
				ref={tableContainerRef}
				className={managerClassNames({
					[styles.customContainer]: true,
					'scrollbar-thin': true,
					'scrollbar-thumb-gray-500': true,
					'scrollbar-track-gray-300': true,
					'scrollbar-thumb-rounded-full': true,
					'scrollbar-track-rounded-full': true,
				})}
				style={{
					overflow: isLoading ? 'hidden' : 'auto',
					height: height || undefined,
					minHeight: minHeight || undefined,
					maxHeight: maxHeight || undefined,
				}}
			>
				<RadioGroup value={tableUtils.getValueForRadio({ selection })}>
					<table className={styles.table}>
						<Thead table={table} sorting={sorting} />

						<Tbody
							table={table}
							tableContainerRef={tableContainerRef}
							data={data}
							columns={columns}
							isLoading={isLoading}
							expandLine={expandLine}
							selection={selection}
							rowForUpdate={rowForUpdate}
							disabledVirtualization={disabledVirtualization}
						/>
						<Tfoot table={table} showFooter={showFooter} />
					</table>
				</RadioGroup>
			</div>
			<Pagination table={table} pagination={pagination} />
		</>
	);
}
