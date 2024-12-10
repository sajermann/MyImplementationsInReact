import { TBrawler } from '~/Types/TBrawler';
import { AvatarBrawler } from '../BrawlStars/AvatarBrawler';
import { Draggable } from '../Draggable';
import { Droppable } from '../Droppable';

type TContainerRootProps = {
	items: TBrawler[];
};
export function ContainerRoot({ items }: TContainerRootProps) {
	return (
		<Droppable id="R" items={items}>
			<div className="border p-2 w-full min-h-[7rem] flex items-center justify-center gap-2 flex-wrap">
				{items.map(item => (
					<Draggable
						key={item.id}
						id={String(item.id)}
						data={{ item, from: 'R' }}
					>
						<AvatarBrawler {...item} />
					</Draggable>
				))}
			</div>
		</Droppable>
	);
}
