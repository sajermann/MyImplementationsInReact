/* eslint-disable jsx-a11y/control-has-associated-label */
import { CSS } from '@dnd-kit/utilities';
import { useDraggable } from '@dnd-kit/core';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { managerClassNames } from '~/Utils/ManagerClassNames';
import { useSortable } from '@dnd-kit/sortable';

type TProps = {
	id: string;
	data: object;
	isSortable?: boolean;
};

function useMyDnd({ id, data, isSortable }: TProps) {
	if (isSortable) {
		return useSortable({ id, data });
	}
	return useDraggable({ id, data });
}

type Props = DetailedHTMLProps<
	ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
> &
	TProps;
export function Draggable({ id, data, isSortable, ...rest }: Props) {
	const {
		transform,
		setNodeRef,
		listeners,
		attributes,
		isDragging,
		...thinks
	} = useMyDnd({
		id,
		data,
		isSortable,
	});

	const styleDraggable = transform
		? {
				transform: CSS.Translate.toString(transform),
			}
		: undefined;

	const styleSortable = {
		transform: CSS.Transform.toString(transform),
		transition: (thinks as { transition: string }).transition,
	};

	return (
		<button
			type="button"
			ref={setNodeRef}
			style={isSortable ? styleSortable : styleDraggable}
			{...listeners}
			{...attributes}
			{...rest}
			className={managerClassNames([
				'z-10',
				{ 'opacity-100': !isDragging },
				{ 'opacity-0': isDragging },
				{ [rest.className as string]: rest.className },
			])}
		/>
	);
}
