import { CSS } from '@dnd-kit/utilities';
import { useDraggable } from '@dnd-kit/core';
import { ReactNode } from 'react';

type Props = {
	id: string;
	children: ReactNode;
	data: object;
};
export function Draggable({ id, children, data }: Props) {
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
