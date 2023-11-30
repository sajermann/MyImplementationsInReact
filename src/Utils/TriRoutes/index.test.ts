/**
 * @vitest-environment jsdom
 */
import { it, describe, expect, vi } from 'vitest';
import { triRoutes } from '.';

describe('Utils/TriRoutes', () => {
	it(`should remove dark mode`, async () => {
		triRoutes.get([
			{
				name: '',
			},
		]);
		expect(spy).toBeCalledWith('dark');
	});
});
