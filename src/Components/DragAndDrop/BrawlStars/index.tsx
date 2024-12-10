/* eslint-disable no-nested-ternary */
import { useCallback, useState } from 'react';
import {
	DndContext,
	DragEndEvent,
	DragOverEvent,
	DragOverlay,
	DragStartEvent,
	KeyboardSensor,
	MeasuringStrategy,
	MouseSensor,
	TouchSensor,
	UniqueIdentifier,
	useSensor,
	useSensors,
} from '@dnd-kit/core';
import { makeData } from '~/Utils/MakeData';
import { useTranslation } from '~/Hooks/UseTranslation';
import { arrayMove } from '@dnd-kit/sortable';
import { TBrawler } from '~/Types/TBrawler';
import { createPortal } from 'react-dom';
import { TBrawlerByTier, TTier } from '../Types';
import { ContainerRoot } from '../ContainerRoot';
import { ContainerTier } from '../ContainerTier';
import { coordinateGetter } from '../Utils';
import { AvatarBrawler } from './AvatarBrawler';

export function BrawlStar() {
	const { translate } = useTranslation();
	const [items, setItems] = useState<TBrawlerByTier>({
		R: makeData.brawlers(),
		S: [],
		A: [],
		B: [],
		C: [],
	});
	const [clonedItems, setClonedItems] = useState<TBrawlerByTier | null>(null);
	const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
	const sensors = useSensors(
		useSensor(MouseSensor),
		useSensor(TouchSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter,
		}),
	);

	const findTier = useCallback(
		(id: string) => {
			if (id in items) {
				return id as TTier;
			}
			const tiers = Object.keys(items);
			const containerId = tiers.find(key => {
				const brawlersTier = items[key as TTier].map(item => item.id);
				return brawlersTier.includes(id);
			});

			return containerId as TTier;
		},
		[items],
	);

	const handleDragEnd = useCallback(
		(event: DragEndEvent) => {
			const { active, over } = event;
			const itemActiveId = active?.id;
			const overId = over?.id;
			const activeTier = findTier(String(itemActiveId));
			const overTier = findTier(String(overId));
			if (
				!activeTier ||
				!overTier ||
				activeTier !== overTier ||
				itemActiveId === overId
			) {
				setActiveId(null);
				return;
			}
			const activeIndex = items[activeTier]
				.map(a => a.id)
				.indexOf(String(itemActiveId));
			const overIndex = items[overTier].map(a => a.id).indexOf(String(overId));

			if (activeIndex !== overIndex) {
				setItems(prev => ({
					...prev,
					[overTier]:
						overTier === 'R'
							? arrayMove(prev[overTier], activeIndex, overIndex).sort(
									(a, b) => Number(b.id) - Number(a.id),
								)
							: arrayMove(prev[overTier], activeIndex, overIndex),
				}));
			}

			setActiveId(null);
		},
		[items, setItems],
	);

	const handleDragOver = useCallback(
		(event: DragOverEvent) => {
			const { active, over } = event;
			const itemActiveId = active?.id as TTier;
			const overId = over?.id as TTier;

			const activeTier = findTier(itemActiveId);
			const overTier = findTier(overId);

			if (!overTier || !activeTier || activeTier === overTier) {
				return;
			}

			setItems(prev => {
				const activeItems = prev[activeTier];
				const overItems = prev[overTier];

				// Find the indexes for the items
				const activeIndex = activeItems.map(a => a.id).indexOf(itemActiveId);
				const overIndex = overItems.map(a => a.id).indexOf(overId);

				let newIndex;
				if (overId in prev) {
					// We're at the root droppable of a container
					newIndex = overItems.length + 1;
				} else {
					const isBelowOverItem =
						over &&
						active.rect.current.translated &&
						active.rect.current.translated.top >
							over.rect.top + over.rect.height;

					const modifier = isBelowOverItem ? 1 : 0;

					newIndex =
						overIndex >= 0 ? overIndex + modifier : overItems.length + 1;
				}

				const result = {
					...prev,
					[activeTier]: prev[activeTier].filter(item => item.id !== active.id),
					[overTier]: [
						...prev[overTier].slice(0, newIndex),
						items[activeTier][activeIndex],
						...prev[overTier].slice(newIndex, prev[overTier].length),
					],
				};
				if (overTier === 'R') {
					return {
						...result,
						R: result.R.sort((a, b) => Number(b.id) - Number(a.id)),
					};
				}
				return result;
			});
		},
		[items, setItems],
	);

	const handleDragCancel = () => {
		if (clonedItems) {
			setItems(clonedItems);
		}

		setActiveId(null);
		setClonedItems(null);
	};

	const handleDragStart = ({ active }: DragStartEvent) => {
		setActiveId(active.id);
		setClonedItems(items);
	};

	const activeItem = () => {
		if (!activeId) {
			return null;
		}
		const tier = findTier(activeId as string);
		return items[tier].find(item => item.id === activeId);
	};

	return (
		<DndContext
			sensors={sensors}
			onDragStart={handleDragStart}
			onDragEnd={handleDragEnd}
			onDragOver={handleDragOver}
			onDragCancel={handleDragCancel}
			measuring={{
				droppable: {
					strategy: MeasuringStrategy.Always,
				},
			}}
		>
			<div>
				<h1>Brawlers</h1>
				<ContainerRoot items={items.R} />
			</div>

			<div>
				<h1>{translate('MY_TIER_BRAWL_STARS')}</h1>
				{Object.keys(items).map(tierDescription => (
					<ContainerTier
						key={tierDescription}
						items={items[tierDescription as TTier]}
						tierDescription={tierDescription as TTier}
					/>
				))}
			</div>

			{createPortal(
				<DragOverlay
					dropAnimation={{
						duration: 500,
					}}
					className="cursor-grabbing"
				>
					<AvatarBrawler {...(activeItem() as TBrawler)} />
				</DragOverlay>,
				document.body,
			)}
		</DndContext>
	);
}
