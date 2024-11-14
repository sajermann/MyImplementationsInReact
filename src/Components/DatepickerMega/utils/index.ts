/* eslint-disable no-param-reassign */
import { isValid, lastDayOfMonth } from 'date-fns';
import {
	TOnBlurDay,
	TOnBlurMonth,
	TOnBlurYear,
	TChangeDay,
	TChangeMonth,
	TChangeYear,
	TAdjustDay,
} from '../types';

const focusNextInput = (currentInput: HTMLInputElement) => {
	// Pegar todos os inputs do formulário que são do tipo text ou number
	if (!currentInput.parentElement) {
		return;
	}
	const inputs = Array.from(
		currentInput.parentElement.querySelectorAll('input'),
	);
	const currentIndex = inputs.indexOf(currentInput);
	console.log({ currentInput, inputs, currentIndex });

	// Focar o próximo input se existir
	if (currentIndex < inputs.length - 1) {
		inputs[currentIndex + 1].focus();
	}
};

const adjustDay = ({ date, dayRef, setDate, onChange }: TAdjustDay) => {
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

		const dateComplete = new Date(`${date.year}-${date.month}-${lastDay}`);
		setDate(prev => {
			const newValues = {
				...prev,
				day: lastDay,
				date: isValid(dateComplete) ? dateComplete : null,
				iso: isValid(dateComplete) ? dateComplete.toISOString() : null,
			};
			if (onChange) {
				onChange(newValues);
			}
			return { ...newValues };
		});
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
	onChange,
}: TOnBlurMonth) => {
	const { value } = event.target;
	if (value === '0' && monthRef?.current) {
		monthRef.current.value = '';
	}
	adjustDay({ date, dayRef, setDate, onChange });
};

export const onBlurYear = ({
	event,
	dayRef,
	yearRef,
	date,
	setDate,
	onChange,
}: TOnBlurYear) => {
	const { value } = event.target;
	if (value === '0' && yearRef?.current) {
		yearRef.current.value = '';
	}
	adjustDay({ date, dayRef, setDate, onChange });
};

export const onChangeDay = ({
	event,
	date,
	setDate,
	onChange,
	dayRef,
}: TChangeDay) => {
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

	const dateComplete = new Date(
		`${date.year}-${date.month}-${Number(valueTemp)}`,
	);

	setDate(prev => {
		const newValues = {
			...prev,
			day: Number(valueTemp) || null,
			date: isValid(dateComplete) ? dateComplete : null,
			iso: isValid(dateComplete) ? dateComplete.toISOString() : null,
		};
		if (onChange) {
			onChange(newValues);
		}
		return {
			...newValues,
		};
	});

	if (valueTemp.length > 1 && dayRef?.current) {
		focusNextInput(dayRef.current);
	}
};

export const onChangeMonth = ({
	event,
	setDate,
	onChange,
	monthRef,
}: TChangeMonth) => {
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

	setDate(prev => {
		const dateComplete = new Date(
			`${prev.year}-${Number(valueTemp)}-${prev.day}`,
		);
		const newValues = {
			...prev,
			month: Number(valueTemp) || null,
			date: isValid(dateComplete) ? dateComplete : null,
			iso: isValid(dateComplete) ? dateComplete.toISOString() : null,
		};
		if (onChange) {
			onChange(newValues);
		}
		return { ...newValues };
	});

	// Esse trecho não aciona o onBlur do Month, assim o ajuste de dia não ocorre
	if (valueTemp.length > 1 && monthRef?.current) {
		focusNextInput(monthRef.current);
	}
};

export const onChangeYear = ({ event, setDate, onChange }: TChangeYear) => {
	const temp = { ...event };
	let valueTemp = temp.target.value;
	valueTemp = valueTemp.replace(/[^0-9]/g, '');
	if (valueTemp.length > 4) {
		valueTemp = valueTemp.substring(0, 4);
	}
	temp.target.value = valueTemp;

	setDate(prev => {
		const dateComplete = new Date(
			`${Number(valueTemp)}-${prev.month}-${prev.day}`,
		);
		const newValues = {
			...prev,
			year: Number(valueTemp) || null,
			date: isValid(dateComplete) ? dateComplete : null,
			iso: isValid(dateComplete) ? dateComplete.toISOString() : null,
		};
		if (onChange) {
			onChange(newValues);
		}
		return { ...newValues };
	});
};
