import { DetailedHTMLProps, HTMLAttributes, LabelHTMLAttributes } from 'react';
import ReactSwitch from 'react-switch';
import { ContainerInput } from '../ContainerInput';

type Props = {
	onChangge: (data: boolean) => void;
	checked: boolean;
	onColor?: string;
	offColor?: string;
	onHandleColor?: string;
	offHandleColor?: string;
	checkedIcon?: JSX.Element;
	uncheckedIcon?: JSX.Element;
	checkedHandleIcon?: JSX.Element;
	uncheckedHandleIcon?: JSX.Element;
	id?: string;
	label?: string;
	containerProps?: DetailedHTMLProps<
		HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	>;
	labelProps?: DetailedHTMLProps<
		LabelHTMLAttributes<HTMLLabelElement>,
		HTMLLabelElement
	>;
};
export function Switch({
	onChangge,
	checked,
	offColor,
	onColor,
	checkedIcon,
	uncheckedIcon,
	id,
	label,
	containerProps,
	labelProps,
	checkedHandleIcon,
	uncheckedHandleIcon,
	onHandleColor,
	offHandleColor,
}: Props) {
	return (
		<ContainerInput
			containerProps={containerProps}
			label={label}
			labelProps={labelProps}
			id={id}
		>
			<ReactSwitch
				id={id}
				onChange={onChangge}
				checked={checked}
				uncheckedIcon={uncheckedIcon || false}
				checkedHandleIcon={checkedHandleIcon}
				uncheckedHandleIcon={uncheckedHandleIcon}
				checkedIcon={checkedIcon || false}
				onColor={onColor || '#A0C40E'}
				offColor={offColor || '#DF2E38'}
				onHandleColor={onHandleColor}
				offHandleColor={offHandleColor}
			/>
		</ContainerInput>
	);
}
