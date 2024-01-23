/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { addSiblingLeft } from '.';
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
		expect: [49],
	},
	{
		siblingPagesRange: 2,
		boundaryPagesRange: 2,
		currentPage: 50,
		totalPages: 1000,
		expect: [48, 49],
	},
	{
		siblingPagesRange: 5,
		boundaryPagesRange: 5,
		currentPage: 50,
		totalPages: 1000,
		expect: [45, 46, 47, 48, 49],
	},
	{
		siblingPagesRange: 2,
		boundaryPagesRange: 2,
		currentPage: 998,
		totalPages: 1000,
		expect: [996, 997],
	},
	{
		siblingPagesRange: 2,
		boundaryPagesRange: 2,
		currentPage: 1000,
		totalPages: 1000,
		expect: [998, 999],
	},
	{
		siblingPagesRange: 2,
		boundaryPagesRange: 2,
		currentPage: 999,
		totalPages: 1000,
		expect: [997, 998],
	},
	{
		siblingPagesRange: 2,
		boundaryPagesRange: 2,
		currentPage: 1,
		totalPages: 1000,
		expect: [],
	},
];

describe('Hooks/UsePagination/Utils/addSiblingLeft', () => {
	const only = TESTS.find(item => item.only);
	if (only) {
		it(`Params: ${JSON.stringify(only)}, Expect: ${only.expect}`, async () => {
			const result = addSiblingLeft({
				...(only as TPaginationBase),
			});

			expect(result).toEqual(only.expect);
		});

		return;
	}
	for (const test of TESTS) {
		if (test.skip) return;
		it(`Params: ${JSON.stringify(test)}, Expect: ${test.expect}`, async () => {
			const result = addSiblingLeft({
				...(test as TPaginationBase),
			});

			expect(result).toEqual(test.expect);
		});
	}
});
