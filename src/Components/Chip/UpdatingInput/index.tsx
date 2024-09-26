/* eslint-disable jsx-a11y/no-autofocus */
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { tv } from 'tailwind-variants';
import { ColorStyle, Variant } from '../types';

const inputVariants = tv({
	slots: {
		chipUpdatingInput: ['outline-none p-2 absolute left-0 w-full rounded h-12'],
	},
	variants: {
		colorStyle: {
			primary: {
				chipUpdatingInput: ['bg-blue-500 text-white border border-blue-500'],
			},
			secondary: {
				chipUpdatingInput: ['bg-red-500 text-white border border-red-500'],
			},
			success: {
				chipUpdatingInput: ['bg-green-500 text-white border border-green-500'],
			},
			warning: {
				chipUpdatingInput: [
					'bg-yellow-500 text-white border border-yellow-500',
				],
			},
			mono: {
				chipUpdatingInput: [
					'bg-black border border-black text-white dark:bg-white dark:text-black dark:border-white',
				],
			},
		},
		variant: {
			default: {
				chipUpdatingInput: [],
			},
			outlined: {
				chipUpdatingInput: [`bg-transparent`],
			},
			option: {
				chipUpdatingInput: [`bg-transparent border-0`],
			},
		},
	},
	compoundSlots: [
		{
			slots: ['chipUpdatingInput'],
			colorStyle: 'primary',
			variant: ['outlined', 'option'],
			className: 'text-blue-500',
		},
		{
			slots: ['chipUpdatingInput'],
			colorStyle: 'secondary',
			variant: ['outlined', 'option'],
			className: 'text-red-500',
		},
		{
			slots: ['chipUpdatingInput'],
			colorStyle: 'success',
			variant: ['outlined', 'option'],
			className: 'text-green-500',
		},
		{
			slots: ['chipUpdatingInput'],
			colorStyle: 'warning',
			variant: ['outlined', 'option'],
			className: 'text-yellow-500',
		},
		{
			slots: ['chipUpdatingInput'],
			colorStyle: 'mono',
			variant: ['outlined', 'option'],
			className: 'text-black dark:text-white dark:bg-transparent',
		},
	],

	defaultVariants: {
		colorStyle: 'primary',
		variant: 'default',
	},
});

type UpdatingInputProps = DetailedHTMLProps<
	InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
> & {
	variant?: Variant;
	colorStyle?: ColorStyle;
};

export function UpdatingInput({
	variant,
	colorStyle,
	className,
	...rest
}: UpdatingInputProps) {
	const { chipUpdatingInput } = inputVariants({
		colorStyle,
		variant,
	});
	return (
		<input {...rest} autoFocus className={chipUpdatingInput({ className })} />
	);
}
