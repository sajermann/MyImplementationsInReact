/**
 * @vitest-environment jsdom
 */
import { fireEvent, render, waitFor } from '@testing-library/react';
import { useState } from 'react';
import { it, describe } from 'vitest';
import { Button } from '~/Components/Button';
import { Modal } from '~/Components/Modal';

import { ModalPage } from '.';

describe('Pages/ModalPage', () => {
	it(`must render checkbox`, async () => {
		const { getAllByText } = render(<ModalPage />);
		await waitFor(() => {
			const button = getAllByText('WITH_CLOSE_BUTTON')[0];
			fireEvent.click(button);
		});
	});
});
