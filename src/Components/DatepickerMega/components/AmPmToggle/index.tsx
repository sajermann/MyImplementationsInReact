// import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { useEffect } from 'react';
import { useDatepickerMega } from '../../hooks';
import { onClickToggleAmPm } from '../../utils';

export default function AmPmToggle() {
	const { setDate, onChange, date, setIsAmPmMode } = useDatepickerMega();
	useEffect(() => {
		setIsAmPmMode(true);
	}, []);

	return (
		<input
			readOnly
			className="group ring-0 outline-none bg-transparent w-9 h-8 p-1 flex  text-center cursor-pointer"
			onClick={() => {
				onClickToggleAmPm({
					setDate,
					onChange,
					isAmPm: true,
				});
			}}
			value={date.clockType?.toString().toUpperCase()}
		/>
	);
}
