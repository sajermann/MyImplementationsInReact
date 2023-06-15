import { Dispatch, SetStateAction, useState } from 'react';
import { Chip } from '~/Components/Chip';

function handleRemoveChip(
	chipToRemove: string,
	setChips: Dispatch<SetStateAction<string[]>>
) {
	setChips(prev => prev.filter(item => item !== chipToRemove));
}

function handleUpdateChip(
	oldValue: string,
	newValue: string,
	setChips: Dispatch<SetStateAction<string[]>>
) {
	setChips(prev => {
		const t = prev.map(item => {
			if (item === oldValue) {
				return newValue;
			}
			return item;
		});

		return t;
	});
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
