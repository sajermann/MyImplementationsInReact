/**
 * @vitest-environment jsdom
 */
import { fireEvent, render, waitFor } from '@testing-library/react';
import { it, describe, expect, vi } from 'vitest';

import { InjectorProviders } from '.';

describe('Pages/DrawerPage', () => {
	it(`must render data`, async () => {
		const { getByText } = render(
			<InjectorProviders>Sajermann</InjectorProviders>
		);
		await waitFor(() => {
			const button = getByText('Sajermann');
		});
	});
});
