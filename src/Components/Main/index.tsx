import { DetailedHTMLProps, HTMLAttributes } from 'react';

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export function Main({ children, ...rest }: Props) {
	return (
		<main
			{...rest}
			className="dark:bg-[#1f2937] overflow-auto h-full gap-2 flex flex-col"
		>
			{children}
		</main>
	);
}
