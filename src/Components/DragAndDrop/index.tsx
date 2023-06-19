import { useState } from 'react';
import { DndContext, DragEndEvent, DragStartEvent } from '@dnd-kit/core';
import { makeData } from '~/Utils/MakeData';
import { useTranslation } from '~/Hooks/UseTranslation';
import { TBrawler } from '~/Types/TBrawler';
import { isEmpty } from '~/Utils/IsEmpty';
import { Draggable } from './Draggable';
import { Droppable } from './Droppable';
import { AvatarBrawler } from './AvatarBrawler';

type TTier = 'S' | 'A' | 'B' | 'C';
type TBrawlerByTier = {
	S: Array<TBrawler>;
	A: Array<TBrawler>;
	B: Array<TBrawler>;
	C: Array<TBrawler>;
};

export function DragAndDrop() {
	const { translate } = useTranslation();
	const [items, setItems] = useState(makeData.brawlers(5));
	const [brawlersByTier, setBrawlersByTier] = useState<TBrawlerByTier>({
		S: [],
		A: [],
		B: [],
		C: [],
	});
	function handleDragStart(event: DragStartEvent) {
		console.log('Start', event);
	}

	function save(dataToSave: TBrawler, containerDroppableId: string) {
		if (isEmpty(dataToSave)) return;
		setBrawlersByTier(prev => ({
			...prev,
			[containerDroppableId]: [
				...prev[containerDroppableId as TTier],
				dataToSave,
			],
		}));
		setItems(prev => prev.filter(item => item.name !== dataToSave.name));
	}

	function handleDragEnd(event: DragEndEvent) {
		console.log('End', event);
		const destiny = event?.collisions?.at(0);
		if (!destiny) return;
		const destinyId = destiny.id;
		const dataToSave = event.active.data.current as TBrawler;
		if (isEmpty(dataToSave)) return;
		console.log({ destinyId, dataToSave });
		setBrawlersByTier(prev => ({
			...prev,
			[destinyId]: [...prev[destinyId as TTier], dataToSave],
		}));
		setItems(prev => prev.filter(item => item.name !== dataToSave.name));
	}

	return (
		<DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
			<div className="border p-2 w-full flex items-center justify-center gap-2">
				{items.map(item => (
					<Draggable key={item.name} id={item.name} data={{ ...item }}>
						<AvatarBrawler key={item.name} {...item} />
					</Draggable>
				))}
				{items.length === 0 && <p>{translate('YOU_CLASSIFI_ALL')}</p>}
			</div>

			<div className="flex flex-col gap-2">
				<h1>{translate('MY_TIER_BRAWL_STARS')}</h1>
				{Object.keys(brawlersByTier).map(item => (
					<div key={item} className="flex">
						<span className="border w-10 h-full flex items-center justify-center">
							{item}
						</span>
						<Droppable
							id={item}
							onDropCustom={save}
							className="border w-full min-h-[7rem] flex gap-2 p-2"
							disableDropByKey
							disableCountdown
						>
							{brawlersByTier[item as TTier].map(subItem => (
								<AvatarBrawler key={subItem.name} {...subItem} />
							))}
						</Droppable>
					</div>
				))}
			</div>
		</DndContext>
	);
}
