/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { addBoundaryRight } from '.';
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
		expect: [999],
	},
	{
		siblingPagesRange: 2,
		boundaryPagesRange: 2,
		currentPage: 50,
		totalPages: 1000,
		expect: [998, 999],
	},
	{
		siblingPagesRange: 5,
		boundaryPagesRange: 5,
		currentPage: 50,
		totalPages: 1000,
		expect: [995, 996, 997, 998, 999],
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
		expect: [998, 999],
	},
	{
		siblingPagesRange: 2,
		boundaryPagesRange: 2,
		currentPage: 998,
		totalPages: 1000,
		expect: [999],
	},
];

describe('Hooks/UsePagination/Utils/addBoundaryRight', () => {
	const only = TESTS.find(item => item.only);
	if (only) {
		it(`Params: ${JSON.stringify(only)}, Expect: ${only.expect}`, async () => {
			const result = addBoundaryRight({
				...(only as TPaginationBase),
			});

			expect(result).toEqual(only.expect);
		});

		return;
	}
	for (const test of TESTS) {
		if (test.skip) return;
		it(`Params: ${JSON.stringify(test)}, Expect: ${test.expect}`, async () => {
			const result = addBoundaryRight({
				...(test as TPaginationBase),
			});

			expect(result).toEqual(test.expect);
		});
	}
});
