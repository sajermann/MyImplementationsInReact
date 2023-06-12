import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { Icons } from '~/Components/Icons';

type Props = DetailedHTMLProps<
	ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
> & {
	show: boolean;
};
export function ButtonRemove({ onClick, show }: Props) {
	if (!show) return null;
	return (
		<button type="button" className="tag-delete h-3" onClick={onClick}>
			<Icons nameIcon="close" />
		</button>
	);
}
