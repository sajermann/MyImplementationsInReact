import { isValid } from 'date-fns';
import { useDatepickerMega } from '..';

export function useIsValidDate() {
	const { disabledDates, date } = useDatepickerMega();

	const isValidDate = (dateToVerify: Date | null) => {
		if (!dateToVerify || !isValid(dateToVerify)) return false;
		const t = disabledDates?.find(d => d.valueOf() === dateToVerify.valueOf());
		return !t;
	};

	const isDisabledDate = () => {
		if (!date.date) return;
		const t = disabledDates?.find(d => d.valueOf() === date.date?.valueOf());
		console.log(`is Disabled Date`, { t, date: date.date });
	};

	return {
		isValidDate,
		isDisabledDate,
	};
}
