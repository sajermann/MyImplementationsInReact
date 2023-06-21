/**
 * @vitest-environment jsdom
 */
import { fireEvent, render } from '@testing-library/react';
import { it, describe, expect, vi } from 'vitest';

import { Chip } from '.';

describe('Components/Chip', () => {
	it(`should render data-state indeterminate`, async () => {
		const mock = vi.fn();
		const { getByText, getAllByRole } = render(
			<Chip value="Test" onRemove={mock} />
		);

		// expect(await getByText('Test')).toBeInTheDocument();
		// fireEvent.click(getAllByRole('button')[0]);
		// expect(mock).toBeCalledWith('Test');
	});
});
