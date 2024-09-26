/**
 * @vitest-environment jsdom
 */
import { delay } from '@sajermann/utils/Delay';
import { fireEvent, render } from '@testing-library/react';
import { it, describe } from 'vitest';
import { InjectorProviders } from '~/Components/InjectorProviders';
import { CountdownDemo } from '.';

describe('Components/Demos/CountdownDemo', () => {
	it(`must test countdown demo`, async () => {
		const { getByTestId, getByText, queryByText } = render(
			<InjectorProviders>
				<CountdownDemo />
			</InjectorProviders>,
		);

		expect(getByText('10000')).toBeTruthy();
		await delay(1);
		const buttonPause = getByTestId('button-pause');
		fireEvent.click(buttonPause);
		expect(queryByText('10000')).not.toBeTruthy();

		const buttonRestart = getByTestId('button-restart');
		fireEvent.click(buttonRestart);
		await delay(1);
		expect(queryByText('10')).toBeTruthy();
	});
});
