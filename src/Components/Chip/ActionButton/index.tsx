import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { tv } from 'tailwind-variants';
import { Icons } from '~/Components/Icons';
import { showInDevelopment } from '~/Utils/ShowInDevelopment';
import { ColorStyle, Variant } from '..';

const actionButtonVariants = tv({
	slots: {
		buttonStyles: ['h-3 w-3 z-[1]'],
	},
	variants: {
		color: {
			primary: {
				buttonStyles: [`text-white`],
			},
			secondary: {
				buttonStyles: [`text-white`],
			},
			success: {
				buttonStyles: [`text-white`],
			},
			warning: {
				buttonStyles: [`text-white`],
			},
			mono: {
				buttonStyles: [`text-black`],
			},
		},
		variant: {
			default: {
				buttonStyles: [],
			},
			outlined: {
				buttonStyles: [],
			},
			option: {
				buttonStyles: [],
			},
		},
	},
	compoundSlots: [
		{
			slots: ['buttonStyles'],
			color: 'primary',
			variant: ['outlined', 'option'],
			className: 'text-blue-500',
		},
		{
			slots: ['buttonStyles'],
			color: 'secondary',
			variant: ['outlined', 'option'],
			className: 'text-red-500',
		},
		{
			slots: ['buttonStyles'],
			color: 'success',
			variant: ['outlined', 'option'],
			className: 'text-green-500',
		},
		{
			slots: ['buttonStyles'],
			color: 'warning',
			variant: ['outlined', 'option'],
			className: 'text-yellow-500',
		},
		{
			slots: ['buttonStyles'],
			color: 'mono',
			variant: ['outlined', 'option'],
			className: '',
		},
	],

	defaultVariants: {
		color: 'primary',
		variant: 'default',
	},
});

type Props = DetailedHTMLProps<
	ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
> & {
	show: boolean;
	icon: 'checked' | 'close';
	variant?: Variant;
	colorStyle?: ColorStyle;
};
export function ActionButton({
	onClick,
	show,
	icon,
	variant,
	colorStyle,
}: Props) {
	const { buttonStyles } = actionButtonVariants({
		variant,
		color: colorStyle,
	});
	if (!show) return null;
	return (
		<button
			{...showInDevelopment({ 'data-testid': 'remove-button' })}
			type="button"
			className={buttonStyles()}
			onClick={onClick}
		>
			<Icons nameIcon={icon} />
		</button>
	);
}
