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
		console.log(`isDisabledDate`, date.current.date, disabledDates);
		if (!date.current.date) return false;
		const t = disabledDates?.find(
			d => d.valueOf() === date.current.date?.valueOf(),
		);
		return !!t;
	};

	return {
		isValidDate,
		isDisabledDate,
	};
}
