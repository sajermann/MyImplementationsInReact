/**
 * @vitest-environment jsdom
 */
import { fireEvent, render, waitFor } from '@testing-library/react';
import { it, describe } from 'vitest';
import { InjectorProviders } from '~/Components/InjectorProviders';

import { CarouselPage } from '.';

describe('Pages/CarouselPage', () => {
	it(`must render checkbox`, async () => {
		const { getAllByRole } = render(
			<InjectorProviders noLayout>
				<CarouselPage />
			</InjectorProviders>
		);
		await waitFor(() => {
			const buttons = getAllByRole('button');
			console.log({ buttons });
			fireEvent.click(buttons[0]);
		});
	});
});
