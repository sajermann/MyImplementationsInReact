/**
 * @vitest-environment jsdom
 */
import { fireEvent, render, waitFor } from '@testing-library/react';
import { it, describe } from 'vitest';
import { InjectorProviders } from '~/Components/InjectorProviders';

import { CarouselPage } from '.';

describe('Pages/CarouselPage', () => {
	it(`must render checkbox`, async () => {
		const { getAllByText } = render(
			<InjectorProviders>
				<CarouselPage />
			</InjectorProviders>
		);
		await waitFor(() => {
			const button = getAllByText('Checkbox')[0];
			fireEvent.click(button);
		});
	});
});
