/**
 * @vitest-environment jsdom
 */
import { fireEvent, render, waitFor } from '@testing-library/react';
import { it, describe, vi } from 'vitest';
import { InjectorProviders } from '~/Components/InjectorProviders';
import { PaginationPage } from '.';

describe('Components/Pagination', () => {
	it(`must change Select components`, async () => {
		const { getByText, getAllByText, getByTestId } = render(
			<InjectorProviders>
				<PaginationPage />
			</InjectorProviders>
		);
		const result = getAllByText('5')[0];
		fireEvent.click(result);

		await waitFor(() => {
			expect(getByText('6'));
		});
	});
});
