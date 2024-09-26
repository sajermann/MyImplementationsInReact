import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { managerClassNames } from '~/Utils/ManagerClassNames';

type NoUpdatingDescriptionProps = DetailedHTMLProps<
	HTMLAttributes<HTMLSpanElement>,
	HTMLSpanElement
>;

export function NoUpdatingDescription({
	className,
	...rest
}: NoUpdatingDescriptionProps) {
	return (
		<span
			{...rest}
			className={managerClassNames({
				[className as string]: className,
			})}
		/>
	);
}
