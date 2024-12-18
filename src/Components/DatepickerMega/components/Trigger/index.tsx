import { ButtonHTMLAttributes, DetailedHTMLProps, useEffect } from 'react';
import { tv } from 'tailwind-variants';
import { useDatepickerMega } from '../../hooks';

const button = tv({
	base: 'ring-0 outline-none flex items-center justify-center h-8 p-1 hover:text-blue-500 transition-colors duration-500',
});

type TProps = DetailedHTMLProps<
	ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>;

function TriggerBase(
	props: DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	>,
) {
	const { setIsOpenCalendar } = useDatepickerMega();

	return (
		<button
			type="button"
			aria-label="trigger:calendar"
			{...props}
			className={button({ class: props?.className })}
			onClick={e => {
				props?.onClick?.(e);
				setIsOpenCalendar(true);
			}}
		/>
	);
}

export function SingleDayTrigger(props: TProps) {
	const { setModePicker } = useDatepickerMega();
	useEffect(() => {
		setModePicker('single_day_picker');
	}, []);

	return <TriggerBase {...props} />;
}

export function SingleMonthTrigger(props: TProps) {
	const { setModePicker } = useDatepickerMega();
	useEffect(() => {
		setModePicker('single_month_picker');
	}, []);

	return <TriggerBase {...props} />;
}
