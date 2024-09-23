import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { forwardRef, ReactNode } from 'react';
import { tv } from 'tailwind-variants';

const radioVariants = tv({
	slots: {
		radioItemPropsInternal: [
			'group outline-none focus:ring-1 border',
			'transition-all duration-500',
			'hover:cursor-pointer bg-transparent w-11 h-11',
			'rounded-full focus:shadow-[0_0_0_2px]',
			'outline-none cursor-default',
			'disabled:cursor-not-allowed disabled:!opacity-50',
		],
		radioIndicatorPropsInternal: [
			'flex items-center justify-center w-full h-full',
			'transition-all duration-500',
			'after:w-6 after:h-6 after:rounded-full',
		],
	},
	variants: {
		color: {
			primary: {
				radioItemPropsInternal:
					'focus:ring-blue-500 focus:shadow-blue-500 group-hover:border-blue-500 focus:border-blue-500',
				radioIndicatorPropsInternal: 'after:bg-blue-500',
			},
			error: {
				radioItemPropsInternal:
					'focus:ring-red-500 focus:shadow-red-500 group-hover:border-red-500 focus:border-red-500',
				radioIndicatorPropsInternal: 'after:bg-red-500',
			},

			white: {
				radioItemPropsInternal:
					'focus:ring-white focus:shadow-white group-hover:border-white focus:border-white',
				radioIndicatorPropsInternal: 'after:bg-white',
			},

			black: {
				radioItemPropsInternal:
					'focus:ring-black focus:shadow-black group-hover:border-black focus:border-black',
				radioIndicatorPropsInternal: 'after:bg-black',
			},

			normal: {
				radioItemPropsInternal: '',
			},
		},
	},

	defaultVariants: {
		color: 'normal',
	},
});

type RadioGroupProps = {
	onValueChange?: (data: string) => void;
	children: ReactNode;
	className?: string;
	defaultValue?: string;
	value?: string | null;
};
export function RadioGroup({
	children,
	onValueChange,
	className,
	defaultValue,
	value,
}: RadioGroupProps) {
	return (
		<RadioGroupPrimitive.Root
			onValueChange={onValueChange}
			className={className}
			defaultValue={defaultValue}
			value={value as string | undefined}
		>
			{children}
		</RadioGroupPrimitive.Root>
	);
}

type Props = {
	colorStyle?: 'primary' | 'white' | 'black';
	id?: string;
	value: string;
	itemProps?: {
		className?: string;
	};
	indicatorProps?: {
		className?: string;
	};
	disabled?: boolean;
	iserror?: boolean;
};

export const RadioItem = forwardRef<HTMLButtonElement, Props>(
	(
		{
			id,
			value,
			itemProps,
			indicatorProps,
			disabled,
			iserror,
			colorStyle = 'primary',
		},
		ref,
	) => {
		const { radioItemPropsInternal, radioIndicatorPropsInternal } =
			radioVariants({
				color: iserror ? 'error' : colorStyle,
			});
		return (
			<RadioGroupPrimitive.Item
				ref={ref}
				id={id}
				value={value}
				className={radioItemPropsInternal({
					class: itemProps?.className,
				})}
				disabled={disabled}
			>
				<RadioGroupPrimitive.Indicator
					className={radioIndicatorPropsInternal({
						class: indicatorProps?.className,
					})}
				/>
			</RadioGroupPrimitive.Item>
		);
	},
);
