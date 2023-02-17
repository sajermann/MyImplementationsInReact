/**
 * @vitest-environment jsdom
 */
import { fireEvent, render } from '@testing-library/react';
import { it, describe } from 'vitest';
import { InjectorProviders } from '~/Components/InjectorProviders';
import { PdfPage } from '.';

describe('Pages/PdfPage', () => {
	it(`must change Select components`, async () => {
		const { getAllByText } = render(
			<InjectorProviders>
				<PdfPage />
			</InjectorProviders>
		);
		const exportButton = await getAllByText('Exportar')[0];
		expect(exportButton).toBeInTheDocument();
		fireEvent.click(exportButton);
	});
});
