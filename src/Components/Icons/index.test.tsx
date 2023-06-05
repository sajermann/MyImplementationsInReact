/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import { Icons, keysIcons } from '.';

describe('Components/Icons', () => {
	keysIcons.map(nameIcon =>
		it(`should render ${nameIcon}`, async () => {
			const { getByTestId } = render(
				<Icons nameIcon={nameIcon} data-testid={nameIcon} />
			);
			expect(getByTestId(nameIcon)).toBeInTheDocument();
		})
	);

	it(`should not render`, async () => {
		const { queryByTestId } = render(<Icons data-testid="Icons" />);
		expect(queryByTestId('Icon')).toBeNull();
	});
});
