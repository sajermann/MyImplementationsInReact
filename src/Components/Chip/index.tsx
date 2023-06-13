/* eslint-disable jsx-a11y/no-autofocus */
import {
	ChangeEvent,
	Dispatch,
	SetStateAction,
	useState,
	KeyboardEvent,
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

type ChangeProps = {
	event: ChangeEvent<HTMLInputElement>;
	setValueEditing: Dispatch<SetStateAction<string>>;
};

function change({ event, setValueEditing }: ChangeProps) {
	const { value } = event.target;
	if (value === ',') {
		return;
	}
	setValueEditing(value);
}

type KeyDownProps = {
	event: KeyboardEvent<HTMLInputElement>;
	setValueEditing: Dispatch<SetStateAction<string>>;
};
function keyDown(event: KeyboardEvent<HTMLInputElement>) {
	if (event.key === ',' || event.key === 'Enter') {
		event.preventDefault();
		console.log('aqui');
	}
}

interface ChipProps {
	value: string;
	onRemove?: (id: string) => void;

	onChange?: (oldValue: string, newValue: string) => void;
}

export function Chip({ value, onRemove, onChange }: ChipProps) {
	const [editing, setEditing] = useState(false);
	const [valueEditing, setValueEditing] = useState(value);

	// criar funcao pra virgula ou enter ssalvar a edicao, e esc para cancelar

	if (editing) {
		return (
			<div className="w-1 h-12 box-content">
				<div className="relative w-min min-w-[1em]">
					<span className="invisible whitespace-pre p-2 h-12">
						{editing ? valueEditing : value}
					</span>
					<input
						autoFocus
						className="bg-slate-400 text-white outline-none p-2 absolute left-0 w-full rounded h-12"
						value={editing ? valueEditing : value}
						onChange={event => change({ event, setValueEditing })}
						onKeyDown={keyDown}
						onBlur={() =>
							saveEditing({ value, valueEditing, setEditing, onChange })
						}
					/>
				</div>
			</div>
		);
	}

	return (
		<div
			className={managerClassNames([
				{ 'flex items-center gap-2 w-max h-12': true },
				{ 'bg-slate-400 p-2 rounded text-white': true },
				{ 'hover:cursor-default': !onChange },
				{ 'hover:cursor-pointer': onChange },
				{ invisible: editing },
			])}
			role="button"
			tabIndex={0}
			onKeyDown={() => {
				if (onChange) setEditing(true);
			}}
			onClick={() => {
				if (onChange) setEditing(true);
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
