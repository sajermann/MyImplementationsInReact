import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { managerClassNames } from '~/Utils/ManagerClassNames';

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
export function Nav({ children, className }: Props) {
	return (
		<nav
			className={managerClassNames({
				'h-16 flex items-center justify-center p-4 bg-dark-700 border-b-[#c2e0ff14]':
					true,
				[className as string]: className,
			})}
		>
			{children}
		</nav>
	);
}
