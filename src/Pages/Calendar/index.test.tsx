/**
 * @vitest-environment jsdom
 */
import { fireEvent, render, waitFor } from '@testing-library/react';
import { it, describe } from 'vitest';

import { CalendarPage } from '.';

describe('Pages/CalendarPage', () => {
	it(`must render checkbox`, async () => {
		const { getAllByText } = render(<CalendarPage />);
		await waitFor(() => {
			const button = getAllByText('Checkbox')[0];
			fireEvent.click(button);
		});
	});
});
