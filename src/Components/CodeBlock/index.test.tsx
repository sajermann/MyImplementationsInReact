/**
 * @vitest-environment jsdom
 */
import { fireEvent, render } from '@testing-library/react';
import { it, describe } from 'vitest';

import { CodeBlock } from '.';

describe('Components/CodeBlock', () => {
	it(`should render element`, async () => {
		const { getByRole, getByText } = render(<CodeBlock>Test</CodeBlock>);
		fireEvent.click(getByRole('button'));
		expect(getByText('Test')).toBeInTheDocument();
	});
});
