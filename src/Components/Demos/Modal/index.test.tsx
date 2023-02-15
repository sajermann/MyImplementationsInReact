/**
 * @vitest-environment jsdom
 */
import { fireEvent, render } from '@testing-library/react';
import { it, describe } from 'vitest';
import { InjectorProviders } from '~/Components/InjectorProviders';
import { ModalDemo } from '.';

describe('Components/Demos/Modal', () => {
	it(`must open Modal`, async () => {
		const { getByText } = render(
			<InjectorProviders>
				<ModalDemo />
			</InjectorProviders>
		);
		const openButton = await getByText('Open');
		fireEvent.click(openButton);
		await getByText(/Lorem ipsum dolor sit amet/i);
	});
});
