import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { managerClassNames } from '~/Utils/ManagerClassNames';

type UpdatingDescriptionProps = DetailedHTMLProps<
	HTMLAttributes<HTMLSpanElement>,
	HTMLSpanElement
> & {
	value: string;
};

export function UpdatingDescription({
	value,
	className,
	...rest
}: UpdatingDescriptionProps) {
	return (
		<span
			{...rest}
			className={managerClassNames({
				'invisible whitespace-pre p-2 h-12': true,
				[className as string]: className,
			})}
		>
			{value}
		</span>
	);
}
