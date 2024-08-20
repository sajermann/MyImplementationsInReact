/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import { it, describe } from 'vitest';
import { JsonViewerDemo } from '.';

describe('Components/Demos/JsonViewerDemo', () => {
	it(`should render component`, async () => {
		const { queryByText } = render(<JsonViewerDemo />);
		const result = queryByText('Bartholome');
		expect(result).not.toBeNull();
	});
});
