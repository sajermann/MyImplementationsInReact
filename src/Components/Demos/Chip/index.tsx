import { Dispatch, SetStateAction, useState } from 'react';
import { Chip } from '~/Components/Chip';

function handleRemoveChip(
	chipToDelete: string,
	setChips: Dispatch<SetStateAction<string[]>>
) {
	setChips(oldChip => oldChip.filter(item => item !== chipToDelete));
}

function handleUpdateChip(
	oldValue: string,
	newValue: string,
	setChips: Dispatch<SetStateAction<string[]>>
) {
	setChips(prev =>
		prev.map(item => {
			if (item === oldValue) {
				return newValue;
			}
			return item;
		})
	);
}

export function ChipDemo() {
	const [chips, setChips] = useState<string[]>(['React', 'Typescript']);

	return (
		<div className="flex gap-2 flex-wrap">
			{chips.map(item => (
				<Chip
					key={item}
					value={item}
					onRemove={e => handleRemoveChip(e, setChips)}
					onChange={(oldValue, newValue) =>
						handleUpdateChip(oldValue, newValue, setChips)
					}
				/>
			))}
		</div>
	);
}
