// import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { useDatepickerMega } from '../../hooks';
import { onBlurDay, onChangeDay } from '../../utils';

export default function Day() {
	// props: DetailedHTMLProps<
	// 	InputHTMLAttributes<HTMLInputElement>,
	// 	HTMLInputElement
	// >,
	const { inputDayRef, date, setDate, onChange, defaultDate } =
		useDatepickerMega();

	return (
		<input
			defaultValue={defaultDate?.getDate()}
			ref={inputDayRef}
			placeholder="dd"
			className="group ring-0 outline-none bg-transparent w-8 h-8 p-1 flex  text-center"
			onChange={event =>
				onChangeDay({ event, date, setDate, onChange, dayRef: inputDayRef })
			}
			onBlur={event => onBlurDay({ event, dayRef: inputDayRef })}
		/>
	);
}
