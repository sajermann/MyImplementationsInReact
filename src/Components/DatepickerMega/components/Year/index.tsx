import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { tv } from 'tailwind-variants';
import { useDatepickerMega } from '../../hooks';
import { onBlurYear, onChangeYear } from '../../utils';

const input = tv({
	base: 'group ring-0 outline-none bg-transparent w-12 h-8 p-1 flex text-center',
});

export function Year({
	placeholder = 'yyyy',
	...props
}: Omit<
	DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
	'ref'
>) {
	const { inputYearRef, inputDayRef, date, setDate, onChange } =
		useDatepickerMega();
	return (
		<input
			{...props}
			ref={inputYearRef}
			placeholder={placeholder}
			className={input({ class: props?.className })}
			onChange={event => {
				props?.onChange?.(event);
				onChangeYear({
					event,
					setDate,
					onChange,
					yearRef: inputYearRef,
					dayRef: inputDayRef,
				});
			}}
			onBlur={event => {
				props?.onBlur?.(event);
				onBlurYear({
					date,
					setDate,
					dayRef: inputDayRef,
					yearRef: inputYearRef,
					event,
					onChange,
				});
			}}
		/>
	);
}
