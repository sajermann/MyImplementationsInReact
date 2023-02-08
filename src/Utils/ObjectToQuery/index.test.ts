/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { objectToQuery } from '.';

describe('Utils/ObjectToQuery', () => {
	it(`should convert object to query correctly - 1 prop`, async () => {
		const mock = {
			id: 1,
		};
		const result = objectToQuery(
			mock as unknown as { [index: string]: string }
		);
		expect(result).toEqual('id=1');
	});

	it(`should convert object to query correctly - 2 prop`, async () => {
		const mock = {
			id: 1,
			name: 'Test',
		};
		const result = objectToQuery(
			mock as unknown as { [index: string]: string }
		);
		expect(result).toEqual('id=1&name=Test');
	});

	it(`should convert object to query correctly - 1 prop filled and 1 prop empty`, async () => {
		const mock = {
			id: '',
			name: 'Test',
		};
		const result = objectToQuery(mock);
		expect(result).toEqual('name=Test');
	});
});
