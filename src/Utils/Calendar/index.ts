import { isSameDay, isSameMonth, isToday } from 'date-fns';
import { Dispatch, SetStateAction } from 'react';

function dateIsInArray(dateToVerify: Date, datesArray: Date[]) {
	const result = datesArray.find(
		item => item.toISOString() === dateToVerify.toISOString()
	);
	return result !== undefined;
}

type PropsHandleToggleSelection = {
	date: Date;
	startDate: Date;
	selectedDates: Date[];
	setSelectedDates: Dispatch<SetStateAction<Date[]>>;
	disabledDates?: Date[];
};

function handleToggleSelection({
	date,
	startDate,
	selectedDates,
	setSelectedDates,
	disabledDates,
}: PropsHandleToggleSelection) {
	if (
		(disabledDates && dateIsInArray(date, disabledDates)) ||
		!isSameMonth(date, startDate)
	)
		return;

	const result = selectedDates.find(
		item => item.toISOString() === date.toISOString()
	);

	if (!result) {
		setSelectedDates(prev => [...prev, date]);
	} else {
		setSelectedDates(prev => {
			const result2 = prev.filter(
				item => item.toISOString() !== date.toISOString()
			);
			return result2;
		});
	}
}

type PropsGetClassNames = {
	day: Date;
	selectedDates: Date[];
	disabledDates?: Date[];
	startDate: Date;
	endDate: Date;
};
function getClassNames({
	day,
	endDate,
	selectedDates,
	startDate,
	disabledDates,
}: PropsGetClassNames) {
	const classToReturn: string[] = ['border'];
	if (isToday(day)) {
		classToReturn.push('bg-primary-700');
	}
	// Verify if date is selected
	if (dateIsInArray(day, selectedDates)) {
		classToReturn.push('bg-primary-500');
	}
	// Verify if date is disabled
	if (disabledDates && dateIsInArray(day, disabledDates)) {
		classToReturn.push('isDisabled bg-gray-500');
	}
	if (isSameMonth(day, startDate)) {
		classToReturn.push('currentMonth');
	}
	if (day < startDate) {
		classToReturn.push('prevMonth text-red-500 text-opacity-25');
	}
	if (day > endDate) {
		classToReturn.push('nextMonth');
		classToReturn.push('prevMonth text-red-500 text-opacity-25');
	}

	return classToReturn.join(' ');
}

type PropsHandleToggleWeekly = {
	dayOfWeek: number;
	weeks: Array<Date[]>;
	startDate: Date;
	disabledDates?: Date[];
	setSelectedDates: Dispatch<SetStateAction<Date[]>>;
};
function handleToggleWeekly({
	dayOfWeek,
	weeks,
	startDate,
	disabledDates,
	setSelectedDates,
}: PropsHandleToggleWeekly) {
	const daysToAddOrRemove: Date[] = [];

	for (const item of weeks) {
		// Verify if is same month and if date is not disabled
		if (
			isSameMonth(item[dayOfWeek], startDate) &&
			!dateIsInArray(item[dayOfWeek], disabledDates || [])
		) {
			daysToAddOrRemove.push(item[dayOfWeek]);
		}
	}

	setSelectedDates(prev => {
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
	disabledDates?: Date[];
	selectedDates: Date[];
};
function allDatesIsSelectedsByDayOfWeek({
	dayOfWeek,
	weeks,
	startDate,
	disabledDates,
	selectedDates,
}: PropsAllDatesIsSelecteds) {
	const daysToAddOrRemove: Date[] = [];

	for (const item of weeks) {
		// Verify if is same month and if date is not disabled
		if (
			isSameMonth(item[dayOfWeek], startDate) &&
			!dateIsInArray(item[dayOfWeek], disabledDates || [])
		) {
			daysToAddOrRemove.push(item[dayOfWeek]);
		}
	}

	const result = daysToAddOrRemove.every(item =>
		selectedDates.some(date => isSameDay(date, item))
	);

	return result;
}

export const calendar = {
	handleToggleSelection,
	getClassNames,
	dateIsInArray,
	handleToggleWeekly,
	allDatesIsSelectedsByDayOfWeek,
};
