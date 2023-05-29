import { DetailedHTMLProps, HTMLAttributes, memo } from 'react';

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export const Main = memo(({ children, ...rest }: Props) => (
	// console.log('Aqui');
	<main {...rest} className="dark:bg-[#1f2937] h-full gap-2 flex flex-col">
		{children}
	</main>
));
