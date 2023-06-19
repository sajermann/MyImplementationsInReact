import { Dispatch, SetStateAction, useState } from 'react';
import { DndContext, DragEndEvent, DragStartEvent } from '@dnd-kit/core';
import { makeData } from '~/Utils/MakeData';
import { TTechnology } from '~/Types/TTechnology';
import { useTranslation } from '~/Hooks/UseTranslation';
import { Draggable } from './Draggable';
import { Droppable } from './Droppable';

const TIERS = ['S', 'A', 'B', 'C'];

export function DragAndDrop() {
	const { translate } = useTranslation();
	const [items] = useState(makeData.brawlers());
	const [sadTecnologies, setSadTecnologies] = useState<TTechnology[]>([]);
	const [happyTecnologies, setHappyTecnologies] = useState<TTechnology[]>([]);
	function handleDragStart(event: DragStartEvent) {
		console.log('Start', event);
	}

	type PropsSave = {
		itemToAdd: TTechnology;
		states: TTechnology[];
		setStates: Dispatch<SetStateAction<TTechnology[]>>;
	};
	function save({ itemToAdd, states, setStates }: PropsSave) {
		if (states.find(item => item.id === itemToAdd.id)) return;

		setStates(prev => [...prev, { ...itemToAdd }]);
	}

	function handleDragEnd(event: DragEndEvent) {
		console.log('End', event);
		const tech = event.active.data.current as TTechnology;
		if (event.over && event.over.id === 'sad') {
			save({
				itemToAdd: tech,
				states: sadTecnologies,
				setStates: setSadTecnologies,
			});
		}

		if (event.over && event.over.id === 'happy') {
			save({
				itemToAdd: tech,
				states: happyTecnologies,
				setStates: setHappyTecnologies,
			});
		}
	}

	return (
		<DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
			<div className="border p-2 w-full items-center justify-center">
				{items.map(item => (
					<Draggable key={item.name} id={item.name} data={{ ...item }}>
						<div className="w-max flex flex-col items-center justify-center">
							<img
								src={item.image}
								alt={item.name}
								className="rounded-full w-10"
							/>
							<span className="font-bold">{item.name}</span>
						</div>
					</Draggable>
				))}
			</div>

			<div className="flex flex-col gap-2">
				<h1>{translate('MY_TIER_BRAWL_STARS')}</h1>
				{TIERS.map(item => (
					<div key={item} className="flex">
						<span className="border w-10 h-full flex items-center justify-center">
							{item}
						</span>
						<Droppable
							id={item}
							technologies={sadTecnologies}
							setTechnologies={setSadTecnologies}
							onSave={save}
						/>
					</div>
				))}
			</div>
		</DndContext>
	);
}
