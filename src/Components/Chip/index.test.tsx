/**
 * @vitest-environment jsdom
 */
import { fireEvent, render } from '@testing-library/react';
import { it, describe, expect, vi } from 'vitest';

import { Chip } from '.';

describe('Components/Chip', () => {
	it(`should render data-state indeterminate`, async () => {
		const mock = vi.fn();
		const { getByText, getByRole } = render(
			<Chip id="1" value="Test" onRemove={mock} />
		);

		expect(await getByText('Test')).toBeInTheDocument();
		fireEvent.click(getByRole('button'));
		expect(mock).toBeCalledWith('1');
	});
});
