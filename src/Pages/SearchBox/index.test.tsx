/**
 * @vitest-environment jsdom
 */
import { fireEvent, render, waitFor } from '@testing-library/react';
import { useState } from 'react';
import { it, describe } from 'vitest';
import { Button } from '~/Components/Button';
import { Modal } from '~/Components/Modal';

import { SearchBoxPage } from '.';

describe('Pages/SearchBoxPage', () => {
	it(`must render checkbox`, async () => {
		const { getAllByText } = render(<SearchBoxPage />);
	});
});
