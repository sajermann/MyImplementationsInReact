/**
 * @vitest-environment jsdom
 */
import { fireEvent, render, waitFor } from '@testing-library/react';
import { it, describe } from 'vitest';

import { CalendarPickerPage } from '.';

describe('Pages/CalendarPickerPage', () => {
	it(`must render checkbox`, async () => {
		const { getAllByText } = render(<CalendarPickerPage />);
		await waitFor(() => {
			const button = getAllByText('Checkbox')[0];
			fireEvent.click(button);
		});
	});
});
