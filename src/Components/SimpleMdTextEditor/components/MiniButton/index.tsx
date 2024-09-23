/* eslint-disable react/button-has-type */
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export function Minibutton(
	props: DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	>,
) {
	return (
		<button
			className="font-bold p-2 border rounded w-8 h-8 flex items-center justify-center hover:border-blue-800 hover:text-blue-800 transition-colors duration-500"
			{...props}
		/>
	);
}
