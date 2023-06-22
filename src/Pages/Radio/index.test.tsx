/**
 * @vitest-environment jsdom
 */
import { fireEvent, render, waitFor } from '@testing-library/react';
import { useState } from 'react';
import { it, describe } from 'vitest';
import { Button } from '~/Components/Button';
import { InjectorProviders } from '~/Components/InjectorProviders';
import { Modal } from '~/Components/Modal';

import { ToastPage } from '.';

describe('Pages/ToastPage', () => {
	it(`must render checkbox`, async () => {
		const { getAllByText } = render(
			<InjectorProviders>
				<ToastPage />
			</InjectorProviders>
		);
	});
});
