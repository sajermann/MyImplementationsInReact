import { CSSProperties, Dispatch, SetStateAction } from 'react';
import {
	DragDropContext,
	Droppable,
	Draggable,
	DropResult,
	DraggingStyle,
	NotDraggingStyle,
} from 'react-beautiful-dnd';

type Item = { id: string; content: string };

type Props = {
	items: Item[];
	setItems: Dispatch<SetStateAction<Item[]>>;
};

export function BeautifulDnd({ items, setItems }: Props) {
	function reorder(list: Item[], startIndex: number, endIndex: number) {
		const result = Array.from(list);
		const [removed] = result.splice(startIndex, 1);
		result.splice(endIndex, 0, removed);
		return result;
	}

	const grid = 8;

	const getItemStyle = (
		isDragging: boolean,
		draggableStyle?: DraggingStyle | NotDraggingStyle
	) =>
		({
			// some basic styles to make the items look a bit nicer
			userSelect: 'none',
			padding: grid * 2,
			margin: `0 ${grid}px 0 0`,

			// change background colour if dragging
			background: isDragging ? 'lightgreen' : 'grey',

			// styles we need to apply on draggables
			...draggableStyle,
		} as CSSProperties);

	const getListStyle = (isDraggingOver: boolean) => ({
		background: isDraggingOver ? 'lightblue' : 'lightgrey',
		display: 'flex',
		padding: grid,
		overflow: 'auto',
	});

	function onDragEnd(result: DropResult) {
		// dropped outside the list
		if (!result.destination) {
			return;
		}

		const itemsOrdered = reorder(
			items,
			result.source.index,
			result.destination.index
		);

		setItems(itemsOrdered);
	}

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Droppable droppableId="droppable" direction="horizontal">
				{(providedExternal, snapshotExternal) => (
					<div
						{...providedExternal.droppableProps}
						ref={providedExternal.innerRef}
						style={getListStyle(snapshotExternal.isDraggingOver)}
					>
						{items.map((item, index) => (
							<Draggable key={item.id} draggableId={item.id} index={index}>
								{(provided, snapshot) => (
									<div
										ref={provided.innerRef}
										{...provided.draggableProps}
										{...provided.dragHandleProps}
										style={getItemStyle(
											snapshot.isDragging,
											provided.draggableProps.style
										)}
									>
										{item.content}
									</div>
								)}
							</Draggable>
						))}
						{providedExternal.placeholder}
					</div>
				)}
			</Droppable>
		</DragDropContext>
	);
}
