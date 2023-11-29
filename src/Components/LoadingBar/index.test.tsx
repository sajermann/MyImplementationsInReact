/**
 * @vitest-environment jsdom
 */
import { delay } from '@sajermann/utils/Delay';
import { render } from '@testing-library/react';
import { it, describe } from 'vitest';
import { LoadingBar } from '.';

describe('Components/LoadingBar', () => {
	it(`should render component`, async () => {
		render(<LoadingBar data-testid="Test" />);
		await delay(500);
	});
});
