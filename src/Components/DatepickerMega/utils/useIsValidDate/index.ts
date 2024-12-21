import { useDatepickerMega } from '../../hooks';

export function useIsValidDate() {
	const { date } = useDatepickerMega();
	const isValidDate = () => {
		console.log({ date });
	};

	return {
		isValidDate,
	};
}
