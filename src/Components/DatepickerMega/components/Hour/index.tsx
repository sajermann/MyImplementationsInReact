import { useDatepickerMega } from '../../hooks';
import { onChangeHour } from '../../utils';

export default function Hour() {
	// props: DetailedHTMLProps<
	// 	InputHTMLAttributes<HTMLInputElement>,
	// 	HTMLInputElement
	// >,
	const { inputHourRef, setDate, onChange, defaultDate, isAmPmMode, date } =
		useDatepickerMega();

	const getDefault = () => {
		if (!defaultDate) return undefined;
		if (!isAmPmMode) {
			return defaultDate.getHours();
		}
		return defaultDate.getHours() > 12
			? defaultDate.getHours() - 12
			: defaultDate.getHours();
	};

	return (
		<input
			defaultValue={getDefault()}
			ref={inputHourRef}
			placeholder="hh"
			className="group ring-0 outline-none bg-transparent w-8 h-8 p-1 flex  text-center"
			onChange={event =>
				onChangeHour({
					event,
					setDate,
					onChange,
					hourRef: inputHourRef,
					isAmPm: isAmPmMode,
				})
			}
			// onBlur={event => onBlurDay({ event, dayRef: inputHourRef })}
		/>
	);
}
