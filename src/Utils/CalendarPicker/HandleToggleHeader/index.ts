import { isAfter, isBefore, isSameDay, isSameMonth } from 'date-fns';
import { TDisabled, TSelectOptions } from '~/Types/TCalendarPick';
import { dateIsInArray } from '../DateIsInArray';

type PropsHandleToggleHeader = {
	dayOfWeek: number;
	weeks: Array<Date[]>;
	startDate: Date;
	disabled?: TDisabled;
	selectOptions: TSelectOptions;
};
export function handleToggleHeader({
	dayOfWeek,
	weeks,
	startDate,
	disabled,
	selectOptions,
}: PropsHandleToggleHeader) {
	const { multi } = selectOptions;
	if (!multi) return;
	const daysToAddOrRemove: Date[] = [];

	for (const item of weeks) {
		// Verify if is same month and if date is not disabled
		if (
			isSameMonth(item[dayOfWeek], startDate) &&
			!dateIsInArray(item[dayOfWeek], disabled?.dates) &&
			!isBefore(item[dayOfWeek], disabled?.datesBefore as Date) &&
			!isAfter(item[dayOfWeek], disabled?.datesAfter as Date)
		) {
			daysToAddOrRemove.push(item[dayOfWeek]);
		}
	}

	multi.onSelectedDates(prev => {
		const updatedDates = [...prev];

		// Verify if all dates of week is selecteds
		const allSelected = daysToAddOrRemove.every(day =>
			updatedDates.some(date => isSameDay(date, day))
		);

		if (allSelected) {
			// Is all dates of week is selecteds then remove all
			return updatedDates.filter(item => {
				if (
					item.getDay() === dayOfWeek &&
					item.getMonth() === startDate.getMonth() &&
					item.getFullYear() === startDate.getFullYear()
				) {
					return false;
				}
				return item;
			});
		}
		// Else, add dates not is selecteds
		daysToAddOrRemove.forEach(day => {
			if (!updatedDates.some(date => isSameDay(date, day))) {
				updatedDates.push(day);
			}
		});

		return updatedDates;
	});
}
