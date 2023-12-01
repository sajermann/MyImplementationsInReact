/* eslint-disable no-return-assign */
/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import { describe, expect, vi } from 'vitest';
import { RadioGroup } from '~/Components/Radio';

import { Selector } from '.';

describe('Components/Table/Selector', () => {
	it(`must render radio selection`, async () => {
		const { getByRole } = render(
			<RadioGroup>
				<Selector
					selection={{
						type: 'single',
						singleRadio: true,
						rowSelection: {},
						setRowSelection: vi.fn(),
					}}
					row={{} as any}
				/>
			</RadioGroup>
		);
		const result = getByRole('radio');
		expect(result).toBeInTheDocument();
	});

	it(`must render radio selection (disableSelectionRow)`, async () => {
		const { getByRole } = render(
			<RadioGroup>
				<Selector
					selection={{
						type: 'single',
						singleRadio: true,
						rowSelection: {},
						setRowSelection: vi.fn(),
						disableSelectionRow: vi.fn(),
					}}
					row={{} as any}
				/>
			</RadioGroup>
		);
		const result = getByRole('radio');
		expect(result).toBeInTheDocument();
	});

	it(`must render multi selection`, async () => {
		const { getByRole } = render(
			<Selector
				selection={{
					type: 'multi',
					rowSelection: {},
					setRowSelection: vi.fn(),
				}}
				table={
					{
						getIsAllRowsSelected: () => true,
						getToggleAllRowsSelectedHandler: () => true,
						getIsSomeRowsSelected: () => true,
					} as any
				}
			/>
		);
		const result = getByRole('checkbox');
		expect(result).toBeInTheDocument();
	});

	it(`must render multi selection (indeterminate)`, async () => {
		const { getByRole } = render(
			<Selector
				selection={{
					type: 'multi',
					rowSelection: {},
					setRowSelection: vi.fn(),
				}}
				table={
					{
						getIsAllRowsSelected: () => false,
						getToggleAllRowsSelectedHandler: () => true,
						getIsSomeRowsSelected: () => true,
					} as any
				}
			/>
		);
		const result = getByRole('checkbox');
		expect(result).toBeInTheDocument();
	});

	it(`must render multi selection (not selected)`, async () => {
		const { getByRole } = render(
			<Selector
				selection={{
					type: 'multi',
					rowSelection: {},
					setRowSelection: vi.fn(),
				}}
				table={
					{
						getIsAllRowsSelected: () => false,
						getToggleAllRowsSelectedHandler: () => true,
						getIsSomeRowsSelected: () => false,
					} as any
				}
			/>
		);
		const result = getByRole('checkbox');
		expect(result).toBeInTheDocument();
	});

	it(`must render single checkbox selection`, async () => {
		const { getByRole } = render(
			<Selector
				selection={{
					type: 'single',
					rowSelection: {},
					setRowSelection: vi.fn(),
				}}
				row={
					{
						getIsSelected: () => true,
					} as any
				}
				table={
					{
						getIsAllRowsSelected: () => true,
						getToggleAllRowsSelectedHandler: () => true,
						getIsSomeRowsSelected: () => true,
					} as any
				}
			/>
		);
		const result = getByRole('checkbox');
		expect(result).toBeInTheDocument();
	});

	it(`must render single checkbox selection (disableSelectionRow)`, async () => {
		const { getByRole } = render(
			<Selector
				selection={{
					type: 'single',
					rowSelection: {},
					setRowSelection: vi.fn(),
					disableSelectionRow: vi.fn(),
				}}
				row={
					{
						getIsSelected: () => true,
					} as any
				}
				table={
					{
						getIsAllRowsSelected: () => true,
						getToggleAllRowsSelectedHandler: () => true,
						getIsSomeRowsSelected: () => true,
					} as any
				}
			/>
		);
		const result = getByRole('checkbox');
		expect(result).toBeInTheDocument();
	});

	it(`must not render`, async () => {
		const { queryByRole } = render(
			<RadioGroup>
				<Selector
					selection={{
						type: 'single',
						singleRadio: true,
						rowSelection: {},
						setRowSelection: vi.fn(),
					}}
				/>
			</RadioGroup>
		);
		const result = queryByRole('radio');
		expect(result).toBeNull();
	});
});
