/**
 * @vitest-environment jsdom
 */
import { fireEvent, render } from '@testing-library/react';
import { it, describe, vi } from 'vitest';
import { InjectorProviders } from '~/Components/InjectorProviders';
import { exportTo } from '~/Utils/Export';

import { ExportPage } from '.';

const itemsToTest: Array<'print' | 'pdf' | 'png' | 'excel' | 'csv' | 'xml'> = [
	'print',
	'pdf',
	'png',
	'excel',
	'csv',
	'xml',
];

describe('Pages/Table/Export', () => {
	for (const item of itemsToTest) {
		it(`should test ${item} button`, async () => {
			const spy = vi.fn();
			vi.spyOn(exportTo, item).mockImplementation(spy);
			const { getByTestId } = render(
				<InjectorProviders>
					<ExportPage />
				</InjectorProviders>
			);
			const buttonXml = getByTestId(`button-export-${item}`);
			fireEvent.click(buttonXml);
			expect(spy).toBeCalled();
		});
	}
});
