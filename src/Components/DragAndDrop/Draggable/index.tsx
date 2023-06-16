import { CSS } from '@dnd-kit/utilities';
import { useDraggable } from '@dnd-kit/core';
import { ReactNode } from 'react';
import { TTechnology } from '~/Types/TTechnology';

type Props = {
	id: string;
	children: ReactNode;
	technologies: TTechnology;
};
export function Draggable({ id, children, technologies }: Props) {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id,
		data: technologies,
	});
	const style = transform
		? {
				transform: CSS.Translate.toString(transform),
		  }
		: undefined;

	return (
		<button
			type="button"
			className="p-2 border m-2 rounded"
			ref={setNodeRef}
			style={style}
			{...listeners}
			{...attributes}
		>
			{children}
		</button>
	);
}
