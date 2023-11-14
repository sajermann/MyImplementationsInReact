import { DetailedHTMLProps, forwardRef, HTMLAttributes } from 'react';
import { managerClassNames } from '~/Utils/ManagerClassNames';

type TContainerInput = DetailedHTMLProps<
	HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
>;
const ContainerInput = forwardRef<HTMLDivElement, TContainerInput>(
	(props, ref) => (
		<div
			{...props}
			ref={ref}
			className={managerClassNames([
				{ 'group flex flex-col gap-1 w-full': true },
				{ [props?.className as string]: props?.className },
			])}
		/>
	)
);

export { ContainerInput };
