import { useState } from 'react';
import { DndContext, DragEndEvent, DragStartEvent } from '@dnd-kit/core';
import { makeData } from '~/Utils/MakeData';
import { useTranslation } from '~/Hooks/UseTranslation';
import { TBrawler } from '~/Types/TBrawler';
import { isEmpty } from '~/Utils/IsEmpty';
import { Draggable } from '../Draggable';
import { AvatarBrawler } from './AvatarBrawler';
import { Droppable } from '../Droppable';

type SaveProps = {
	data: TBrawler;
	fromId: string;
	toId: string;
};

type TTier = 'S' | 'A' | 'B' | 'C';
type TBrawlerByTier = {
	S: Array<TBrawler>;
	A: Array<TBrawler>;
	B: Array<TBrawler>;
	C: Array<TBrawler>;
};

export function BrawlStar() {
	const { translate } = useTranslation();
	const [items, setItems] = useState(makeData.brawlers());
	const [brawlersByTier, setBrawlersByTier] = useState<TBrawlerByTier>({
		S: [],
		A: [],
		B: [],
		C: [],
	});

	function save({ data, toId, fromId }: SaveProps) {
		console.log({ data, toId, fromId });
		if (isEmpty(data as object) || toId === fromId) return;

		const brawlerOld = { ...brawlersByTier };
		brawlerOld[toId as TTier] = [...brawlerOld[toId as TTier], data];
		if (fromId === 'origin') {
			setItems(prev => prev.filter(item => item.name !== data.name));
		} else {
			brawlerOld[fromId as TTier] = brawlerOld[fromId as TTier].filter(
				item => item.name !== data.name
			);
		}
		setBrawlersByTier({ ...brawlerOld });
	}

	function handleDragStart(event: DragStartEvent) {
		console.log('Start', event);
	}

	function handleDragEnd(event: DragEndEvent) {
		console.log('End', event);
		const to = event?.collisions?.at(0);
		if (!to) return;
		const toId = to.id as string;
		const data = event.active.data.current as TBrawler;
		const { fromId } = JSON.parse(event.active.id as string);
		if (isEmpty(data)) return;
		save({ data, fromId, toId });
	}

	return (
		<DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
			<h1>Brawlers</h1>
			{items.length > 0 && (
				<div className="border p-2 w-full flex items-center justify-center gap-2 flex-wrap">
					{items.map(item => (
						<Draggable
							key={item.name}
							id={JSON.stringify({ itemId: item.name, fromId: 'origin' })}
							data={{ ...item }}
						>
							<AvatarBrawler key={item.name} {...item} />
						</Draggable>
					))}
				</div>
			)}

			<div className="flex flex-col">
				<h1>{translate('MY_TIER_BRAWL_STARS')}</h1>
				{Object.keys(brawlersByTier).map(tierDescription => (
					<div key={tierDescription} className="flex last:border-b">
						<span className="border border-b-0 border-r-0 w-10 h-full flex items-center justify-center">
							{tierDescription}
						</span>
						<Droppable
							id={tierDescription}
							onDropCustom={save}
							className="border border-b-0 w-full min-h-[7rem] flex p-2 gap-2 flex-wrap"
							disableDropByKey
							disableCountdown
						>
							{brawlersByTier[tierDescription as TTier].map(subItem => (
								<Draggable
									key={subItem.name}
									id={JSON.stringify({
										itemId: subItem.name,
										fromId: tierDescription,
									})}
									data={{ ...subItem }}
								>
									<AvatarBrawler key={subItem.name} {...subItem} />
								</Draggable>
							))}
						</Droppable>
					</div>
				))}
			</div>
		</DndContext>
	);
}
