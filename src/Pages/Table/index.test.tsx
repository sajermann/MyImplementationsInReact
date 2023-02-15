/**
 * @vitest-environment jsdom
 */
import { fireEvent, render } from '@testing-library/react';
import { it, describe } from 'vitest';
import { InjectorProviders } from '~/Components/InjectorProviders';
import { TablePage } from '.';

describe('Pages/TablePage', () => {
	it(`must filter option`, async () => {
		const { getByPlaceholderText, queryByText } = render(
			<InjectorProviders>
				<TablePage />
			</InjectorProviders>
		);
		const optionEllipsis = await queryByText('Ellipsis');
		expect(optionEllipsis).toBeInTheDocument();
		const searchInput = await getByPlaceholderText('Search Options');
		expect(searchInput).toBeInTheDocument();
		fireEvent.change(searchInput, { target: { value: 'Filter' } });

		expect(optionEllipsis).not.toBeInTheDocument();
	});
});
