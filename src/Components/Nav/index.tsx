import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { managerClassNames } from '~/Utils/ManagerClassNames';

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
export function Nav({ children, className }: Props) {
	return (
		<nav
			className={managerClassNames({
				'h-16 flex items-center justify-center p-4': true,
				'border-b border-b-dark-400': true,
				'backdrop-blur-md z-50 sticky top-0': true,
				'bg-white dark:bg-dark-500/70': true,
				'text-black dark:text-white': true,
				[className as string]: className,
			})}
		>
			{children}
		</nav>
	);
}
