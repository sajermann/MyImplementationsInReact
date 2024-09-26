import { ChangeEvent, Dispatch, SetStateAction, KeyboardEvent } from 'react';

type SaveEditingProps = {
	value: string;
	valueEditing: string;
	onChange?: (oldValue: string, newValue: string) => void;
	setEditing: Dispatch<SetStateAction<boolean>>;
};
function save({ onChange, setEditing, value, valueEditing }: SaveEditingProps) {
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
		save({ value, valueEditing, setEditing, onChange });
	}
}

export const chipUtils = {
	save,
	change,
	keyDownInput,
};
