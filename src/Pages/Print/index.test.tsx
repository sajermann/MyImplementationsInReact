/**
 * @vitest-environment jsdom
 */
import { fireEvent, render } from '@testing-library/react';
import { it, describe } from 'vitest';
import { InjectorProviders } from '~/Components/InjectorProviders';
import { PrintPage } from '.';

describe('Pages/PrintPage', () => {
	it(`must change Select components`, async () => {
		const { getAllByText } = render(
			<InjectorProviders>
				<PrintPage />
			</InjectorProviders>
		);
		const printButton = await getAllByText('Print')[0];
		expect(printButton).toBeInTheDocument();
		fireEvent.click(printButton);
	});
});
