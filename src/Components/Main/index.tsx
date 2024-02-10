import { DetailedHTMLProps, HTMLAttributes, memo } from 'react';

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export const Main = memo(({ children, ...rest }: Props) => (
	<main {...rest} className="h-full gap-2 flex flex-col">
		{children}
	</main>
));
