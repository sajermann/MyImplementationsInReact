/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { CSS } from '@dnd-kit/utilities';
import {
	DndContext,
	DragOverlay,
	useDraggable,
	useDroppable,
} from '@dnd-kit/core';

function Draggable({ id, children }: any) {
	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id,
	});
	const style = transform
		? {
				transform: CSS.Translate.toString(transform),
		  }
		: undefined;

	return (
		<button
			className="p-2 border m-2"
			ref={setNodeRef}
			style={style}
			{...listeners}
			{...attributes}
		>
			{children}
		</button>
	);
}

function Droppable({ id, children }: any) {
	const { isOver, setNodeRef, node, active } = useDroppable({
		id,
	});

	const saveData = () => {
		console.log('Salvou');
	};

	return (
		<div ref={setNodeRef} className="border w-52 h-52">
			{isOver && (
				<div className="w-12">
					<CountdownCircleTimer
						size={24}
						strokeWidth={4}
						isPlaying
						duration={3}
						colors={['#A30000', '#A30000']}
						colorsTime={[3, 2]}
						onComplete={saveData}
					/>
				</div>
			)}
			{children}
		</div>
	);
}
export function DragAndDrop() {
	const [isDropped, setIsDropped] = useState(false);
	const [activeId, setActiveId] = useState(null);
	const [items, setItems] = useState([
		{ id: 'react', content: 'React' },
		{ id: 'javascript', content: 'Javascript' },
		{ id: 'typescript', content: 'Typescript' },
		{ id: 'csharp', content: 'C#' },
		{ id: 'tailwind', content: 'Tailwind' },
		{ id: 'java', content: 'Java' },
		{ id: 'node', content: 'Node' },
	]);
	function handleDragStart(event: any) {
		console.log('Start', event);
		setActiveId(event.active.id);
	}
	function handleDragEnd(event: any) {
		console.log('End', event);
		if (event.over && event.over.id === 'droppable') {
			setIsDropped(true);
		}
		setActiveId(null);
	}

	return (
		<DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
			<div className="border p-2 max-w-sm">
				{items.map(item => (
					<Draggable key={item.id} id={item.id}>
						{item.content}
					</Draggable>
				))}
			</div>

			<div className="flex gap-2">
				<div className="flex flex-col gap-2">
					<span>dia 15/06</span>
					<Droppable id="15/06" />
				</div>

				<div className="flex flex-col gap-2">
					<span>dia 16/06</span>
					<Droppable id="16/06" />
				</div>
			</div>
			{/* <DragOverlay>{activeId ? <div>{activeId}</div> : null}</DragOverlay> */}
		</DndContext>
	);
}
