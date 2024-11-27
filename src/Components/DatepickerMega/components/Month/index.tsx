import { useDatepickerMega } from '../../hooks';
import { onBlurMonth, onChangeMonth } from '../../utils';

export default function Month() {
	const { inputMonthRef, inputDayRef, date, setDate, defaultDate, onChange } =
		useDatepickerMega();
	return (
		<input
			ref={inputMonthRef}
			defaultValue={defaultDate && defaultDate.getMonth() + 1}
			placeholder="mm"
			className="group ring-0 outline-none bg-transparent w-10 h-8 p-1 flex text-center"
			onChange={event =>
				onChangeMonth({
					event,
					setDate,
					onChange,
					monthRef: inputMonthRef,
					dayRef: inputDayRef,
				})
			}
			onBlur={event =>
				onBlurMonth({
					date,
					setDate,
					dayRef: inputDayRef,
					event,
					monthRef: inputMonthRef,
					onChange,
				})
			}
		/>
	);
}
