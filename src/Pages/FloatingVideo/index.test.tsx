/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import { it, describe } from 'vitest';
import { InjectorProviders } from '~/Components/InjectorProviders';

import { FloatingVideoPage } from '.';

describe('Pages/FloatingVideo', () => {
	it(`must render component`, async () => {
		const { getByText } = render(
			<InjectorProviders noLayout>
				<FloatingVideoPage />
			</InjectorProviders>,
		);

		expect(getByText('Floating Video')).toBeTruthy();
	});
});
