/**
 * @vitest-environment jsdom
 */

import { it, describe, expect } from 'vitest';
import { makeData } from '.';

describe('Utils/makeData', () => {
	it(`should test chat`, async () => {
		expect(makeData.chat(1).length).toBe(1);
	});

	it(`should test vehicles`, async () => {
		expect(makeData.vehicles(1).length).toBe(1);
	});

	it(`should test technologies`, async () => {
		expect(makeData.technologies().length).toBe(7);
	});

	it(`should test random`, async () => {
		expect(makeData.random.number(1, 4)).toBeGreaterThan(0);
	});

	it(`should test personWithPagination`, async () => {
		expect(makeData.personWithPagination({ pageSize: 1 })).not.toBeNull();
	});

	it(`should test brawlers`, async () => {
		expect(makeData.brawlers(4)).not.toBeNull();
	});

	it(`should test uuid`, async () => {
		expect(makeData.uuid()).not.toBeNull();
	});

	it(`should test countries`, async () => {
		expect(makeData.countries()).not.toBeNull();
	});
});
