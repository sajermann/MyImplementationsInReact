import { isToday } from 'date-fns';
import { Dispatch, SetStateAction } from 'react';

function dateIsInArray(dateToVerify: Date, datesArray: Date[]) {
	const result = datesArray.find(
		item => item.toISOString() === dateToVerify.toISOString()
	);
	return result !== undefined;
}

type PropsHandleToggleSelection = {
	date: Date;
	selectedDates: Date[];
	setSelectedDates: Dispatch<SetStateAction<Date[]>>;
	disabledDates?: Date[];
};

function handleToggleSelection({
	date,
	selectedDates,
	setSelectedDates,
	disabledDates,
}: PropsHandleToggleSelection) {
	if (disabledDates && dateIsInArray(date, disabledDates)) return;

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
	if (day.getMonth() === startDate.getMonth()) {
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

export const calendar = {
	handleToggleSelection,
	getClassNames,
	dateIsInArray,
};
