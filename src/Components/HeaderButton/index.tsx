/* eslint-disable react/button-has-type */
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type Props = DetailedHTMLProps<
	ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>;

export function HeaderButton({ children, ...rest }: Props) {
	return (
		<button
			className="inline-flex text-sm bg-[#1f2937] border-[#c2e0ff14] border-2 rounded-lg p-2 transition-all duration-500 text-white
			focus:outline-2 focus:outline-offset-2
			hover:bg-[#374151]"
			{...rest}
		>
			{children}
		</button>
	);
}
