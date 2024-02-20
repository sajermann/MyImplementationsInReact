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

type KeyDownInputProps = {
	event: KeyboardEvent<HTMLInputElement>;
	value: string;
	valueEditing: string;
	setEditing: Dispatch<SetStateAction<boolean>>;
	onChange?: (oldValue: string, newValue: string) => void;
};
function keyDownInput({
	event,
	value,
	valueEditing,
	setEditing,
	onChange,
}: KeyDownInputProps) {
	const keysToVerify = [',', 'Enter', 'Escape', 'Tab'];
	if (keysToVerify.includes(event.key)) {
		event.preventDefault();
		saveEditing({ value, valueEditing, setEditing, onChange });
	}
}

type KeyDownButtonProps = {
	event: KeyboardEvent<HTMLDivElement>;
	value: string;
	setEditing: Dispatch<SetStateAction<boolean>>;
	onChange?: (oldValue: string, newValue: string) => void;
	onRemove?: (id: string) => void;
};

function keyDownButton({
	event,
	value,
	setEditing,
	onChange,
	onRemove,
}: KeyDownButtonProps) {
	const keysToVerify = [' ', 'Enter'];
	const { tagName } = (event as unknown as { target: { tagName: string } })
		.target;
	if (tagName === 'BUTTON' && keysToVerify.includes(event.key) && onRemove) {
		onRemove(value);
		return;
	}
	if (tagName === 'DIV' && keysToVerify.includes(event.key) && onChange) {
		setEditing(true);
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

	if (editing) {
		return (
			<div
				className={managerClassNames([
					{ 'relative w-min min-w-[1em] flex items-center': true },
					{ 'pr-2': !!onRemove },
				])}
			>
				<span className="invisible whitespace-pre p-2 h-12">
					{editing ? valueEditing : value}
				</span>
				<input
					autoFocus
					className="bg-dark-400 text-white outline-none p-2 absolute left-0 w-full rounded h-12 border"
					value={editing ? valueEditing : value}
					onChange={event => change({ event, setValueEditing })}
					onKeyDown={event =>
						keyDownInput({ event, setEditing, value, valueEditing, onChange })
					}
					onBlur={() =>
						saveEditing({ value, valueEditing, setEditing, onChange })
					}
				/>
				<ButtonRemove show={!!onRemove} />
			</div>
		);
	}

	return (
		<div
			className={managerClassNames([
				{ 'flex items-center gap-2 w-max h-12': true },
				{ 'bg-dark-400 p-2 rounded text-white': true },
				{ 'hover:cursor-default': !onChange },
				{ 'hover:cursor-pointer': onChange },
				{ invisible: editing },
			])}
			role="button"
			tabIndex={0}
			onClick={() => {
				if (onChange) setEditing(true);
			}}
			onKeyDown={event =>
				keyDownButton({
					event,
					setEditing,
					value,
					onChange,
					onRemove,
				})
			}
		>
			{!editing && <span>{value}</span>}

			<ButtonRemove show={!!onRemove} onClick={() => onRemove?.(value)} />
		</div>
	);
}
