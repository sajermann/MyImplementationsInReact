/* eslint-disable react/button-has-type */
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { Button } from '../Button';

type Props = DetailedHTMLProps<
	ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>;

export function HeaderButton({ children, ...rest }: Props) {
	return (
		<Button
			iconButton="squared"
			variant="option"
			{...rest}
			className="bg-dark-600 text-white"
		>
			{children}
		</Button>
	);
}
