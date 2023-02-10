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
import { ContainerInput } from '../ConainerInput';

import { Icons } from '../Icons';

interface Props
	extends Omit<
		React.ForwardRefExoticComponent<
			CheckboxRadix.CheckboxProps & React.RefAttributes<HTMLButtonElement>
		>,
		'checked' | 'defaultChecked' | '$$typeof' | 'onClick' | 'id'
	> {
	disabled?: boolean;
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

	function verifyClass() {
		const classes = [
			'rounded h-5 w-5 border-[1px] bg-white border-black disabled:cursor-not-allowed disabled:!opacity-50',
		];

		if (situation === 'checked' || situation === 'indeterminate') {
			classes.push('!bg-primary-500');
		}

		return classes.join(' ');
	}

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
				className={verifyClass()}
				id={id}
				{...rest}
			>
				<CheckboxRadix.Indicator>
					{situation === 'indeterminate' && (
						<Container>
							<Icons.Indeterminate color="#fff" />
						</Container>
					)}
					{situation === 'checked' && (
						<Container>
							<Icons.Checked color="#fff" />
						</Container>
					)}
				</CheckboxRadix.Indicator>
			</CheckboxRadix.Root>
		</ContainerInput>
	);
}
