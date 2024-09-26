import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import { tv } from 'tailwind-variants';
import { ColorStyle, Variant } from '../types';

const buttonVariants = tv({
	slots: {
		chipNoUpdating: ['flex items-center gap-2 w-max h-12 p-2 rounded'],
	},
	variants: {
		colorStyle: {
			primary: {
				chipNoUpdating: [`bg-blue-500 text-white border border-blue-500`],
			},
			secondary: {
				chipNoUpdating: [`bg-red-500 text-white border border-red-500`],
			},
			success: {
				chipNoUpdating: [`bg-green-500 text-white border border-green-500`],
			},
			warning: {
				chipNoUpdating: [`bg-yellow-500 text-white border border-yellow-500`],
			},
			mono: {
				chipNoUpdating: [
					'bg-black border border-black focus:ring-black text-white',
					'dark:bg-white dark:border-white dark:focus:ring-white dark:text-black',
				],
			},
		},
		variant: {
			default: {
				chipNoUpdating: [],
			},
			outlined: {
				chipNoUpdating: [`bg-transparent`],
			},
			option: {
				chipNoUpdating: [`bg-transparent border-0`],
			},
		},
	},
	compoundSlots: [
		{
			slots: ['chipNoUpdating'],
			colorStyle: 'primary',
			variant: ['outlined', 'option'],
			className: 'text-blue-500',
		},
		{
			slots: ['chipNoUpdating'],
			colorStyle: 'secondary',
			variant: ['outlined', 'option'],
			className: 'text-red-500',
		},
		{
			slots: ['chipNoUpdating'],
			colorStyle: 'success',
			variant: ['outlined', 'option'],
			className: 'text-green-500',
		},
		{
			slots: ['chipNoUpdating'],
			colorStyle: 'warning',
			variant: ['outlined', 'option'],
			className: 'text-yellow-500',
		},
		{
			slots: ['chipNoUpdating'],
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

type NoUpdatingContainerProps = DetailedHTMLProps<
	ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
> & {
	variant?: Variant;
	colorStyle?: ColorStyle;
	invisible?: boolean;
};

export function NoUpdatingContainer({
	variant,
	colorStyle,
	className,
	...rest
}: NoUpdatingContainerProps) {
	const { chipNoUpdating } = buttonVariants({
		colorStyle,
		variant,
	});
	return (
		<button
			{...rest}
			type="button"
			className={chipNoUpdating({
				className,
			})}
		/>
	);
}
