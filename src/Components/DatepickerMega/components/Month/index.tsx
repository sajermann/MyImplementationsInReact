import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { tv } from 'tailwind-variants';
import { useDatepickerMega } from '../../hooks';
import { onBlurMonth, onChangeMonth } from '../../utils';

const input = tv({
	base: 'group ring-0 outline-none bg-transparent w-10 h-8 p-1 flex text-center',
});

export function Month({
	placeholder = 'mm',
	...props
}: Omit<
	DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
	'ref'
>) {
	const { inputMonthRef, inputDayRef, date, setDate, onChange } =
		useDatepickerMega();
	return (
		<input
			{...props}
			ref={inputMonthRef}
			placeholder={placeholder}
			className={input({ class: props?.className })}
			onChange={event => {
				props?.onChange?.(event);
				onChangeMonth({
					event,
					setDate,
					onChange,
					monthRef: inputMonthRef,
					dayRef: inputDayRef,
				});
			}}
			onBlur={event => {
				props?.onBlur?.(event);
				onBlurMonth({
					date,
					setDate,
					dayRef: inputDayRef,
					event,
					monthRef: inputMonthRef,
					onChange,
				});
			}}
		/>
	);
}
