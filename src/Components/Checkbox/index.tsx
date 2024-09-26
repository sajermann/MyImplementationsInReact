import * as CheckboxRadix from '@radix-ui/react-checkbox';
import {
	DetailedHTMLProps,
	forwardRef,
	HTMLAttributes,
	MouseEvent,
	ReactNode,
	Ref,
	useCallback,
	useState,
} from 'react';
import { tv } from 'tailwind-variants';
import { managerClassNames } from '~/Utils/ManagerClassNames';

import { Icons } from '../Icons';
import { handleCheckedChange, onClickInternal } from './Utils';

type PropsNode = {
	attributes: Record<string, { value: string }>;
};

interface Props
	extends Omit<
		React.ForwardRefExoticComponent<
			CheckboxRadix.CheckboxProps & React.RefAttributes<HTMLButtonElement>
		>,
		'checked' | 'defaultChecked' | '$$typeof' | 'onClick' | 'id'
	> {
	disabled?: boolean;
	checkedIcon?: ReactNode;
	indeterminateIcon?: ReactNode;
	checked?: boolean | 'indeterminate';
	defaultChecked?: boolean | 'indeterminate';
	onClick?: (e?: MouseEvent<HTMLButtonElement, Event>) => void;
	id?: string;
	onCheckedChange?: (data: {
		target: { value: boolean | 'indeterminate'; id: string | undefined };
	}) => void;
	className?: string;
	iserror?: boolean;
}

type TContainer = DetailedHTMLProps<
	HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
>;

const checkboxVariants = tv({
	slots: {
		checkboxPropsInternal: [
			'group outline-none focus:ring-1 border rounded h-11 w-11 bg-transparent',
			'transition-all duration-500',
			'disabled:cursor-not-allowed disabled:!opacity-50 focus:ring-1',
		],
	},
	variants: {
		color: {
			primary: {
				checkboxPropsInternal:
					'focus:ring-blue-500 group-hover:border-blue-500 focus:border-blue-500 data-[state="checked"]:border-blue-500 data-[state="indeterminate"]:border-blue-500',
			},
			error: {
				checkboxPropsInternal:
					'focus:ring-red-500 group-hover:border-red-500 focus:border-red-500 data-[state="checked"]:border-red-500 data-[state="indeterminate"]:border-red-500',
			},

			normal: {
				checkboxPropsInternal: '',
			},
		},
	},

	defaultVariants: {
		color: 'normal',
	},
});

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
	),
);

export const Checkbox = forwardRef<HTMLButtonElement, Props>(
	(
		{
			checked,
			onClick,
			defaultChecked,
			onCheckedChange,
			id,
			checkedIcon,
			indeterminateIcon,
			className,
			iserror,
			...rest
		},
		ref,
	) => {
		const [situation, setSituation] = useState(() => {
			if (checked === true || defaultChecked === true) {
				return 'checked';
			}
			if (checked === 'indeterminate' || defaultChecked === 'indeterminate') {
				return 'indeterminate';
			}
			return 'unchecked';
		});
		const { checkboxPropsInternal } = checkboxVariants({
			color: iserror ? 'error' : 'primary',
		});

		const refInternal = useCallback((node: PropsNode) => {
			if (node !== null) {
				const { attributes } = node;
				setSituation(attributes['data-state'].value);
			}
		}, []);

		return (
			<CheckboxRadix.Root
				ref={
					ref || (refInternal as unknown as Ref<HTMLButtonElement> | undefined)
				}
				onClick={e => onClickInternal({ e, setSituation, onClick, ref })}
				checked={checked}
				defaultChecked={defaultChecked}
				onCheckedChange={e =>
					handleCheckedChange({
						e,
						id,
						onCheckedChange,
					})
				}
				className={checkboxPropsInternal({
					class: managerClassNames([
						{ [className as string]: className },
						{
							'bg-red-500':
								(situation === 'checked' || situation === 'indeterminate') &&
								iserror,
						},
						{
							'bg-primary-500':
								(situation === 'checked' || situation === 'indeterminate') &&
								!iserror,
						},
					]),
				})}
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
	},
);
