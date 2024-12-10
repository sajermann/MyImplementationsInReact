import { useDroppable } from '@dnd-kit/core';
import { DetailedHTMLProps, HTMLAttributes, useMemo } from 'react';
import { TBrawler } from '~/Types/TBrawler';
import { managerClassNames } from '~/Utils/ManagerClassNames';
import { showInDevelopment } from '~/Utils/ShowInDevelopment';

type TDroppableProps = DetailedHTMLProps<
	HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
> & {
	id: string;
	items: TBrawler[];
};
export function Droppable({ id, items, ...rest }: TDroppableProps) {
	const { over, active, setNodeRef } = useDroppable({ id });

	const isOver = useMemo(() => {
		const activeId = active?.id;
		if (!items.length || !activeId) {
			return false;
		}
		const t = items.find(item => item.id === activeId);
		return t !== undefined;
	}, [active, over]);

	return (
		<div
			{...rest}
			ref={setNodeRef}
			data-droppableid={`droppable-${id}`}
			{...showInDevelopment({
				'data-testid': `droppable-${id}`,
			})}
			{...rest}
			className={managerClassNames([
				{ [rest.className as string]: rest.className },
				{ 'bg-green-300 transition-colors duration-500': isOver },
			])}
		/>
	);
}
