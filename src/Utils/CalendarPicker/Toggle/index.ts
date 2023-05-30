import { isAfter, isBefore, isSameDay, isSameMonth } from 'date-fns';
import { TDisabled, TSelectOptions } from '~/Types/TCalendarPick';
import { dateIsInArray } from '../DateIsInArray';

type PropsHandleToggleSelection = {
	date: Date;
	startDate: Date;
	selectOptions: TSelectOptions;
	disabled?: TDisabled;
};

export function toggleMultiSelection({
	date,
	selectOptions,
}: Pick<PropsHandleToggleSelection, 'date' | 'selectOptions'>) {
	const { multi } = selectOptions;
	const result = multi?.selectedDates.find(
		item => item.toISOString() === date.toISOString()
	);

	if (!result) {
		multi?.onSelectedDates(prev => [...prev, date]);
	} else {
		multi?.onSelectedDates(prev => {
			const result2 = prev.filter(
				item => item.toISOString() !== date.toISOString()
			);
			return result2;
		});
	}
}

export function toggleSingleSelection({
	date,
	selectOptions,
}: Pick<PropsHandleToggleSelection, 'date' | 'selectOptions'>) {
	const { single } = selectOptions;

	if (
		single?.selectedDate === null ||
		!isSameDay(date, single?.selectedDate as Date)
	) {
		single?.onSelectedDate(date);
		return;
	}
	if (isSameDay(date, single?.selectedDate as Date)) {
		single?.onSelectedDate(null);
	}
}

export function handleToggleSelection({
	date,
	startDate,
	selectOptions,
	disabled,
}: PropsHandleToggleSelection) {
	const { single, multi } = selectOptions;
	if (!isSameMonth(date, startDate)) {
		return;
	}
	if (dateIsInArray(date, disabled?.dates)) {
		return;
	}
	if (isBefore(date, disabled?.datesBefore as Date)) {
		return;
	}
	if (isAfter(date, disabled?.datesAfter as Date)) {
		return;
	}
	if (single) {
		toggleSingleSelection({ date, selectOptions });
	}

	if (multi) {
		toggleMultiSelection({ date, selectOptions });
	}
}
