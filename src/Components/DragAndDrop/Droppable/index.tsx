import { useDroppable } from '@dnd-kit/core';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { DetailedHTMLProps, HTMLAttributes, ReactNode, useEffect } from 'react';
import { isEmpty } from '~/Utils/IsEmpty';
import { managerClassNames } from '~/Utils/ManagerClassNames';
import { handleKeyUpDroppable } from '../Utils';

type TOnDropCustomProps<T> = {
	data: T;
	fromId: string;
	toId: string;
};

type Props<T> = DetailedHTMLProps<
	HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
> & {
	id: string;
	onDropCustom: ({ data, fromId, toId }: TOnDropCustomProps<T>) => void;
	children: ReactNode;
	disableCountdown?: boolean;
	disableDropByKey?: boolean;
};
export function Droppable<T>({
	id,
	onDropCustom,
	children,
	disableCountdown,
	disableDropByKey,
	...rest
}: Props<T>) {
	const { isOver, setNodeRef, active } = useDroppable({ id });

	const data = active?.data.current as T;
	const { fromId } = JSON.parse((active?.id as string) || '{}');

	useEffect(() => {
		if (disableDropByKey)
			return () => {
				/* This is Intentional */
			};
		const t = (e: KeyboardEvent) =>
			handleKeyUpDroppable(e, isOver, () => {
				if (!data || !onDropCustom) return;
				onDropCustom({ data, toId: id, fromId });
			});
		window.addEventListener('keyup', t);
		return () => {
			window.removeEventListener('keyup', t);
		};
	}, [isOver]);

	return (
		<div
			{...rest}
			ref={setNodeRef}
			className={managerClassNames([
				{ [rest.className as string]: rest.className },
				{ 'bg-green-300 transition-colors duration-500': isOver },
			])}
			data-droppableid={`droppable-${id}`}
		>
			{children}
			{isOver &&
				!disableCountdown &&
				!isEmpty(data as object) &&
				fromId !== id && (
					<div className="absolute top-1 right-1">
						<CountdownCircleTimer
							size={24}
							strokeWidth={4}
							isPlaying
							duration={1}
							trailColor="rgba(0, 0, 0, 0)"
							colors={['#A2E6AD', '#A2E6AD']}
							colorsTime={[3, 0]}
							onComplete={() => {
								if (!data || !onDropCustom) return;
								onDropCustom({ data, toId: id, fromId });
							}}
						/>
					</div>
				)}
		</div>
	);
}
