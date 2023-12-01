import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { Icons } from '~/Components/Icons';
import { showInDevelopment } from '~/Utils/ShowInDevelopment';

type Props = DetailedHTMLProps<
	ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
> & {
	show: boolean;
};
export function ButtonRemove({ onClick, show }: Props) {
	if (!show) return null;
	return (
		<button
			{...showInDevelopment({ 'data-testid': 'remove-button' })}
			type="button"
			className="h-3 w-3 z-[1] text-white"
			onClick={onClick}
		>
			<Icons nameIcon="close" />
		</button>
	);
}
