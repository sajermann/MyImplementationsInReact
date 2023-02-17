/* eslint-disable no-return-assign */
/**
 * @vitest-environment jsdom
 */
import { ColumnDef } from '@tanstack/react-table';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { describe, expect, vi } from 'vitest';
import { Table } from '.';

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

describe('Components/Table', () => {
	test(`should render text NO_DATA when data is empty`, async () => {
		const { findByText } = render(<Table data={[]} columns={[]} />);
		const result = await findByText('NO_DATA');
		expect(result).not.toBeNull();
	});

	test(`should select an item - single`, async () => {
		let resultMock = {};
		const setRowSelectionMock = (s: any) => (resultMock = { ...s() });
		const { container } = render(
			<Table
				data={DATA}
				columns={columns}
				selection={{
					rowSelection: {},
					setRowSelection: setRowSelectionMock,
					type: 'single',
				}}
			/>
		);
		const itemOne = await container.querySelectorAll('tbody tr')[0];
		expect(itemOne).not.toBeNull();
		fireEvent.click(itemOne);
		await waitFor(() => {
			expect(JSON.stringify(resultMock)).toBe(JSON.stringify({ '0': true }));
		});
	});

	test(`should select an item - multi`, async () => {
		let resultMock = {};
		const setRowSelectionMock = (s: any) => (resultMock = { ...s() });
		const { container } = render(
			<Table
				data={DATA}
				columns={columns}
				selection={{
					rowSelection: {},
					setRowSelection: setRowSelectionMock,
					type: 'multi',
				}}
			/>
		);
		const itemTwo = await container.querySelectorAll('tbody tr')[1];
		expect(itemTwo).not.toBeNull();
		fireEvent.click(itemTwo);
		await waitFor(() => {
			expect(JSON.stringify(resultMock)).toBe(JSON.stringify({ '1': true }));
		});
	});

	test(`should select all items`, async () => {
		let resultMock = {};
		const setRowSelectionMock = (s: any) => (resultMock = { ...s() });
		const { container } = render(
			<Table
				data={DATA}
				columns={columns}
				selection={{
					rowSelection: {},
					setRowSelection: setRowSelectionMock,
					type: 'multi',
				}}
			/>
		);
		const checkbox = await container.querySelector('[data-state="unchecked"]');
		expect(checkbox).not.toBeNull();
		if (!checkbox) return;
		fireEvent.click(checkbox);
		await waitFor(() => {
			expect(JSON.stringify(resultMock)).toBe(
				JSON.stringify({ '0': true, '1': true })
			);
		});
	});

	test(`should not select item`, async () => {
		const resultMock = () => true;
		const setRowSelectionMock = vi.fn();
		const { container } = render(
			<Table
				data={DATA}
				columns={columns}
				selection={{
					rowSelection: {},
					setRowSelection: setRowSelectionMock,
					type: 'single',
					disableSelectionRow: resultMock,
				}}
			/>
		);
		const itemOne = await container.querySelectorAll('tbody tr')[0];
		expect(itemOne).not.toBeNull();
		fireEvent.click(itemOne);
		await waitFor(() => {
			expect(setRowSelectionMock).not.toBeCalled();
		});
	});
});
