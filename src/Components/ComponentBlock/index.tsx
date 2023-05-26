import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { managerClassNames } from '~/Utils/ManagerClassNames';

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export function ComponentBlock({ children, className }: Props) {
	return (
		<div
			className={managerClassNames([
				{ componentBlock: true },
				{ [className as string]: className },
			])}
		>
			<div className="children">{children}</div>
		</div>
	);
}
