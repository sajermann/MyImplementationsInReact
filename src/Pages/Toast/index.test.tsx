/**
 * @vitest-environment jsdom
 */
import { fireEvent, render } from '@testing-library/react';
import { it, describe } from 'vitest';
import { InjectorProviders } from '~/Components/InjectorProviders';

import { ToastPage } from '.';

describe('Pages/ToastPage', () => {
	it(`must render toast react-hot-toast`, async () => {
		const { getAllByText, getByText } = render(
			<InjectorProviders>
				<ToastPage />
			</InjectorProviders>,
		);

		const success = getAllByText('Success')[0];
		fireEvent.click(success);
		expect(getByText('Toast Success')).toBeTruthy();

		const error = getAllByText('Error')[0];
		fireEvent.click(error);
		expect(getByText('Toast Error')).toBeTruthy();

		const warning = getAllByText('Warning')[0];
		fireEvent.click(warning);
		expect(getByText('Toast Warning')).toBeTruthy();

		const info = getAllByText('Info')[0];
		fireEvent.click(info);
		expect(getByText('Toast Info')).toBeTruthy();

		const defaultButton = getAllByText('Default')[0];
		fireEvent.click(defaultButton);
		expect(getByText('Toast Default')).toBeTruthy();
	});

	it(`must render toast react-toastify`, async () => {
		const { getAllByText, getByText } = render(
			<InjectorProviders>
				<ToastPage />
			</InjectorProviders>,
		);

		const success = getAllByText('Success')[1];
		fireEvent.click(success);
		expect(getByText('Toast Success')).toBeTruthy();

		const error = getAllByText('Error')[1];
		fireEvent.click(error);
		expect(getByText('Toast Error')).toBeTruthy();

		const warning = getAllByText('Warning')[1];
		fireEvent.click(warning);
		expect(getByText('Toast Warning')).toBeTruthy();

		const info = getAllByText('Info')[1];
		fireEvent.click(info);
		expect(getByText('Toast Info')).toBeTruthy();

		const defaultButton = getAllByText('Default')[1];
		fireEvent.click(defaultButton);
		expect(getByText('Toast Default')).toBeTruthy();
	});
});
