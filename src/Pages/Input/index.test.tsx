/**
 * @vitest-environment jsdom
 */
import { fireEvent, render, waitFor } from '@testing-library/react';
import { it, describe } from 'vitest';
import { InjectorProviders } from '~/Components/InjectorProviders';

import { InputPage } from '.';

describe('Pages/CheckboxPage', () => {
	it(`must render InputPage`, async () => {
		const { getAllByLabelText } = render(
			<InjectorProviders>
				<InputPage />
			</InjectorProviders>
		);
		await waitFor(() => {
			const input = getAllByLabelText('Label Props')[0];
			fireEvent.change(input, { target: { value: 'Test' } });
		});
	});
});
