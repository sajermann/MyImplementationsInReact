import { isValid, parse } from 'date-fns';
import { ChangeEvent, FocusEvent } from 'react';
import { adjustDay, focusNextInput } from '../../utils';
import { useDatepickerMega } from '../useDatepickerMega';

export function useInputYearProps() {
	const { inputDayRef, inputYearRef, date, setDate, onChange } =
		useDatepickerMega();

	const onBlur = (event: FocusEvent<HTMLInputElement, Element>) => {
		const { value } = event.target;
		if (value === '0' && inputYearRef?.current) {
			inputYearRef.current.value = '';
		}
		adjustDay({ date, dayRef: inputDayRef, setDate, onChange });
	};

	const onChangeInternal = (event: ChangeEvent<HTMLInputElement>) => {
		const temp = { ...event };
		let valueTemp = temp.target.value;
		valueTemp = valueTemp.replace(/[^0-9]/g, '');
		if (valueTemp.length > 4) {
			valueTemp = valueTemp.substring(0, 4);
		}
		temp.target.value = valueTemp;

		setDate(prev => {
			const dateComplete =
				prev.day && prev.month && valueTemp
					? parse(
							`${Number(valueTemp)}-${prev.month}-${prev.day}`,
							'yyyy-MM-dd',
							new Date(),
						)
					: null;

			if (dateComplete) {
				dateComplete.setHours(0, 0, 0, 0);
			}

			const newValues = {
				...prev,
				year: Number(valueTemp) || null,
				date: isValid(dateComplete) && dateComplete ? dateComplete : null,
				iso:
					isValid(dateComplete) && dateComplete
						? dateComplete.toISOString()
						: null,
			};
			if (onChange) {
				onChange(newValues);
			}

			if (valueTemp.length > 3 && inputYearRef?.current) {
				focusNextInput(inputYearRef.current);
				adjustDay({ date: newValues, dayRef: inputDayRef, setDate, onChange });
			}

			return { ...newValues };
		});
	};

	return {
		onBlur,
		onChange: onChangeInternal,
		ref: inputYearRef,
	};
}
