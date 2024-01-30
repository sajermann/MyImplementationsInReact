/**
 * @vitest-environment jsdom
 */
import { fireEvent, render, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { it, describe } from 'vitest';

import { ModalPage } from '.';

describe('Pages/ModalPage', () => {
	it(`must open modal 1`, async () => {
		const { getAllByText, queryByText } = render(
			<BrowserRouter>
				<ModalPage />
			</BrowserRouter>
		);
		expect(queryByText('CLICK_IN_CLOSE_BUTTON_FOR_CLOSING_MODAL')).toBeNull();
		const button = getAllByText('WITH_CLOSE_BUTTON')[0];
		fireEvent.click(button);
		await waitFor(() => {
			expect(
				queryByText('CLICK_IN_CLOSE_BUTTON_FOR_CLOSING_MODAL')
			).not.toBeNull();
		});
	});

	it(`must open modal 2`, async () => {
		const { getAllByText, queryByText } = render(
			<BrowserRouter>
				<ModalPage />
			</BrowserRouter>
		);
		expect(queryByText('TYPE_IN_ESC_BUTTON_FOR_CLOSING_MODAL')).toBeNull();
		const button = getAllByText('WITH_CLOSE_BY_ESC')[0];
		fireEvent.click(button);
		await waitFor(() => {
			expect(
				queryByText('TYPE_IN_ESC_BUTTON_FOR_CLOSING_MODAL')
			).not.toBeNull();
		});
	});

	it(`must open modal 3`, async () => {
		const { getAllByText, queryByText } = render(
			<BrowserRouter>
				<ModalPage />
			</BrowserRouter>
		);
		expect(queryByText('CLICK_IN_BACKDROP_FOR_CLOSING_MODAL')).toBeNull();
		const button = getAllByText('WITH_CLOSE_BY_BACKDROP')[0];
		fireEvent.click(button);
		await waitFor(() => {
			expect(queryByText('CLICK_IN_BACKDROP_FOR_CLOSING_MODAL')).not.toBeNull();
		});
	});

	it(`must open modal 4`, async () => {
		const { getAllByText, queryByText } = render(
			<BrowserRouter>
				<ModalPage />
			</BrowserRouter>
		);
		expect(queryByText('CLOSE')).toBeNull();
		fireEvent.click(getAllByText('WITHOUT_OPTIONS_CLOSING')[0]);
		await waitFor(() => {
			expect(queryByText('CLOSE')).not.toBeNull();
		});

		fireEvent.click(getAllByText('CLOSE')[0]);

		await waitFor(() => {
			expect(queryByText('CLOSE')).toBeNull();
		});
	});

	it(`must open modal 5`, async () => {
		const { getAllByText, queryByText } = render(
			<BrowserRouter>
				<ModalPage />
			</BrowserRouter>
		);
		expect(queryByText('Lorem ipsum', { exact: false })).toBeNull();
		fireEvent.click(getAllByText('RESET_ON_CLOSE')[0]);
		await waitFor(() => {
			expect(queryByText('Lorem ipsum', { exact: false })).not.toBeNull();
		});
	});

	it(`must open modal 6`, async () => {
		const { getAllByText, queryByText } = render(
			<BrowserRouter>
				<ModalPage />
			</BrowserRouter>
		);
		expect(queryByText('Lorem ipsum', { exact: false })).toBeNull();
		fireEvent.click(getAllByText('DONT_RESET_ON_CLOSE')[0]);
		await waitFor(() => {
			expect(queryByText('Lorem ipsum', { exact: false })).not.toBeNull();
		});
	});
});
