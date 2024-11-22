import { useDatepickerMega } from '../../hooks';
import { onChangeHour } from '../../utils';

export default function Hour() {
	// props: DetailedHTMLProps<
	// 	InputHTMLAttributes<HTMLInputElement>,
	// 	HTMLInputElement
	// >,
	const { inputHourRef, setDate, onChange, defaultDate } = useDatepickerMega();

	return (
		<input
			defaultValue={defaultDate?.getHours()}
			ref={inputHourRef}
			placeholder="hh"
			className="group ring-0 outline-none bg-transparent w-8 h-8 p-1 flex  text-center"
			onChange={event =>
				onChangeHour({ event, setDate, onChange, hourRef: inputHourRef })
			}
			// onBlur={event => onBlurDay({ event, dayRef: inputHourRef })}
		/>
	);
}
