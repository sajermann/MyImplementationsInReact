/**
 * @vitest-environment jsdom
 */

import { it, describe, expect, vi } from 'vitest';
import { handleToggleHeader } from '.';
import { calendar } from '..';

describe('Utils/CalendarPicker/HandleToggleHeader', () => {
	it(`should convert object to query correctly - 1 prop`, async () => {
		const onSelectedDatesMock = vi.fn();
		const { startDate, weeks } = calendar.generateConfig({
			year: 2023,
			month: 5,
		});
		handleToggleHeader({
			dayOfWeek: 0,
			selectOptions: {
				multi: {
					selectedDates: [new Date()],
					onSelectedDates: e => onSelectedDatesMock(e),
				},
			},
			startDate,
			weeks,
		});

		expect(onSelectedDatesMock).toBeCalledWith([]);
	});
});
