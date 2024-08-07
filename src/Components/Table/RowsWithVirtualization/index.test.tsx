/* eslint-disable no-return-assign */
/**
 * @vitest-environment jsdom
 */
import { fireEvent, render, waitFor } from '@testing-library/react';
import {
	ColumnDef,
	getCoreRowModel,
	getSortedRowModel,
	useReactTable,
	getFilteredRowModel,
	Row,
} from '@tanstack/react-table';
import { describe, expect } from 'vitest';
import { RefObject, useRef, useState } from 'react';

import { DEFAULT_PAG } from '~/Constants/Others';
import { TSelection } from '~/Types/TSelection';
import { useColumns } from '~/Hooks/UseColumns';
import { makeData } from '~/Utils/MakeData';
import { RowsWithVirtualization } from '.';

const data = makeData.randomObject(['id', 'name'], 100);

const columns: ColumnDef<{ id: string; name: string }>[] = [
	{
		accessorKey: 'id',
		header: 'Id',
		minSize: 100,
		size: 100,
	},
	{
		accessorKey: 'name',
		header: 'Nome',
		minSize: 100,
		size: 100,
	},
];

type TProps<T> = {
	selection?: Omit<TSelection<T>, 'disableCheckbox'>;
	disabledVirtualization?: boolean;
	rowForUpdate?: { row: number; data: T } | null;
	expandLine?: {
		render: (data: Row<T>) => React.ReactNode;
	};
};

function Mock<T>({
	disabledVirtualization,
	expandLine,
	rowForUpdate,
	selection,
}: TProps<T>) {
	const tableContainerRef = useRef<HTMLDivElement>(null);

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		columnResizeMode: 'onChange',
		getFilteredRowModel: getFilteredRowModel(),
		// pageCount: pagination?.pageCount,
		// state: {
		// 	pagination: {
		// 		pageIndex: pagination?.pageIndex || 0,
		// 		pageSize: pagination?.pageSize || 0,
		// 	},
		// 	sorting: sorting?.disabled ? undefined : sortingInternal,
		// 	rowSelection: selection?.rowSelection,
		// 	globalFilter: globalFilter?.filter,
		// 	columnVisibility,
		// 	columnOrder,
		// },
		// onGlobalFilterChange: globalFilter?.setFilter,
		// onRowSelectionChange: selection?.setRowSelection,
		// enableRowSelection: selection !== undefined,
		// enableMultiRowSelection: selection?.type === 'multi',
		// onSortingChange: sorting?.disabled
		// 	? undefined
		// 	: funcUpdater => {
		// 			if (sorting?.manualSorting) {
		// 				const resultSorts = (
		// 					funcUpdater as unknown as (
		// 						dataTempOldSort: SortingState
		// 					) => Record<string, unknown>[]
		// 				)(sortingInternal);
		// 				sorting.manualSorting.fn(resultSorts);
		// 			}
		// 			return setSortingInternal(funcUpdater);
		// 	  },
		// getSortedRowModel: getSortedRowModel(),
		// getRowCanExpand: () => !!expandLine,
		// getExpandedRowModel: getExpandedRowModel(),
		// manualPagination: true,
		// onPaginationChange: pagination?.setPagination,
		// meta,
		// globalFilterFn: globalFilter?.globalFilterFn || 'auto',
		// manualSorting: !!sorting?.manualSorting,
		// enableMultiSort: true,
	});

	const { rows } = table.getRowModel();
	console.log({ tableContainerRef });
	return (
		<div className="w-14 h-14" ref={tableContainerRef}>
			<RowsWithVirtualization
				tableContainerRef={tableContainerRef}
				disabledVirtualization={disabledVirtualization}
				rows={rows}
				expandLine={expandLine}
				rowForUpdate={rowForUpdate}
				selection={selection}
			/>
		</div>
	);
}

describe('Components/Table/RowsWithVirtualization', () => {
	it(`must ...`, async () => {
		console.log(JSON.stringify({ data }, null, 2));
		const { findByText, queryByText, queryAllByText, getAllByText } = render(
			<Mock />,
		);
		// const first = queryAllByText('name-0');
		// const last = queryAllByText(`name-${data.length}`);
		// console.log({ first, last });

		// await waitFor(async () => {
		// 	const text = await findByText('name-0');
		// 	console.log({ text });
		// 	expect(text).not.toBeUndefined();
		// });
	});
});
