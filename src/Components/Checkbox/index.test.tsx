/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import { Checkbox } from './index';

describe('Components/Checkbox', () => {
	it(`should render data-state indeterminate`, async () => {
		const { container } = render(
			<Checkbox checked="indeterminate" data-testid="checkbox" />
		);
		const result = container.querySelector('[data-state="indeterminate"]');
		expect(result).not.toBeNull();
	});
	it(`should render data-state unchecked`, async () => {
		const { container } = render(
			<Checkbox checked={false} data-testid="checkbox" />
		);
		const result = container.querySelector('[data-state="unchecked"]');
		expect(result).not.toBeNull();
	});
	it(`should render data-state checked`, async () => {
		const { container } = render(<Checkbox checked data-testid="checkbox" />);
		const result = container.querySelector('[data-state="checked"]');
		expect(result).not.toBeNull();
	});
});
