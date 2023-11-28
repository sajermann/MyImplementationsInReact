/**
 * @vitest-environment jsdom
 */

import { addDays } from 'date-fns';
import { it, describe, expect, vi } from 'vitest';
import { handleHoverRangeSelection } from '.';

const dateMock = new Date();

describe('Utils/CalendarPicker/HandleHoverRangeSelection', () => {
	it(`should select 2 dates`, async () => {
		const spy = vi.fn();
		handleHoverRangeSelection({
			date: dateMock,
			selectionByRange: {
				start: addDays(dateMock, -1),
				end: null,
			},
			setSemiSelecteds: spy,
		});
		expect(spy).toBeCalledWith([
			new Date('2023-11-26T03:00:00.000Z'),
			new Date('2023-11-27T03:00:00.000Z'),
		]);
	});

	it(`should select 3 dates`, async () => {
		const spy = vi.fn();
		handleHoverRangeSelection({
			date: dateMock,
			selectionByRange: {
				start: addDays(dateMock, 2),
				end: null,
			},
			setSemiSelecteds: spy,
		});
		expect(spy).toBeCalledWith([
			new Date('2023-11-27T03:00:00.000Z'),
			new Date('2023-11-28T03:00:00.000Z'),
			new Date('2023-11-29T03:00:00.000Z'),
		]);
	});

	it(`should not called setSemiSelecteds`, async () => {
		const spy = vi.fn();
		handleHoverRangeSelection({
			date: dateMock,
			selectionByRange: {
				start: null,
				end: addDays(dateMock, 2),
			},
			setSemiSelecteds: spy,
		});
		expect(spy).not.toBeCalled();
	});
});
