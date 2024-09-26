/**
 * @vitest-environment jsdom
 */
import { delay } from '@sajermann/utils/Delay';
import { fireEvent, render } from '@testing-library/react';

import { it, describe } from 'vitest';
import { InjectorProviders } from '~/Components/InjectorProviders';
import { CountdownPage } from '.';

describe('Pages/CountdownPage', () => {
	it(`should add timer and toggle play/pause`, async () => {
		const { getByText, getByTestId, queryByText } = render(
			<InjectorProviders noLayout>
				<CountdownPage />
			</InjectorProviders>,
		);
		const input = getByTestId('input-milliseconds');
		const addButton = getByText('Add');
		fireEvent.change(input, { target: { value: 10000 } });
		fireEvent.click(addButton);
		fireEvent.change(input, { target: { value: 0 } });
		expect(getByText('10000')).toBeTruthy();
		await delay(1);
		const buttonPause = getByTestId('button-pause');
		fireEvent.click(buttonPause);
		expect(queryByText('10000')).not.toBeTruthy();
	});

	it(`should add timer and restart timer`, async () => {
		const { getByText, getByTestId, queryByText } = render(
			<InjectorProviders noLayout>
				<CountdownPage />
			</InjectorProviders>,
		);
		const input = getByTestId('input-milliseconds');
		const addButton = getByText('Add');
		fireEvent.change(input, { target: { value: 1 } });
		fireEvent.click(addButton);
		fireEvent.change(input, { target: { value: 0 } });
		expect(getByText('1')).toBeTruthy();
		await delay(100);
		const buttonRestart = getByTestId('button-restart');
		fireEvent.click(buttonRestart);
		expect(queryByText('1')).toBeTruthy();
	});

	it(`should add timer and delete timer`, async () => {
		const { getByText, getByTestId, queryByText } = render(
			<InjectorProviders noLayout>
				<CountdownPage />
			</InjectorProviders>,
		);
		const input = getByTestId('input-milliseconds');
		const addButton = getByText('Add');
		fireEvent.change(input, { target: { value: 9999 } });
		fireEvent.click(addButton);
		fireEvent.change(input, { target: { value: 0 } });
		expect(getByText('9999')).toBeTruthy();
		await delay(100);
		const buttonRemove = getByTestId('button-remove');
		fireEvent.click(buttonRemove);
		expect(queryByText('9999')).not.toBeTruthy();
	});
});
