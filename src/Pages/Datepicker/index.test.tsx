/**
 * @vitest-environment jsdom
 */
import { fireEvent, render, waitFor } from '@testing-library/react';
import { it, describe } from 'vitest';

import { DatepickerPage } from '.';

describe('Pages/DatepickerPage', () => {
	it(`must render DatepickerPage`, async () => {
		const { getAllByText } = render(<DatepickerPage />);
	});
});
