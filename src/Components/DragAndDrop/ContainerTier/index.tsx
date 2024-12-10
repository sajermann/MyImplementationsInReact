import { Fragment } from 'react';
import { rectSortingStrategy, SortableContext } from '@dnd-kit/sortable';
import { TBrawler } from '~/Types/TBrawler';
import { AvatarBrawler } from '../BrawlStars/AvatarBrawler';
import { Draggable } from '../Draggable';
import { Droppable } from '../Droppable';
import { TTier } from '../Types';

type TContainerTierProps = {
	items: TBrawler[];
	tierDescription: TTier;
};
export function ContainerTier({ items, tierDescription }: TContainerTierProps) {
	if (tierDescription === 'R') {
		return null;
	}
	return (
		<div className="flex last:border-b">
			<div className="border border-r-0 border-b-0 w-10 h-auto flex items-center justify-center">
				{tierDescription}
			</div>

			<SortableContext
				id={tierDescription}
				items={items}
				strategy={rectSortingStrategy}
			>
				<Droppable
					items={items}
					id={tierDescription}
					className="border border-b-0 w-full min-h-[7rem] flex p-2 gap-2 flex-wrap"
				>
					{items.map(item => (
						<Fragment key={item.id}>
							<Draggable
								id={String(item.id)}
								data={{ item, from: tierDescription }}
								isSortable
							>
								<AvatarBrawler {...item} />
							</Draggable>
						</Fragment>
					))}
				</Droppable>
			</SortableContext>
		</div>
	);
}
