/**
 * @vitest-environment jsdom
 */
import { fireEvent, render, waitFor } from '@testing-library/react';
import { it, describe } from 'vitest';

import { ButtonPage } from '.';

describe('Pages/ButtonPage', () => {
	it(`must render button`, async () => {
		const { getAllByText } = render(<ButtonPage />);
		await waitFor(() => {
			const button = getAllByText('Default')[0];
			fireEvent.click(button);
		});
	});
});
