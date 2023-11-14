import * as CheckboxRadix from '@radix-ui/react-checkbox';
import {
	DetailedHTMLProps,
	forwardRef,
	HTMLAttributes,
	MouseEvent,
	Ref,
	useCallback,
	useState,
} from 'react';
import { managerClassNames } from '~/Utils/ManagerClassNames';

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
	id?: string;
	onCheckedChange?: (data: {
		target: { value: boolean | 'indeterminate'; id: string | undefined };
	}) => void;
	className?: string;
}

type TContainer = DetailedHTMLProps<
	HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
>;
export const Container = forwardRef<HTMLDivElement, TContainer>(
	({ className, ...rest }, ref) => (
		<div
			ref={ref}
			{...rest}
			className={managerClassNames([
				{ 'p-1 w-full h-full flex items-center justify-center': true },
				{ [className as string]: className },
			])}
		/>
	)
);

export function Checkbox({
	checked,
	onClick,
	defaultChecked,
	onCheckedChange,
	id,
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
		<CheckboxRadix.Root
			ref={ref as unknown as Ref<HTMLButtonElement> | undefined}
			onClick={onClick}
			checked={checked}
			defaultChecked={defaultChecked}
			onCheckedChange={handleCheckedChange}
			className={managerClassNames([
				{ 'rounded h-11 w-11 bg-white': true },
				{ 'disabled:cursor-not-allowed disabled:!opacity-50': true },
				{ 'outline-none focus:ring-1 focus:ring-blue-500': true },
				{ 'group-hover:border-blue-500 focus:border-blue-500': true },
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
	);
}
