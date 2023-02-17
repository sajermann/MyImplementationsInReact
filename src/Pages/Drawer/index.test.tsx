/**
 * @vitest-environment jsdom
 */
import { fireEvent, render, waitFor } from '@testing-library/react';
import { it, describe } from 'vitest';

import { DrawerPage } from '.';

describe('Pages/DrawerPage', () => {
	it(`must render data`, async () => {
		const { getByText } = render(<DrawerPage />);
		await waitFor(() => {
			const button = getByText('OPEN_FROM_RIGHT');
			fireEvent.click(button);
		});
	});
});
