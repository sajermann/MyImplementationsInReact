/**
 * @vitest-environment jsdom
 */
import { fireEvent, render } from '@testing-library/react';
import { it, describe } from 'vitest';
import { InjectorProviders } from '~/Components/InjectorProviders';
import { ToastDemo } from '.';

describe('Components/Demos/ToastDemo', () => {
	it(`must open Modal`, async () => {
		const { getByText } = render(
			<InjectorProviders>
				<ToastDemo />
			</InjectorProviders>
		);
		const button = await getByText('Success');
		fireEvent.click(button);
	});
});
