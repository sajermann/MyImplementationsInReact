import {
	DetailedHTMLProps,
	HTMLAttributes,
	InputHTMLAttributes,
	LabelHTMLAttributes,
} from 'react';
import { managerClassNames } from '~/Utils/ManagerClassNames';

interface Props
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	children: React.ReactNode;
	label?: string;
	customDefaultValue?: Date;
	labelProps?: DetailedHTMLProps<
		LabelHTMLAttributes<HTMLLabelElement>,
		HTMLLabelElement
	>;
	containerProps?: DetailedHTMLProps<
		HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	>;
}
export function ContainerInput({
	children,
	label,
	containerProps,
	labelProps,
}: Props) {
	function extractorIdChildren(child: React.ReactNode): string | undefined {
		const { props } = child as { props: { id: string } };
		return props.id || '';
	}

	return (
		<div
			{...containerProps}
			className={managerClassNames([
				{ 'flex flex-col w-full items-center gap-2': true },
				{ [containerProps?.className as string]: containerProps?.className },
			])}
		>
			{label && (
				<label
					htmlFor={extractorIdChildren(children)}
					{...labelProps}
					className={managerClassNames([
						{ [labelProps?.className as string]: labelProps?.className },
					])}
				>
					{label}
				</label>
			)}
			{children}
		</div>
	);
}
