/**
 * @vitest-environment jsdom
 */
import { fireEvent, render } from '@testing-library/react';
import { it, describe, vi } from 'vitest';
import { InjectorProviders } from '~/Components/InjectorProviders';

import { Calendar } from '.';

describe('Pages/Calendar', () => {
	it(`must select date single `, async () => {
		const date = new Date(2024, 3, 1);
		const spy = vi.fn();
		const { getByText } = render(
			<InjectorProviders>
				<Calendar
					month={date.getMonth() + 1}
					onNextClick={vi.fn()}
					onPrevClick={vi.fn()}
					year={date.getFullYear()}
					selectOptions={{
						single: {
							selectedDate: null,
							onSelectedDate: spy,
						},
					}}
				/>
			</InjectorProviders>
		);
		const result = getByText('13');
		fireEvent.mouseEnter(result);
		fireEvent.click(result);
		expect(spy).toBeCalledWith(
			new Date(date.getFullYear(), date.getMonth(), 13)
		);
	});

	it(`must select date multi `, async () => {
		const date = new Date(2024, 3, 1);
		const spy = vi.fn();
		const { getByText } = render(
			<InjectorProviders>
				<Calendar
					month={date.getMonth() + 1}
					onNextClick={vi.fn()}
					onPrevClick={vi.fn()}
					year={date.getFullYear()}
					selectOptions={{
						multi: {
							selectedDates: [],
							enableRangeSelection: true,
							onSelectedDates: spy,
						},
					}}
				/>
			</InjectorProviders>
		);
		const result = getByText('13');
		fireEvent.mouseEnter(result);
		fireEvent.click(result);
		expect(spy).toBeCalledWith([
			new Date(date.getFullYear(), date.getMonth(), 13),
		]);
	});
});
