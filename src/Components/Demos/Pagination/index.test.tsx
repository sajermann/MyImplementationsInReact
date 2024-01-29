/**
 * @vitest-environment jsdom
 */
import { fireEvent, render, waitFor } from '@testing-library/react';
import { getPaginationModel } from 'ultimate-pagination';
import { it, describe, vi } from 'vitest';
import { PaginationDemo } from '.';

describe('Components/Demos/PaginationDemo', () => {
	it(`must change pagination`, async () => {
		const { getAllByRole, getByText } = render(<PaginationDemo />);
		expect(getByText('1 OF 9'));
		const buttons = await getAllByRole('button');

		fireEvent.click(buttons[3]);
		await waitFor(() => {
			expect(getByText('9 OF 9'));
		});

		fireEvent.click(buttons[1]);
		await waitFor(() => {
			expect(getByText('8 OF 9'));
		});

		fireEvent.click(buttons[0]);
		await waitFor(() => {
			expect(getByText('1 OF 9'));
		});

		fireEvent.click(buttons[2]);
		await waitFor(() => {
			expect(getByText('2 OF 9'));
		});
	});

	it(`must change pagination with onChange`, async () => {
		const paginationModel = getPaginationModel({
			currentPage: 5,
			totalPages: 9,
			hideEllipsis: false,
			hidePreviousAndNextPageLinks: false,
			hideFirstAndLastPageLinks: false,
		});
		const spy = vi.fn();
		const { getAllByRole, getByText } = render(
			<PaginationDemo
				onChange={spy}
				currentPage={5}
				totalPages={9}
				paginationModel={paginationModel}
			/>
		);
		expect(getByText('5 OF 9'));
		const buttons = await getAllByRole('button');

		fireEvent.click(buttons[3]);
		await waitFor(() => {
			expect(spy).toBeCalledWith(9);
		});

		fireEvent.click(buttons[1]);
		await waitFor(() => {
			expect(spy).toBeCalledWith(9);
		});

		fireEvent.click(buttons[0]);
		await waitFor(() => {
			expect(spy).toBeCalledWith(9);
		});

		fireEvent.click(buttons[2]);
		await waitFor(() => {
			expect(spy).toBeCalledWith(9);
		});
	});
});
