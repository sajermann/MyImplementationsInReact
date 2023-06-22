import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import {
	DetailedHTMLProps,
	HTMLAttributes,
	LabelHTMLAttributes,
	ReactNode,
} from 'react';
import { managerClassNames } from '~/Utils/ManagerClassNames';
import { ContainerInput } from '../ContainerInput';

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
	id?: string;
	value: string;
	labelProps?: DetailedHTMLProps<
		LabelHTMLAttributes<HTMLLabelElement>,
		HTMLLabelElement
	>;
	containerProps?: DetailedHTMLProps<
		HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	>;
	label?: string;
	itemProps?: {
		className?: string;
	};
	indicatorProps?: {
		className?: string;
	};
	disabled?: boolean;
};
export function RadioItem({
	id,
	value,
	labelProps,
	containerProps,
	itemProps,
	indicatorProps,
	label,
	disabled,
}: Props) {
	return (
		<ContainerInput
			containerProps={containerProps}
			label={label}
			labelProps={labelProps}
			id={id}
		>
			<RadioGroupPrimitive.Item
				id={id}
				value={value}
				className={managerClassNames([
					{ 'hover:cursor-pointer bg-white w-[25px] h-[25px]': true },
					{ 'rounded-full focus:shadow-[0_0_0_2px]': true },
					{ 'focus:shadow-primary-500 outline-none cursor-default': true },
					{ 'disabled:cursor-not-allowed disabled:!opacity-50': true },
					{ [itemProps?.className as string]: itemProps?.className },
				])}
				disabled={disabled}
			>
				<RadioGroupPrimitive.Indicator
					className={managerClassNames([
						{ 'flex items-center justify-center w-full h-full': true },
						{ 'after:w-[11px] after:h-[11px] after:rounded-full': true },
						{ 'after:bg-primary-500': true },
						{
							[indicatorProps?.className as string]: indicatorProps?.className,
						},
					])}
				/>
			</RadioGroupPrimitive.Item>
		</ContainerInput>
	);
}
