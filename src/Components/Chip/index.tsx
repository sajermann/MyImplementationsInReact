/* eslint-disable react/button-has-type */

interface ChipProps {
	value: string;
	id: string;
	onRemove?: (id: string) => void;
}

function Chip({ value, id, onRemove }: ChipProps) {
	return (
		<div className="flex justify-between items-center gap-2 rounded-2xl bg-gray-600 py-1 px-4 w-fit text-white">
			{value}
			{onRemove && <button onClick={() => onRemove(id)}>X</button>}
		</div>
	);
}

export default Chip;
