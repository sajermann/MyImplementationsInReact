/**
 * @vitest-environment jsdom
 */
import { fireEvent, render, waitFor } from '@testing-library/react';
import { it, describe } from 'vitest';

import { CheckboxPage } from '.';

describe('Pages/CheckboxPage', () => {
	it(`must render checkbox`, async () => {
		const { getAllByText } = render(<CheckboxPage />);
		await waitFor(() => {
			const button = getAllByText('Checkbox')[0];
			fireEvent.click(button);
		});
	});
});
