/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { isEmpty } from '.';

describe('Utils/IsEmpty', () => {
	it(`should return true`, async () => {
		const result = isEmpty({});
		expect(result).toBeTruthy();
	});

	it(`should return false`, async () => {
		const result = isEmpty({ id: 1 });
		expect(result).toBeFalsy();
	});
});
