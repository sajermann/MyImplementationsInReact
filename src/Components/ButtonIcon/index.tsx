import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { managerClassNames } from '~/Utils/ManagerClassNames';

/* eslint-disable react/button-has-type */
interface Props
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	onClick: () => void;
	children: React.ReactNode;
}

export function ButtonIcon({ onClick, children, className, ...rest }: Props) {
	return (
		<button
			{...rest}
			className={managerClassNames({
				'p-1 h-8 w-8 flex items-center justify-center rounded-full': true,
				'hover:bg-info-500 dark:hover:bg-slate-600': true,
				'transition-colors duration-300': true,
				[className as string]: className,
			})}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
