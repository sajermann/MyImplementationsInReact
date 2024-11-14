import { ReactNode } from 'react';
import { tv } from 'tailwind-variants';
import { DatepickerMegaProvider } from '../../hooks';
import { TDate } from '../../types';

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

type TProps = {
	defaultDate?: Date;
	onChange?: (data: TDate) => void;
	children: ReactNode;
};

export default function Root({ children, defaultDate, onChange }: TProps) {
	const { inputPropsInternal } = input({
		color: 'primary',
	});
	return (
		<DatepickerMegaProvider defaultDate={defaultDate} onChange={onChange}>
			<div className={inputPropsInternal()}>{children}</div>
		</DatepickerMegaProvider>
	);
}
