import { CSS } from '@dnd-kit/utilities';
import { useDraggable } from '@dnd-kit/core';
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

type Props = DetailedHTMLProps<
	ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
> & {
	id: string;
	children: ReactNode;
	data: object;
};
export function Draggable({ id, children, data, ...rest }: Props) {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id,
		data,
	});
	const style = transform
		? {
				transform: CSS.Translate.toString(transform),
		  }
		: undefined;

	return (
		<button
			{...rest}
			type="button"
			ref={setNodeRef}
			style={style}
			{...listeners}
			{...attributes}
		>
			{children}
		</button>
	);
}
