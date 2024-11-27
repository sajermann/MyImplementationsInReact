// import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { useDatepickerMega } from '../../hooks';
import { onChangeMinute } from '../../utils';

export default function Minute() {
	// props: DetailedHTMLProps<
	// 	InputHTMLAttributes<HTMLInputElement>,
	// 	HTMLInputElement
	// >,
	const { inputMinuteRef, setDate, onChange, defaultDate } =
		useDatepickerMega();

	return (
		<input
			defaultValue={defaultDate?.getMinutes()}
			ref={inputMinuteRef}
			placeholder="mm"
			className="group ring-0 outline-none bg-transparent w-9 h-8 p-1 flex text-center"
			onChange={event =>
				onChangeMinute({
					event,
					setDate,
					onChange,
					minuteRef: inputMinuteRef,
				})
			}
		/>
	);
}
