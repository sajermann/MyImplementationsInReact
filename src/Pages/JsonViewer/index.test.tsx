/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
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

		expect(getByText('JSON V')).toBeTruthy();
	});
});
