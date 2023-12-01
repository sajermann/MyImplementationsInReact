/**
 * @vitest-environment jsdom
 */

import { Row } from '@tanstack/react-table';
import { it, describe, expect, vi } from 'vitest';
import { TPerson } from '~/Types/TPerson';
import { filterRangeDate } from '.';

const row = {
	getValue: _ => '24/11/2023',
} as Row<TPerson>;

describe('Utils/Table/filterRangeDate', () => {
	it(`should simulate empty dates`, async () => {
		const t = filterRangeDate<TPerson>({
			row,
			valueFilter: {
				from: '',
				to: '',
			},
			columnId: '',
		});
		expect(t).toBeTruthy();
	});

	it(`should simulate dates complete`, async () => {
		const t = filterRangeDate<TPerson>({
			row,
			valueFilter: {
				from: '2023-10-24T21:40:11.970Z',
				to: '2023-12-24T21:40:11.970Z',
			},
			columnId: '',
		});
		expect(t).toBeTruthy();
	});

	it(`should simulate date to greatter than date row`, async () => {
		const t = filterRangeDate<TPerson>({
			row,
			valueFilter: {
				from: '',
				to: '2023-12-24T21:40:11.970Z',
			},
			columnId: '',
		});
		expect(t).toBeTruthy();
	});

	it(`should simulate date from lower than date row`, async () => {
		const t = filterRangeDate<TPerson>({
			row,
			valueFilter: {
				from: '2023-10-24T21:40:11.970Z',
				to: '',
			},
			columnId: '',
		});
		expect(t).toBeTruthy();
	});

	it(`should simulate false`, async () => {
		const t = filterRangeDate<TPerson>({
			row,
			valueFilter: {
				from: '2024-10-24T21:40:11.970Z',
				to: '2024-10-24T21:40:11.970Z',
			},
			columnId: '',
		});
		expect(t).toBeFalsy();
	});
});
