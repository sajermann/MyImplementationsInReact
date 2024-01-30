/**
 * @vitest-environment jsdom
 */
import { it, describe, expect, vi } from 'vitest';
import { log } from '.';

describe('Utils/Log', () => {
	it(`should log error`, async () => {
		const consoleMock = vi.spyOn(console, 'error');
		log.error('Test');
		expect(consoleMock).toBeCalledWith(['Test']);
	});
});
