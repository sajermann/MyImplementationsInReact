/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import { it, describe } from 'vitest';

import { JsonViewer } from '.';

describe('Components/JsonViewer', () => {
	it(`must render component`, async () => {
		const { getByText } = render(<JsonViewer value={{ name: 'Jhon' }} />);

		expect(getByText('Jhon')).toBeTruthy();
	});
});
