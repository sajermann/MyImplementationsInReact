/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import { it, describe } from 'vitest';
import { InjectorProviders } from '~/Components/InjectorProviders';

import { SimpleMdTextEditorPage } from '.';

describe('Pages/SimpleMdTextEditorPage', () => {
	it(`must render SimpleMdTextEditorPage`, async () => {
		const { getByText } = render(
			<InjectorProviders>
				<SimpleMdTextEditorPage />
			</InjectorProviders>,
		);
		const result = getByText('Normal');
		expect(result).toBeTruthy();
	});
});
