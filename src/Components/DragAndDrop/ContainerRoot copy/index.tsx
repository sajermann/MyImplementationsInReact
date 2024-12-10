import { TBrawler } from '~/Types/TBrawler';
import { AvatarBrawler } from '../BrawlStars/AvatarBrawler';
import { DraggableNonSortable } from '../Draggable';

type TContainerRootProps = {
	items: TBrawler[];
};
export function ContainerRoot({ items }: TContainerRootProps) {
	if (!items.length) {
		return null;
	}
	return (
		<>
			<h1>Brawlers</h1>
			<div className="border p-2 w-full flex items-center justify-center gap-2 flex-wrap">
				{items.map(item => (
					<DraggableNonSortable
						key={item.id}
						className="bg-blue-500"
						id={String(item.id)}
						data={{ item, from: 'origin' }}
					>
						<AvatarBrawler {...item} />
					</DraggableNonSortable>
				))}
			</div>
		</>
	);
}
