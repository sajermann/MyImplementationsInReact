/**
 * @vitest-environment jsdom
 */
import { fireEvent, render } from '@testing-library/react';
import { it, describe } from 'vitest';
import { InjectorProviders } from '~/Components/InjectorProviders';

import { JsonViewerPage } from '.';

describe('Pages/JsonViewer', () => {
	it(`must render component`, async () => {
		const { getByText } = render(
			<InjectorProviders noLayout>
				<JsonViewerPage />
			</InjectorProviders>,
		);
		fireEvent.click(getByText('Submit')); // Line Coverage
		expect(getByText('Form')).toBeTruthy();
	});
});
