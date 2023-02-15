/**
 * @vitest-environment jsdom
 */
import { fireEvent, render, waitFor } from '@testing-library/react';
import { it, describe } from 'vitest';

import { InputPage } from '.';

describe('Pages/CheckboxPage', () => {
	it(`must render InputPage`, async () => {
		const { getAllByLabelText } = render(<InputPage />);
		await waitFor(() => {
			const input = getAllByLabelText('Label')[0];
			fireEvent.change(input, { target: { value: 'Test' } });
		});
	});
});
