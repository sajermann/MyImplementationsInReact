import { Dispatch, SetStateAction, useState } from 'react';
import { DndContext, DragEndEvent, DragStartEvent } from '@dnd-kit/core';
import { makeData } from '~/Utils/MakeData';
import { TTechnology } from '~/Types/TTechnology';
import { Draggable } from './Draggable';
import { Droppable } from './Droppable';

export function DragAndDrop() {
	const [items] = useState(makeData.technologies());
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
			<div className="border p-2 max-w-sm">
				{items.map(item => (
					<Draggable key={item.id} id={item.id} technologies={{ ...item }}>
						{item.description}
					</Draggable>
				))}
			</div>

			<div className="flex gap-2">
				<div className="flex flex-col gap-2">
					<span>😥</span>
					<Droppable
						id="sad"
						technologies={sadTecnologies}
						setTechnologies={setSadTecnologies}
						onSave={save}
					/>
				</div>

				<div className="flex flex-col gap-2">
					<span>😀</span>
					<Droppable
						id="happy"
						technologies={happyTecnologies}
						setTechnologies={setHappyTecnologies}
						onSave={save}
					/>
				</div>
			</div>
		</DndContext>
	);
}
