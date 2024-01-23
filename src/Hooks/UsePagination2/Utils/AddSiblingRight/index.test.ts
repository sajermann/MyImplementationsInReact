/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { addSiblingRight } from '.';
import { TPaginationBase } from '../../Model';

type TProps = {
	siblingPagesRange: number;
	boundaryPagesRange: number;
	currentPage: number;
	totalPages: number;
	expect: number[];
	only?: true;
	skip?: true;
};

const TESTS: TProps[] = [
	{
		siblingPagesRange: 1,
		boundaryPagesRange: 1,
		currentPage: 50,
		totalPages: 1000,
		expect: [51],
	},
	{
		siblingPagesRange: 2,
		boundaryPagesRange: 2,
		currentPage: 50,
		totalPages: 1000,
		expect: [51, 52],
	},
	{
		siblingPagesRange: 5,
		boundaryPagesRange: 5,
		currentPage: 50,
		totalPages: 1000,
		expect: [51, 52, 53, 54, 55],
	},
	{
		siblingPagesRange: 2,
		boundaryPagesRange: 2,
		currentPage: 998,
		totalPages: 1000,
		expect: [],
	},
	{
		siblingPagesRange: 2,
		boundaryPagesRange: 2,
		currentPage: 1000,
		totalPages: 1000,
		expect: [],
	},
	{
		siblingPagesRange: 2,
		boundaryPagesRange: 2,
		currentPage: 999,
		totalPages: 1000,
		expect: [],
	},
	{
		siblingPagesRange: 2,
		boundaryPagesRange: 2,
		currentPage: 1,
		totalPages: 1000,
		expect: [2, 3],
	},
	{
		siblingPagesRange: 2,
		boundaryPagesRange: 2,
		currentPage: 997,
		totalPages: 1000,
		expect: [],
	},
];

describe('Hooks/UsePagination/Utils/addSiblingRight', () => {
	const only = TESTS.find(item => item.only);
	if (only) {
		it(`Params: ${JSON.stringify(only)}, Expect: ${only.expect}`, async () => {
			const result = addSiblingRight({
				...(only as TPaginationBase),
			});

			expect(result).toEqual(only.expect);
		});

		return;
	}
	for (const test of TESTS) {
		if (test.skip) return;
		it(`Params: ${JSON.stringify(test)}, Expect: ${test.expect}`, async () => {
			const result = addSiblingRight({
				...(test as TPaginationBase),
			});

			expect(result).toEqual(test.expect);
		});
	}
});
