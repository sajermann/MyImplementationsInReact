import { DragEndEvent } from '@dnd-kit/core';
import { TBrawler } from '~/Types/TBrawler';
import { isEmpty } from '~/Utils/IsEmpty';
import { TBrawlerByTier, TTier } from '../Types';

type TSaveProps = {
	data: TBrawler;
	fromId: string;
	toId: string;
};

type TSavePropsNew = TSaveProps & {
	brawlersByTier: {
		S: Array<TBrawler>;
		A: Array<TBrawler>;
		B: Array<TBrawler>;
		C: Array<TBrawler>;
	};
	onSaveItems: (
		data: TBrawler[] | ((prevState: TBrawler[]) => TBrawler[]),
	) => void;
	onSaveBrawersByTier: (
		data: TBrawlerByTier | ((prevState: TBrawlerByTier) => TBrawlerByTier),
	) => void;
};

type THandleDragEndProps = {
	event: DragEndEvent;
	onSave: (data: { data: TBrawler; fromId: any; toId: TTier }) => void;
};

export function handleDragEnd({ onSave, event }: THandleDragEndProps) {
	console.log('End', event, event.active.id);
	const to = event?.collisions?.at(0);
	if (!to) return;
	const toId = to.id as TTier;
	const data = event.active.data.current as TBrawler;
	const { fromId } = JSON.parse(event.active.id as string);
	if (isEmpty(data)) return;
	onSave({ data, fromId, toId });
}

export function save({
	data,
	toId,
	fromId,
	brawlersByTier,
	onSaveItems,
	onSaveBrawersByTier,
}: TSavePropsNew) {
	console.log({ data, toId, fromId });
	if (isEmpty(data as object) || toId === fromId) return;

	const brawlerOld = { ...brawlersByTier };
	brawlerOld[toId as TTier] = [...brawlerOld[toId as TTier], data];
	if (fromId === 'origin') {
		onSaveItems(prev => prev.filter(item => item.name !== data.name));
	} else {
		brawlerOld[fromId as TTier] = brawlerOld[fromId as TTier].filter(
			item => item.name !== data.name,
		);
	}
	onSaveBrawersByTier({ ...brawlerOld });
}
