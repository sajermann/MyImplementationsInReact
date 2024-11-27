// import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { useDatepickerMega } from '../../hooks';
import { onClickToggleAmPm } from '../../utils';

export default function AmPmToggle() {
	// props: DetailedHTMLProps<
	// 	InputHTMLAttributes<HTMLInputElement>,
	// 	HTMLInputElement
	// >,
	const { inputHourRef, setDate, onChange, isAmPmMode, date } =
		useDatepickerMega();

	if (!date.clockType) {
		return null;
	}
	return (
		<input
			readOnly
			className="group ring-0 outline-none bg-transparent w-9 h-8 p-1 flex  text-center cursor-pointer"
			onClick={() => {
				onClickToggleAmPm({
					setDate,
					onChange,
					hourRef: inputHourRef,
					isAmPm: isAmPmMode,
				});
			}}
			value={date.clockType.toString().toUpperCase()}
		/>
	);
}
