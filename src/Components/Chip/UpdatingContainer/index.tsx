import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { managerClassNames } from '~/Utils/ManagerClassNames';

type UpdatingContainerProps = DetailedHTMLProps<
	HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
> & {
	onRemove?: (id: string) => void;
};

export function UpdatingContainer({
	onRemove,
	className,
	...rest
}: UpdatingContainerProps) {
	return (
		<div
			{...rest}
			className={managerClassNames({
				'relative w-min min-w-[1em] flex items-center pr-2': true,
				'pr-2': !onRemove,
				[className as string]: className,
			})}
		/>
	);
}
