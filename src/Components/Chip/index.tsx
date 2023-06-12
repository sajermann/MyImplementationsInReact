/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */

import {
	Dispatch,
	LegacyRef,
	SetStateAction,
	useEffect,
	useRef,
	useState,
} from 'react';
import { managerClassNames } from '~/Utils/ManagerClassNames';
import { ButtonRemove } from './ButtonRemove';

type SaveEditingProps = {
	value: string;
	valueEditing: string;
	onChange?: (oldValue: string, newValue: string) => void;
	setEditing: Dispatch<SetStateAction<boolean>>;
};
function saveEditing({
	onChange,
	setEditing,
	value,
	valueEditing,
}: SaveEditingProps) {
	if (!onChange) return;
	onChange(value, valueEditing);
	setEditing(false);
}

interface ChipProps {
	value: string;
	onRemove?: (id: string) => void;

	onChange?: (oldValue: string, newValue: string) => void;
}

export function Chip({ value, onRemove, onChange }: ChipProps) {
	const [editing, setEditing] = useState(false);
	const [valueEditing, setValueEditing] = useState(value);
	const [lastClientWidthChip, setLastClientWidthChip] = useState(0);
	const refChip = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!onChange) return;
		const lastWidth = refChip?.current?.clientWidth;
		if (lastWidth) setLastClientWidthChip(lastWidth);

		console.log(refChip?.current?.clientWidth);
	}, [refChip.current]);

	console.log({ refChip });

	// criar funcao pra virgula ou enter ssalvar a edicao, e esc para cancelar

	if (editing) {
		return (
			<input
				style={{ width: lastClientWidthChip }}
				className="w-max border text-black p-1"
				value={editing ? valueEditing : value}
				onChange={e => setValueEditing(e.target.value)}
				onBlur={() =>
					saveEditing({ value, valueEditing, setEditing, onChange })
				}
			/>
		);
	}
	return (
		<div
			ref={refChip}
			className={managerClassNames([
				{ 'flex items-center gap-2 w-max': true },
				{ 'bg-slate-400 p-2 rounded text-white mx-1': true },
				{ 'hover:cursor-default': !onChange },
				{ 'hover:cursor-pointer': onChange },
			])}
			onClick={() => {
				if (onChange) {
					setEditing(true);
				}
			}}
		>
			<span>{value}</span>

			<ButtonRemove
				show={!!onRemove}
				onClick={() => onRemove && onRemove(value)}
			/>
		</div>
	);
}
