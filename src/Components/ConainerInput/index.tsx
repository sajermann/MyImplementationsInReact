import {
	DetailedHTMLProps,
	HTMLAttributes,
	InputHTMLAttributes,
	LabelHTMLAttributes,
} from 'react';

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
	function classContainer() {
		if (containerProps?.className) {
			return `flex flex-col w-full items-center ${containerProps?.className}`;
		}
		return `flex flex-col w-full items-center`;
	}

	function extractorIdChildren(child: React.ReactNode): string | undefined {
		const { props } = child as { props: { id: string } };
		return props.id || '';
	}

	return (
		<div {...containerProps} className={classContainer()}>
			{label && (
				<label
					htmlFor={extractorIdChildren(children)}
					{...labelProps}
					className={`mb-2 ${
						labelProps?.className ? labelProps?.className : ''
					}`}
				>
					{label}
				</label>
			)}
			{children}
		</div>
	);
}
