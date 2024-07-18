/**
 * @vitest-environment jsdom
 */
import { fireEvent, render, waitFor } from '@testing-library/react';
import { it, describe } from 'vitest';
import { InjectorProviders } from '~/Components/InjectorProviders';

import { CheckboxPage } from '.';

describe('Pages/CheckboxPage', () => {
	it(`must render checkbox`, async () => {
		const { getAllByLabelText } = render(
			<InjectorProviders>
				<CheckboxPage />
			</InjectorProviders>
		);
		await waitFor(() => {
			const button = getAllByLabelText('Checkbox')[0];
			fireEvent.click(button);
		});
	});
});
