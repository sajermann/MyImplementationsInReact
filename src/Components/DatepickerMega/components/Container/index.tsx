import { ReactNode, useRef } from 'react';
import { tv } from 'tailwind-variants';
import { useDatepickerMega } from '../../hooks';
import Calendar from '../Calendar';
import {
	Popover,
	PopoverArrow,
	PopoverContent,
	PopoverPortal,
	PopoverTrigger,
} from '../Popover';

const input = tv({
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

export function Container({ children }: { children: ReactNode }) {
	const rootRef = useRef<HTMLInputElement>(null);
	const { isOpenCalendar, setIsOpenCalendar } = useDatepickerMega();
	const { inputPropsInternal } = input({
		color: 'primary',
	});
	// return (
	// 	<>
	// 		<div ref={rootRef} className={inputPropsInternal()}>
	// 			{children}
	// 		</div>
	// 		{JSON.stringify({ isOpenCalendar })}
	// 	</>
	// );
	return (
		<Popover open={isOpenCalendar}>
			<PopoverTrigger className="hover:cursor-default">
				<div ref={rootRef} className={inputPropsInternal()}>
					{children}
				</div>
			</PopoverTrigger>
			<PopoverPortal>
				<PopoverContent
					className=""
					onInteractOutside={() => setIsOpenCalendar(false)}
				>
					<PopoverArrow />
					<Calendar />
				</PopoverContent>
			</PopoverPortal>
		</Popover>
	);
}
