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
} from '@tanstack/react-table';
import { describe, expect } from 'vitest';
import { useState } from 'react';

import { DEFAULT_PAG } from '~/Constants/Others';
import { Pagination } from '.';

const DATA = [
	{
		id: '1',
		name: 'Test1',
	},
	{
		id: '2',
		name: 'Test2',
	},
];

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

function Mock() {
	const [pageCount] = useState(5);
	const [pagination, setPagination] = useState(DEFAULT_PAG);
	const table = useReactTable({
		data: DATA,
		columns,
		getFilteredRowModel: getFilteredRowModel(),
		pageCount,
		state: {
			pagination: {
				pageIndex: pagination?.pageIndex || 0,
				pageSize: pagination?.pageSize || 5,
			},
		},
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		manualPagination: true,
		onPaginationChange: setPagination,
	});
	return (
		<Pagination
			table={table}
			pagination={{
				disabledActions: false,
			}}
			propsButtonFirstPage={{
				'data-testid': 'firstButton',
			}}
			propsButtonPrevPage={{
				'data-testid': 'prevButton',
			}}
			propsButtonNextPage={{
				'data-testid': 'nextButton',
			}}
			propsButtonLastPage={{
				'data-testid': 'lastButton',
			}}
			propsInput={{
				'data-testid': 'input',
			}}
		/>
	);
}

describe('Components/Table/Pagination', () => {
	test(`must navigate in pages through of buttons`, async () => {
		const { findByText, findAllByText, getByTestId } = render(<Mock />);
		const firstButton = getByTestId('firstButton');
		const nextButton = getByTestId('nextButton');
		const prevButton = getByTestId('prevButton');
		const lastButton = getByTestId('lastButton');

		expect(firstButton).not.toBeNull();
		expect(nextButton).not.toBeNull();
		expect(prevButton).not.toBeNull();
		expect(lastButton).not.toBeNull();
		fireEvent.click(nextButton);

		await waitFor(async () => {
			const text = await findByText('2');
			expect(text).not.toBeUndefined();
		});

		await waitFor(async () => {
			fireEvent.click(prevButton);
			const text = await findByText('1');
			expect(text).not.toBeUndefined();
		});

		await waitFor(async () => {
			fireEvent.click(lastButton);
			const text = await findAllByText('5');
			expect(text.length).toBe(2);
		});

		await waitFor(async () => {
			fireEvent.click(firstButton);
			const text = await findByText('1');
			console.log({ text });
			expect(text).not.toBeUndefined();
		});
	});

	test(`must navigate in pages through of input`, async () => {
		const { findByText, getByTestId } = render(<Mock />);
		const input = getByTestId('input');

		expect(input).not.toBeNull();

		fireEvent.change(input, { target: { value: 3 } });
		fireEvent.blur(input);

		await waitFor(async () => {
			const text = await findByText('3');
			expect(text).not.toBeUndefined();
		});
	});
});
