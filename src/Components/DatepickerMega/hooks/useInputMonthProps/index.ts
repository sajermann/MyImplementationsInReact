import { isValid, parse } from 'date-fns';
import { ChangeEvent, FocusEvent } from 'react';
import { useIsValidDate, useDatepickerMega } from '..';
import { adjustDay, focusNextInput } from '../../utils';

export function useInputMonthProps() {
	const { inputMonthRef, inputDayRef, date, setDate, onChange } =
		useDatepickerMega();
	const { isValidDate } = useIsValidDate();

	const onBlur = (event: FocusEvent<HTMLInputElement, Element>) => {
		const { value } = event.target;
		if (value === '0' && inputMonthRef?.current) {
			inputMonthRef.current.value = '';
		}
		adjustDay({ date, dayRef: inputDayRef, setDate, onChange });
	};

	const onChangeInternal = (event: ChangeEvent<HTMLInputElement>) => {
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
			const dateComplete =
				prev.day && valueTemp && prev.year
					? parse(
							`${prev.year}-${Number(valueTemp)}-${prev.day}`,
							'yyyy-MM-dd',
							new Date(),
						)
					: null;

			const newValues = {
				...prev,
				month: Number(valueTemp) || null,
				date: isValid(dateComplete) && dateComplete ? dateComplete : null,
				iso:
					isValid(dateComplete) && dateComplete
						? dateComplete.toISOString()
						: null,
			};
			if (onChange) {
				onChange(newValues);
			}

			if (valueTemp.length > 1 && inputMonthRef?.current) {
				focusNextInput(inputMonthRef.current);
				adjustDay({ date: newValues, dayRef: inputDayRef, setDate, onChange });
			}

			return { ...newValues };
		});
	};

	return {
		onBlur,
		onChange: onChangeInternal,
		ref: inputMonthRef,
	};
}
