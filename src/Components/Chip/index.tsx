/* eslint-disable jsx-a11y/no-autofocus */
import {
	ChangeEvent,
	Dispatch,
	SetStateAction,
	useState,
	KeyboardEvent,
} from 'react';
import { tv } from 'tailwind-variants';
import { managerClassNames } from '~/Utils/ManagerClassNames';
import { ButtonRemove } from './ButtonRemove';

// { 'flex items-center gap-2 w-max h-12': true },
// { 'bg-dark-400 p-2 rounded text-white': true },
// { 'hover:cursor-default': !onChange },
// { 'hover:cursor-pointer': onChange },
// { invisible: editing },

const chipsVariants = tv({
	slots: {
		chipUpdatingContainer: [
			'relative w-min min-w-[1em] flex items-center pr-2',
		],
		chipUpdatingDescription: ['invisible whitespace-pre p-2 h-12'],
		chipUpdatingInput: [
			'bg-dark-400 text-white outline-none p-2 absolute left-0 w-full rounded h-12 border',
		],
		chipNoUpdating: ['flex items-center gap-2 w-max h-12', 'p-2 rounded '],
	},
	variants: {
		color: {
			primary: {
				chipUpdatingContainer: [],
				chipUpdatingDescription: [],
				chipUpdatingInput: [],
				chipNoUpdating: [`bg-blue-500 text-white border border-blue-500`],
			},
			secondary: {
				chipUpdatingContainer: [],
				chipUpdatingDescription: [],
				chipUpdatingInput: [],
				chipNoUpdating: [`bg-red-500 text-white border border-red-500`],
			},
			success: {
				chipUpdatingContainer: [],
				chipUpdatingDescription: [],
				chipUpdatingInput: [],
				chipNoUpdating: [`bg-green-500 text-white border border-green-500`],
			},
			warning: {
				chipUpdatingContainer: [],
				chipUpdatingDescription: [],
				chipUpdatingInput: [],
				chipNoUpdating: [`bg-yellow-500 text-white border border-yellow-500`],
			},
			mono: {
				chipUpdatingContainer: [],
				chipUpdatingDescription: [],
				chipUpdatingInput: [],
				chipNoUpdating: [
					'bg-black border border-black focus:ring-black text-white',
					'dark:bg-white dark:border-white dark:focus:ring-white dark:text-black',
				],
			},
		},
		variant: {
			default: {
				chipNoUpdating: [],
				chipUpdatingContainer: [],
				chipUpdatingDescription: [],
				chipUpdatingInput: [],
			},
			outlined: {
				chipUpdatingContainer: [],
				chipUpdatingDescription: [],
				chipUpdatingInput: [],
				chipNoUpdating: [`bg-transparent`],
			},
			option: {
				chipUpdatingContainer: [],
				chipUpdatingDescription: [],
				chipUpdatingInput: [],
				chipNoUpdating: [`bg-transparent border-0`],
			},
		},
	},
	compoundSlots: [
		{
			slots: ['chipNoUpdating'],
			color: 'primary',
			variant: ['outlined', 'option'],
			className: 'text-blue-500',
		},
		{
			slots: ['chipNoUpdating'],
			color: 'secondary',
			variant: ['outlined', 'option'],
			className: 'text-red-500',
		},
		{
			slots: ['chipNoUpdating'],
			color: 'success',
			variant: ['outlined', 'option'],
			className: 'text-green-500',
		},
		{
			slots: ['chipNoUpdating'],
			color: 'warning',
			variant: ['outlined', 'option'],
			className: 'text-yellow-500',
		},
		{
			slots: ['chipNoUpdating'],
			color: 'mono',
			variant: ['outlined', 'option'],
			className: 'text-black dark:text-white dark:bg-transparent',
		},
	],

	defaultVariants: {
		color: 'primary',
		variant: 'default',
	},
});

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
	variant?: 'default' | 'outlined' | 'option';
	colorStyle?: 'primary' | 'secondary' | 'success' | 'warning' | 'mono';
}

export function Chip({
	value,
	onRemove,
	onChange,
	colorStyle,
	variant,
	...rest
}: ChipProps) {
	const [editing, setEditing] = useState(false);
	const [valueEditing, setValueEditing] = useState(value);
	const {
		chipUpdatingContainer,
		chipUpdatingDescription,
		chipUpdatingInput,
		chipNoUpdating,
	} = chipsVariants({
		color: colorStyle,
		variant,
	});

	if (editing) {
		return (
			<div
				{...rest}
				className={chipUpdatingContainer({
					className: !onRemove && 'pr-2',
				})}
			>
				<span className={chipUpdatingDescription()}>
					{editing ? valueEditing : value}
				</span>
				<input
					autoFocus
					className={chipUpdatingInput()}
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
			{...rest}
			// className={managerClassNames([
			// 	{ 'flex items-center gap-2 w-max h-12': true },
			// 	{ 'bg-dark-400 p-2 rounded text-white': true },
			// 	{ 'hover:cursor-default': !onChange },
			// 	{ 'hover:cursor-pointer': onChange },
			// 	{ invisible: editing },
			// ])}
			className={chipNoUpdating({
				className: managerClassNames([
					{ 'hover:cursor-default': !onChange },
					{ 'hover:cursor-pointer': onChange },
					{ invisible: editing },
				]),
			})}
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
