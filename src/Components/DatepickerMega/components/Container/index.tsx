import { ReactNode } from 'react';
import { tv } from 'tailwind-variants';
import { useDatepickerMega } from '../../hooks';
import { SingleDayPicker } from '../SingleDayPicker';
import {
	Popover,
	PopoverArrow,
	PopoverContent,
	PopoverPortal,
	PopoverTrigger,
} from '../Popover';
import { SingleMonthPicker } from '../SingleMonthPicker';

const rootContainer = tv({
	slots: {
		inputPropsInternal: [
			'group outline-none focus:ring-1 border h-11 py-1 px-2 rounded w-full bg-transparent',
			'transition-all duration-500 disabled:cursor-not-allowed disabled:opacity-50',
			'flex w-fit',
		],
	},
	variants: {
		color: {
			primary: {
				inputPropsInternal:
					'focus:ring-blue-500 group-hover:border-blue-500 focus:border-blue-500 group-focus-within:border-blue-500',
			},
			error: {
				inputPropsInternal:
					'focus:ring-red-500 group-hover:border-red-500 focus:border-red-500 group-focus-within:border-red-500',
			},
			normal: {
				inputPropsInternal: '',
			},
		},
	},

	defaultVariants: {
		color: 'normal',
	},
});

function RenderPicker() {
	const { modePicker } = useDatepickerMega();
	const CONFIG = {
		single_day_picker: <SingleDayPicker />,
		single_month_picker: <SingleMonthPicker />,
	};

	return CONFIG[modePicker];
}

export function Container({ children }: { children: ReactNode }) {
	const { isOpenCalendar, setIsOpenCalendar, rootRef, modePicker } =
		useDatepickerMega();
	const { inputPropsInternal } = rootContainer({
		color: 'primary',
	});

	return (
		<Popover open={isOpenCalendar}>
			<PopoverTrigger asChild className="hover:cursor-default">
				<div ref={rootRef} className={inputPropsInternal()}>
					{children}
				</div>
			</PopoverTrigger>
			<PopoverPortal>
				<PopoverContent onInteractOutside={() => setIsOpenCalendar(false)}>
					<PopoverArrow />
					<RenderPicker />
				</PopoverContent>
			</PopoverPortal>
		</Popover>
	);
}
