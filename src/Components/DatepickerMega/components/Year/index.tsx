import { useDatepickerMega } from '../../hooks';
import { onBlurYear, onChangeYear } from '../../utils';

export default function Year() {
	const { inputYearRef, inputDayRef, date, setDate, defaultDate, onChange } =
		useDatepickerMega();
	return (
		<input
			ref={inputYearRef}
			defaultValue={defaultDate?.getFullYear()}
			placeholder="yyyy"
			className="group ring-0 outline-none bg-transparent w-12 h-8 p-1 flex  text-center"
			onChange={event =>
				onChangeYear({
					event,
					setDate,
					onChange,
					yearRef: inputYearRef,
					dayRef: inputDayRef,
				})
			}
			onBlur={event =>
				onBlurYear({
					date,
					setDate,
					dayRef: inputDayRef,
					yearRef: inputYearRef,
					event,
					onChange,
				})
			}
		/>
	);
}
