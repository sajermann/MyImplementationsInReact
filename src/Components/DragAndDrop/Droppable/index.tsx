import { useDroppable } from '@dnd-kit/core';
import { TTechnology } from '~/Types/TTechnology';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { Dispatch, SetStateAction, useEffect } from 'react';

const handleKeyUp = (
	event: KeyboardEvent,
	isHoverMouse: boolean,
	saveData: () => void
) => {
	const allowKeys = ['Control', 'Enter'];
	if (allowKeys.includes(event.key) && isHoverMouse) {
		saveData();
	}
};

type PropsSave = {
	itemToAdd: TTechnology;
	states: TTechnology[];
	setStates: Dispatch<SetStateAction<TTechnology[]>>;
};

type Props = {
	id: string;
	technologies: TTechnology[];
	setTechnologies: Dispatch<SetStateAction<TTechnology[]>>;
	onSave?: (data: PropsSave) => void;
};
export function Droppable({
	id,
	technologies,
	onSave,
	setTechnologies,
}: Props) {
	const { isOver, setNodeRef, active } = useDroppable({
		id,
	});

	const saveData = () => {
		const itemToAddTemp = active?.data.current as TTechnology | undefined;
		if (!itemToAddTemp || !onSave) return;
		onSave({
			itemToAdd: itemToAddTemp,
			states: technologies,
			setStates: setTechnologies,
		});
	};

	const itemExists = technologies.find(item => item.id === active?.id);

	useEffect(() => {
		const t = (e: KeyboardEvent) => handleKeyUp(e, isOver, saveData);
		window.addEventListener('keyup', t);
		return () => {
			window.removeEventListener('keyup', t);
		};
	}, [isOver]);

	return (
		<div ref={setNodeRef} className="border w-52 h-52 p-1">
			{isOver && !itemExists && (
				<div className="relative">
					<div className="absolute top-0 right-0">
						<CountdownCircleTimer
							size={24}
							strokeWidth={4}
							isPlaying
							duration={10}
							trailColor="rgba(0, 0, 0, 0)"
							colors={['#A2E6AD', '#A2E6AD']}
							colorsTime={[3, 0]}
							onComplete={saveData}
						/>
					</div>
				</div>
			)}
			{technologies.map(item => (
				<div
					key={item.id}
					id={`${id}-${item.id}`}
					// technologies={{ ...item }}
				>
					{item.description}
				</div>
			))}
		</div>
	);
}
