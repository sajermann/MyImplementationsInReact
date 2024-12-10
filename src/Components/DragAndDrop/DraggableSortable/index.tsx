import { CSS } from '@dnd-kit/utilities';
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import { useSortable } from '@dnd-kit/sortable';

type Props = DetailedHTMLProps<
	ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
> & {
	id: string;
	children: ReactNode;
	data: object;
};
export function DraggableSortable({ id, children, data, ...rest }: Props) {
	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({ id });

	const style = {
		transform: CSS.Transform.toString(transform),
		transition: transition || undefined,
	};

	return (
		<button
			{...rest}
			type="button"
			ref={setNodeRef}
			style={style}
			className="truncate text-ellipsis"
			{...listeners}
			{...attributes}
		>
			{children}
		</button>
	);
}
