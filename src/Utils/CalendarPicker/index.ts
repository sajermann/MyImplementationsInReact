import {
	eachDayOfInterval,
	isAfter,
	isBefore,
	isSameDay,
	isSameMonth,
	isToday,
} from 'date-fns';
import { Dispatch, SetStateAction } from 'react';
import {
	TDisabled,
	TSelectionByRange,
	TSelectOptions,
} from '~/Types/TCalendarPick';

function dateIsInArray(dateToVerify: Date, datesArray?: Date[]) {
	if (!datesArray || datesArray.length === 0) return false;
	const result = datesArray.find(item => isSameDay(dateToVerify, item));
	return result !== undefined;
}

type PropsHandleToggleSelection = {
	date: Date;
	startDate: Date;
	selectOptions: TSelectOptions;
	disabled?: TDisabled;
};

function toggleMultiSelection({
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

function toggleSingleSelection({
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

function handleToggleSelection({
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

type PropsHandleSelectByRange = {
	targetDateStart: Date | null;
	targetDateEnd: Date | null;
	selectOptions: TSelectOptions;
	onSemiSelectedsChange: Dispatch<SetStateAction<Date[]>>;
};
function handleSelectByRange({
	targetDateStart,
	targetDateEnd,
	selectOptions,
	onSemiSelectedsChange,
}: PropsHandleSelectByRange) {
	console.log({
		targetDateStart,
		targetDateEnd,
		selectOptions,
		onSemiSelectedsChange,
	});
	// Precisa fazer a verificação dos dias disabilitados
	if (targetDateStart && !targetDateEnd) {
		selectOptions.multi?.onSelectedDates([targetDateStart]);
		return;
	}
	if (!targetDateStart && targetDateEnd) {
		selectOptions.multi?.onSelectedDates([targetDateEnd]);
		return;
	}
	if (!(targetDateStart && targetDateEnd)) return;

	const daysPorra = eachDayOfInterval({
		start: targetDateStart,
		end: targetDateEnd,
	});
	selectOptions.multi?.onSelectedDates([...daysPorra]);
	onSemiSelectedsChange([]);
}

type PropsHandleHoverRangeSelection = {
	date: Date;
	selectionByRange: TSelectionByRange;
	setSemiSelecteds: Dispatch<SetStateAction<Date[]>>;
};
function handleHoverRangeSelection({
	date,
	selectionByRange,
	setSemiSelecteds,
}: PropsHandleHoverRangeSelection) {
	if (!selectionByRange.start || selectionByRange.end) return;
	const daysPorra = eachDayOfInterval({
		start: date < selectionByRange.start ? date : selectionByRange.start,
		end: date < selectionByRange.start ? selectionByRange.start : date,
	});
	setSemiSelecteds([...daysPorra]);
}

type PropsGetClassNames = {
	date: Date;
	disabled?: TDisabled;
	startDate: Date;
	endDate: Date;
	selectOptions: TSelectOptions;
	semiSelecteds: Date[];
};
function getClassNames({
	date,
	endDate,
	startDate,
	disabled,
	selectOptions,
	semiSelecteds,
}: PropsGetClassNames) {
	const { single, multi } = selectOptions;
	const classToReturn: string[] = ['border'];
	if (isToday(date)) {
		classToReturn.push('bg-primary-700');
	}
	// Verify Selection By Range is Active
	if (dateIsInArray(date, semiSelecteds)) {
		classToReturn.push('bg-primary-100');
	}

	// Verify if date is selected
	if (
		dateIsInArray(date, multi?.selectedDates) ||
		isSameDay(date, single?.selectedDate as Date)
	) {
		classToReturn.push('bg-primary-500');
	}
	// Verify if date is disabled
	if (
		(disabled?.dates && dateIsInArray(date, disabled?.dates)) ||
		isBefore(date, disabled?.datesBefore as Date) ||
		isAfter(date, disabled?.datesAfter as Date)
	) {
		classToReturn.push('isDisabled bg-gray-500');
	}
	if (isSameMonth(date, startDate)) {
		classToReturn.push('currentMonth');
	}
	if (date < startDate) {
		classToReturn.push('prevMonth text-red-500 text-opacity-25');
	}
	if (date > endDate) {
		classToReturn.push('nextMonth');
		classToReturn.push('prevMonth text-red-500 text-opacity-25');
	}

	return classToReturn.join(' ');
}

type PropsHandleToggleHeader = {
	dayOfWeek: number;
	weeks: Array<Date[]>;
	startDate: Date;
	disabled?: TDisabled;
	selectOptions: TSelectOptions;
};
function handleToggleHeader({
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

type PropsAllDatesIsSelecteds = {
	dayOfWeek: number;
	weeks: Array<Date[]>;
	startDate: Date;
	disabled?: TDisabled;
	selectOptions: TSelectOptions;
};
function allDatesIsSelectedsByDayOfWeek({
	dayOfWeek,
	weeks,
	startDate,
	disabled,
	selectOptions,
}: PropsAllDatesIsSelecteds) {
	const { multi } = selectOptions;
	if (!multi) return false;
	const daysToAddOrRemove: Date[] = [];

	for (const item of weeks) {
		// Verify if is same month and if date is not disabled
		if (
			isSameMonth(item[dayOfWeek], startDate) &&
			!dateIsInArray(item[dayOfWeek], disabled?.dates)
		) {
			daysToAddOrRemove.push(item[dayOfWeek]);
		}
	}

	const result = daysToAddOrRemove.every(item =>
		multi.selectedDates.some(date => isSameDay(date, item))
	);

	return result;
}

type PropsFixSelectionByRange = {
	date: Date;
	selectionByRange: TSelectionByRange;
	selectOptions: TSelectOptions;
	onSemiSelectedsChange: Dispatch<SetStateAction<Date[]>>;
};
function fixSelectionByRange({
	selectionByRange,
	date,
	selectOptions,
	onSemiSelectedsChange,
}: PropsFixSelectionByRange) {
	let t: TSelectionByRange = { start: null, end: null };
	if (selectionByRange.start && selectionByRange.end) {
		t = { start: date, end: null };
	} else if (selectionByRange.start && date < selectionByRange.start) {
		t = { start: date, end: selectionByRange.start };
	} else if (!selectionByRange.start) {
		t = { ...selectionByRange, start: date };
	} else if (selectionByRange.start && !selectionByRange.end) {
		t = { ...selectionByRange, end: date };
	} else {
		t = { start: null, end: null };
	}
	handleSelectByRange({
		onSemiSelectedsChange,
		selectOptions,
		targetDateStart: t.start,
		targetDateEnd: t.end,
	});
	return t;
}

export const calendar = {
	handleToggleSelection,
	getClassNames,
	dateIsInArray,
	handleToggleHeader,
	allDatesIsSelectedsByDayOfWeek,
	handleSelectByRange,
	handleHoverRangeSelection,
	fixSelectionByRange,
};
