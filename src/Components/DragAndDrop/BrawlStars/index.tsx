import { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
import { makeData } from '~/Utils/MakeData';
import { useTranslation } from '~/Hooks/UseTranslation';
import { TBrawler } from '~/Types/TBrawler';
import { Draggable } from '../Draggable';
import { AvatarBrawler } from './AvatarBrawler';
import { Droppable } from '../Droppable';
import { handleDragEnd, save } from '../Utils';
import { TBrawlerByTier, TTier } from '../Types';

export function BrawlStar() {
	const { translate } = useTranslation();
	const [items, setItems] = useState(makeData.brawlers());
	const [brawlersByTier, setBrawlersByTier] = useState<TBrawlerByTier>({
		S: [],
		A: [],
		B: [],
		C: [],
	});

	return (
		<DndContext
			onDragEnd={event =>
				handleDragEnd({
					event,
					onSave: data => {
						save({
							...data,
							brawlersByTier,
							onSaveBrawersByTier: setBrawlersByTier,
							onSaveItems: setItems,
						});
					},
				})
			}
		>
			<h1>Brawlers</h1>
			{items.length > 0 && (
				<div className="border p-2 w-full flex items-center justify-center gap-2 flex-wrap">
					{items.map(item => (
						<Draggable
							onKeyUp={console.log}
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
							onDropCustom={({ data, fromId, toId }) =>
								save({
									data: data as TBrawler,
									fromId,
									toId,
									brawlersByTier,
									onSaveBrawersByTier: setBrawlersByTier,
									onSaveItems: setItems,
								})
							}
							className="border border-b-0 w-full min-h-[7rem] flex p-2 gap-2 flex-wrap relative"
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
