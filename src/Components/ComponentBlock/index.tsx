import { DetailedHTMLProps, HTMLAttributes, memo } from 'react';
import { managerClassNames } from '~/Utils/ManagerClassNames';

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export const ComponentBlock = memo(({ children, className }: Props) => (
	<div
		className={managerClassNames([
			{ componentBlock: true },
			{ [className as string]: className },
		])}
	>
		<div className="children">{children}</div>
	</div>
));
