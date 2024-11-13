/* eslint-disable no-param-reassign */
import { lastDayOfMonth } from 'date-fns';
import {
	TOnBlurDay,
	TOnBlurMonth,
	TOnBlurYear,
	TChangeDay,
	TChangeMonth,
	TChangeYear,
	TAdjustDay,
} from '../types';

const adjustDay = ({ date, dayRef, setDate }: TAdjustDay) => {
	if (!date.month) {
		return;
	}
	const today = new Date();
	const lastDayOfMonthSelected = lastDayOfMonth(
		new Date(date.year || today.getFullYear(), date.month - 1),
	);
	if (
		dayRef?.current &&
		Number(dayRef?.current?.value) > lastDayOfMonthSelected.getDate()
	) {
		const lastDay = lastDayOfMonthSelected.getDate();
		dayRef.current.value = lastDay.toString();
		setDate(prev => ({
			...prev,
			day: lastDay,
		}));
	}
};

export const onBlurDay = ({ event, dayRef }: TOnBlurDay) => {
	const { value } = event.target;
	if (value === '0' && dayRef?.current) {
		dayRef.current.value = '';
	}
};

export const onBlurMonth = ({
	event,
	monthRef,
	dayRef,
	date,
	setDate,
}: TOnBlurMonth) => {
	const { value } = event.target;
	if (value === '0' && monthRef?.current) {
		monthRef.current.value = '';
	}
	adjustDay({ date, dayRef, setDate });
};

export const onBlurYear = ({
	event,
	dayRef,
	yearRef,
	date,
	setDate,
}: TOnBlurYear) => {
	const { value } = event.target;
	if (value === '0' && yearRef?.current) {
		yearRef.current.value = '';
	}
	adjustDay({ date, dayRef, setDate });
};

export const onChangeDay = ({ event, date, setDate }: TChangeDay) => {
	const temp = { ...event };
	let valueTemp = temp.target.value;
	valueTemp = valueTemp.replace(/[^0-9]/g, '');
	if (valueTemp.length > 2) {
		valueTemp = valueTemp.substring(0, 2);
	}
	if (Number(valueTemp) > 31) {
		valueTemp = '31';
	}

	if (date.month) {
		const today = new Date();
		const lastDayOfMonthSelected = lastDayOfMonth(
			new Date(date.year || today.getFullYear(), date.month - 1),
		);

		if (lastDayOfMonthSelected.getDate() < Number(valueTemp)) {
			valueTemp = String(lastDayOfMonthSelected.getDate());
		}
	}

	temp.target.value = valueTemp;
	setDate(prev => ({
		...prev,
		day: Number(valueTemp) || null,
	}));
};

export const onChangeMonth = ({ event, setDate }: TChangeMonth) => {
	const temp = { ...event };
	let valueTemp = temp.target.value;
	valueTemp = valueTemp.replace(/[^0-9]/g, '');
	if (valueTemp.length > 2) {
		valueTemp = valueTemp.substring(0, 2);
	}
	if (Number(valueTemp) > 12) {
		valueTemp = '12';
	}

	temp.target.value = valueTemp;
	setDate(prev => ({
		...prev,
		month: Number(valueTemp) || null,
	}));
};

export const onChangeYear = ({ event, setDate }: TChangeYear) => {
	const temp = { ...event };
	let valueTemp = temp.target.value;
	valueTemp = valueTemp.replace(/[^0-9]/g, '');
	if (valueTemp.length > 4) {
		valueTemp = valueTemp.substring(0, 4);
	}
	temp.target.value = valueTemp;
	setDate(prev => ({
		...prev,
		year: Number(valueTemp) || null,
	}));
};
