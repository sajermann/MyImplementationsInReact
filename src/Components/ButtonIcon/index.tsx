import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

/* eslint-disable react/button-has-type */
interface Props
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	onClick: () => void;
	children: React.ReactNode;
}

export function ButtonIcon({ onClick, children, ...rest }: Props) {
	return (
		<button
			{...rest}
			className={`p-1 h-8 w-8 flex items-center justify-center rounded-full hover:bg-info-500 dark:hover:bg-slate-600 transition-colors duration-300 ${rest.className}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
