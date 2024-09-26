/**
 * @vitest-environment jsdom
 */
import { fireEvent, render } from '@testing-library/react';
import { it, describe } from 'vitest';
import { InjectorProviders } from '~/Components/InjectorProviders';
import { ButtonDemo } from '.';

describe('Components/Demos/ButtonDemo', () => {
	it(`must open Modal`, async () => {
		const { getByText } = render(
			<InjectorProviders>
				<ButtonDemo />
			</InjectorProviders>,
		);
		const openButton = getByText('default | primary');
		fireEvent.click(openButton);
		fireEvent.click(openButton);
		fireEvent.click(openButton);
	});
});
