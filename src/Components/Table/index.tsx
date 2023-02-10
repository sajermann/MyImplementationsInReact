/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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
import { Checkbox } from '~/Components/Checkbox';

import { Thead } from './Thead';
import { Tbody } from './Tbody';
import { Pagination } from './Pagination';

import styles from './index.module.css';
import { Tfoot } from './Tfoot';

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
};

type PropsTableInternal = {
	getIsAllRowsSelected: () => boolean;
	getIsSomeRowsSelected: () => boolean;
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
}: Props<T, U>) {
	const [sorting, setSorting] = useState<SortingState>([]);

	const { translate } = useTranslation();

	function verifyIndeterminate(table: PropsTableInternal) {
		if (table.getIsAllRowsSelected()) {
			return true;
		}

		if (table.getIsSomeRowsSelected()) {
			return 'indeterminate';
		}

		return false;
	}

	function buildColumns() {
		const result: ColumnDef<T, unknown>[] = [];

		if (selection && !selection.disableCheckbox) {
			const t = [
				{
					id: 'select',
					header: ({ table }: HeaderContext<T, unknown>) =>
						selection.type === 'multi' && (
							<Checkbox
								containerProps={{
									className: 'flex items-center justify-center',
								}}
								checked={verifyIndeterminate(table)}
								onClick={table.getToggleAllRowsSelectedHandler()}
								{...{ disabled: selection.disableSelectionRow !== undefined }}
							/>
						),
					size: 50,
					minSize: 50,
					maxSize: 50,
					align: 'center',
					enableSorting: false,
					enableResizing: false,
					cell: ({ row }: CellContext<T, unknown>) => (
						<Checkbox
							containerProps={{
								className: 'flex items-center justify-center',
							}}
							{...{
								disabled: selection.disableSelectionRow
									? selection.disableSelectionRow(row)
									: false,
								checked: row.getIsSelected(),
							}}
						/>
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
					cell: ({ row }: CellContext<T, unknown>) => (
						<div className="w-full flex items-center justify-center">
							<button
								type="button"
								onClick={row.getToggleExpandedHandler()}
								{...{
									style: { cursor: 'pointer' },
								}}
							>
								{row.getIsExpanded() ? '✏' : '📝'}
							</button>
						</div>
					),
				},
			];
			result.push(t as unknown as ColumnDef<T, unknown>);
		}

		result.push(columns as unknown as ColumnDef<T, unknown>);
		return result.flat();
	}

	const table = useReactTable({
		data,
		// initialState: { columnVisibility },
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
			sorting,
			rowSelection: selection?.rowSelection,
			globalFilter: globalFilter?.filter,
			columnVisibility,
			columnOrder,
		},
		onGlobalFilterChange: globalFilter?.setFilter,
		onRowSelectionChange: selection?.setRowSelection,
		enableRowSelection: selection !== undefined,
		enableMultiRowSelection: selection?.type === 'multi',
		onSortingChange: setSorting,
		getSortedRowModel: getSortedRowModel(),
		getRowCanExpand: () => !!expandLine,
		getExpandedRowModel: getExpandedRowModel(),
		manualPagination: true,
		onPaginationChange: pagination?.setPagination,
		meta,

		globalFilterFn: globalFilter?.globalFilterFn || 'auto',
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

	function buildClass() {
		const classes = [styles.customContainer];
		classes.push('scrollbar-thin');
		classes.push('scrollbar-thumb-gray-500');
		classes.push('scrollbar-track-gray-300');
		classes.push('scrollbar-thumb-rounded-full');
		classes.push('scrollbar-track-rounded-full');
		return classes.join(' ');
	}

	return (
		<>
			<div
				ref={tableContainerRef}
				className={buildClass()}
				style={{
					overflow: isLoading ? 'hidden' : 'auto',
					height: height || undefined,
					minHeight: minHeight || undefined,
					maxHeight: maxHeight || undefined,
				}}
			>
				<table className={styles.table}>
					<Thead table={table} />

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
					<Tfoot table={table} />
				</table>
			</div>
			{pagination && (
				<Pagination
					table={table}
					disabledActions={pagination.disabledActions}
					disabledPageSize={pagination.disabledPageSize}
				/>
			)}
		</>
	);
}
