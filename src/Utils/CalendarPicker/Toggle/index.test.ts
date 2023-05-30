/**
 * @vitest-environment jsdom
 */
import { it, describe, expect, vi } from 'vitest';
import { toggleMultiSelection } from '.';

describe('Utils/CalendarPicker/Toggle', () => {
	it(`should remove date from array`, async () => {
		const mockOnSelectedDates = vi.fn();
		const dataOfState = [new Date()];
		toggleMultiSelection({
			date: new Date(),
			selectOptions: {
				multi: {
					selectedDates: dataOfState,
					onSelectedDates: (prev: any) => {
						const resultFunctionAction = prev(dataOfState);
						mockOnSelectedDates(resultFunctionAction);
					},
				},
			},
		});
		expect(mockOnSelectedDates).toBeCalledWith([]);
	});

	it(`should add date from array`, async () => {
		const mockOnSelectedDates = vi.fn();
		const dataOfState = new Date();
		toggleMultiSelection({
			date: dataOfState,
			selectOptions: {
				multi: {
					selectedDates: [],
					onSelectedDates: (prev: any) => {
						const resultFunctionAction = prev([]);
						mockOnSelectedDates(resultFunctionAction);
					},
				},
			},
		});
		expect(mockOnSelectedDates).toBeCalledWith([dataOfState]);
	});
});
