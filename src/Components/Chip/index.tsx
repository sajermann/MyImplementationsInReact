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
import { ActionButton } from './ActionButton';

const chipsVariants = tv({
	slots: {
		chipUpdatingContainer: [
			'relative w-min min-w-[1em] flex items-center pr-2',
		],
		chipUpdatingDescription: ['invisible whitespace-pre p-2 h-12'],
		chipUpdatingInput: ['outline-none p-2 absolute left-0 w-full rounded h-12'],
		chipNoUpdating: ['flex items-center gap-2 w-max h-12', 'p-2 rounded '],
	},
	variants: {
		color: {
			primary: {
				chipUpdatingContainer: [],
				chipUpdatingDescription: [],
				chipUpdatingInput: ['bg-blue-500 text-white border border-blue-500'],
				chipNoUpdating: [`bg-blue-500 text-white border border-blue-500`],
			},
			secondary: {
				chipUpdatingContainer: [],
				chipUpdatingDescription: [],
				chipUpdatingInput: ['bg-red-500 text-white border border-red-500'],
				chipNoUpdating: [`bg-red-500 text-white border border-red-500`],
			},
			success: {
				chipUpdatingContainer: [],
				chipUpdatingDescription: [],
				chipUpdatingInput: ['bg-green-500 text-white border border-green-500'],
				chipNoUpdating: [`bg-green-500 text-white border border-green-500`],
			},
			warning: {
				chipUpdatingContainer: [],
				chipUpdatingDescription: [],
				chipUpdatingInput: [
					'bg-yellow-500 text-white border border-yellow-500',
				],
				chipNoUpdating: [`bg-yellow-500 text-white border border-yellow-500`],
			},
			mono: {
				chipUpdatingContainer: [],
				chipUpdatingDescription: [],
				chipUpdatingInput: [
					'bg-black border border-black text-white dark:bg-white dark:text-black dark:border-white',
				],
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
				chipUpdatingInput: [`bg-transparent`],
				chipNoUpdating: [`bg-transparent`],
			},
			option: {
				chipUpdatingContainer: [],
				chipUpdatingDescription: [],
				chipUpdatingInput: [`bg-transparent border-0`],
				chipNoUpdating: [`bg-transparent border-0`],
			},
		},
	},
	compoundSlots: [
		{
			slots: ['chipNoUpdating', 'chipUpdatingInput'],
			color: 'primary',
			variant: ['outlined', 'option'],
			className: 'text-blue-500',
		},
		{
			slots: ['chipNoUpdating', 'chipUpdatingInput'],
			color: 'secondary',
			variant: ['outlined', 'option'],
			className: 'text-red-500',
		},
		{
			slots: ['chipNoUpdating', 'chipUpdatingInput'],
			color: 'success',
			variant: ['outlined', 'option'],
			className: 'text-green-500',
		},
		{
			slots: ['chipNoUpdating', 'chipUpdatingInput'],
			color: 'warning',
			variant: ['outlined', 'option'],
			className: 'text-yellow-500',
		},
		{
			slots: ['chipNoUpdating', 'chipUpdatingInput'],
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

export type ColorStyle =
	| 'primary'
	| 'secondary'
	| 'success'
	| 'warning'
	| 'mono';
export type Variant = 'default' | 'outlined' | 'option';
export type ChipProps = {
	value: string;
	onRemove?: (id: string) => void;
	onChange?: (oldValue: string, newValue: string) => void;
	variant?: Variant;
	colorStyle?: ColorStyle;
};

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
				<ActionButton icon="checked" show={!!onRemove} />
			</div>
		);
	}

	return (
		<div
			{...rest}
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

			<ActionButton
				icon="close"
				show={!!onRemove}
				onClick={() => onRemove?.(value)}
			/>
		</div>
	);
}
