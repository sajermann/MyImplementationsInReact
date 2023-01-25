import { DetailedHTMLProps, HTMLAttributes } from 'react';

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
export function Nav({ children }: Props) {
	return (
		<nav className="h-16 flex items-center justify-center p-4 bg-dark-700 border-b-[#c2e0ff14]">
			{children}
		</nav>
	);
}
