/**
 * @vitest-environment jsdom
 */
import { fireEvent, render } from '@testing-library/react';
import { it, describe } from 'vitest';
import { InjectorProviders } from '~/Components/InjectorProviders';
import { PrintDemo } from '.';

describe('Components/Demos/PrintDemo', () => {
	it(`must open Modal`, async () => {
		const { getAllByText } = render(
			<InjectorProviders>
				<PrintDemo />
			</InjectorProviders>
		);
		const button = await getAllByText('Print');
		fireEvent.click(button[0]);
	});
});
