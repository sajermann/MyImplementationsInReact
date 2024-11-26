/* eslint-disable jsx-a11y/click-events-have-key-events */
// import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { useDatepickerMega } from '../../hooks';
import {
	onBlurDay,
	onChangeDay,
	onChangeHour,
	onClickToggleAmPm,
} from '../../utils';

export default function AmPmToggle() {
	// props: DetailedHTMLProps<
	// 	InputHTMLAttributes<HTMLInputElement>,
	// 	HTMLInputElement
	// >,
	const { inputHourRef, setDate, onChange, defaultDate, isAmPmMode, date } =
		useDatepickerMega();

	if (!date.clockType) {
		return null;
	}
	return (
		// eslint-disable-next-line jsx-a11y/no-static-element-interactions
		<span
			onClick={() => {
				onClickToggleAmPm({
					setDate,
					onChange,
					hourRef: inputHourRef,
					isAmPm: isAmPmMode,
				});
			}}
		>
			{date.clockType.toString().toUpperCase()}
		</span>
	);
}
