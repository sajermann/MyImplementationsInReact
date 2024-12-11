import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { tv } from 'tailwind-variants';
import { useDatepickerMega } from '../../hooks';
import { onBlurDay, onChangeDay } from '../../utils';

const input = tv({
	base: 'group ring-0 outline-none bg-transparent w-8 h-8 p-1 flex text-center',
});

export default function Day({
	placeholder = 'dd',
	...props
}: Omit<
	DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
	'ref'
>) {
	const { inputDayRef, date, setDate, onChange } = useDatepickerMega();

	return (
		<input
			{...props}
			ref={inputDayRef}
			placeholder={placeholder}
			className={input({ class: props?.className })}
			onChange={event => {
				props?.onChange?.(event);
				onChangeDay({ event, date, setDate, onChange, dayRef: inputDayRef });
			}}
			onBlur={event => {
				props?.onBlur?.(event);
				onBlurDay({ event, dayRef: inputDayRef });
			}}
		/>
	);
}
