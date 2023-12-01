import { DetailedHTMLProps, forwardRef, HTMLAttributes } from 'react';
import { managerClassNames } from '~/Utils/ManagerClassNames';

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export const ComponentBlock = forwardRef<HTMLDivElement, Props>(
	({ className, ...rest }, ref) => (
		<div
			ref={ref}
			{...rest}
			className={managerClassNames([
				{ componentBlock: true },
				{ children: true },
				{ [className as string]: className },
			])}
		/>
	)
);
