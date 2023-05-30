/**
 * @vitest-environment jsdom
 */
import { fireEvent, render, waitFor } from '@testing-library/react';
import { it, describe } from 'vitest';
import { InjectorProviders } from '~/Components/InjectorProviders';

import { ButtonPage } from '.';

describe('Pages/ButtonPage', () => {
	it(`must render button`, async () => {
		const { getAllByText } = render(
			<InjectorProviders>
				<ButtonPage />
			</InjectorProviders>
		);
		await waitFor(() => {
			const button = getAllByText('Default')[0];
			fireEvent.click(button);
		});
	});
});
