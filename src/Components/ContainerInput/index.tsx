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
				{ [props?.className as string]: props?.className },
				{ 'group flex flex-col gap-1 w-full': true },
			])}
		/>
	)
);

export { ContainerInput };

// Aplicar o tailwind slots aqui pq as classes que vem das props nao sao respeitadas
