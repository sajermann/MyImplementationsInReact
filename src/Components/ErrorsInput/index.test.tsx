/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import { ErrorsInput } from '.';

describe('Components/ErrorsInput', () => {
	it(`should render errors`, async () => {
		const { getByText } = render(<ErrorsInput errors={['Test']} />);
		expect(getByText('Test')).toBeInTheDocument();
	});

	it(`should not render errors`, async () => {
		const { queryByText } = render(<ErrorsInput />);
		const result = await queryByText('Test');
		expect(result).toBeNull();
	});
});
