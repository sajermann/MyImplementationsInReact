/* eslint-disable jsx-a11y/label-has-associated-control */
import * as CheckboxRadix from '@radix-ui/react-checkbox';
import {
	DetailedHTMLProps,
	HTMLAttributes,
	LabelHTMLAttributes,
	MouseEvent,
	Ref,
	useCallback,
	useState,
} from 'react';
import { managerClassNames } from '~/Utils/ManagerClassNames';
import { ContainerInput } from '../ContainerInput';

import { Icons } from '../Icons';

interface Props
	extends Omit<
		React.ForwardRefExoticComponent<
			CheckboxRadix.CheckboxProps & React.RefAttributes<HTMLButtonElement>
		>,
		'checked' | 'defaultChecked' | '$$typeof' | 'onClick' | 'id'
	> {
	disabled?: boolean;
	checkedIcon?: JSX.Element;
	indeterminateIcon?: JSX.Element;
	checked?: boolean | 'indeterminate';
	defaultChecked?: boolean | 'indeterminate';
	onClick?: (e?: MouseEvent<HTMLButtonElement, Event>) => void;
	labelProps?: DetailedHTMLProps<
		LabelHTMLAttributes<HTMLLabelElement>,
		HTMLLabelElement
	>;
	label?: string;
	id?: string;
	onCheckedChange?: (data: {
		target: { value: boolean | 'indeterminate'; id: string | undefined };
	}) => void;

	containerProps?: DetailedHTMLProps<
		HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	>;
	className?: string;
}

function Container({ children }: { children: React.ReactNode }) {
	return (
		<div className="p-1 w-full h-full flex items-center justify-center">
			{children}
		</div>
	);
}

export function Checkbox({
	checked,
	onClick,
	defaultChecked,
	labelProps,
	onCheckedChange,
	label,
	id,
	containerProps,
	checkedIcon,
	indeterminateIcon,
	className,
	...rest
}: Props) {
	const [situation, setSituation] = useState(() => {
		if (checked === true || defaultChecked === true) {
			return 'checked';
		}
		if (checked === 'indeterminate' || defaultChecked === 'indeterminate') {
			return 'indeterminate';
		}
		return 'unchecked';
	});

	type PropsNode = {
		attributes: Record<string, { value: string }>;
	};

	const ref = useCallback((node: PropsNode) => {
		if (node !== null) {
			const { attributes } = node;
			setSituation(attributes['data-state'].value);
		}
	}, []);

	function handleCheckedChange(e: boolean | 'indeterminate') {
		const result = {
			target: {
				value: e,
				id,
			},
		};
		if (onCheckedChange) {
			onCheckedChange(result);
		}
	}

	return (
		<ContainerInput
			containerProps={containerProps}
			label={label}
			labelProps={labelProps}
			id={id}
		>
			<CheckboxRadix.Root
				ref={ref as unknown as Ref<HTMLButtonElement> | undefined}
				onClick={onClick}
				checked={checked}
				defaultChecked={defaultChecked}
				onCheckedChange={handleCheckedChange}
				className={managerClassNames([
					{ 'rounded h-7 w-7 border-[1px] bg-white border-black': true },
					{ 'disabled:cursor-not-allowed disabled:!opacity-50': true },
					{
						'!bg-primary-500':
							situation === 'checked' || situation === 'indeterminate',
					},
					{ [className as string]: className },
				])}
				id={id}
				{...rest}
			>
				<CheckboxRadix.Indicator>
					{situation === 'indeterminate' && (
						<Container>
							{indeterminateIcon || (
								<Icons nameIcon="indeterminate" color="#fff" />
							)}
						</Container>
					)}
					{situation === 'checked' && (
						<Container>
							{checkedIcon || <Icons nameIcon="checked" color="#fff" />}
						</Container>
					)}
				</CheckboxRadix.Indicator>
			</CheckboxRadix.Root>
		</ContainerInput>
	);
}
