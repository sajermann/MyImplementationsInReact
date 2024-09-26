import {
	ButtonHTMLAttributes,
	DetailedHTMLProps,
	HTMLAttributes,
	InputHTMLAttributes,
	useState,
} from 'react';
import { managerClassNames } from '~/Utils/ManagerClassNames';
import { ActionButton } from './ActionButton';
import { NoUpdatingContainer } from './NoUpdateContainer';
import { NoUpdatingDescription } from './NoUpdatingDescription';
import { ColorStyle, Variant } from './types';
import { UpdatingContainer } from './UpdatingContainer';
import { UpdatingDescription } from './UpdatingDescription';
import { UpdatingInput } from './UpdatingInput';
import { chipUtils } from './utils';

export type ChipProps = {
	value: string;
	onRemove?: (id: string) => void;
	onChange?: (oldValue: string, newValue: string) => void;
	variant?: Variant;
	colorStyle?: ColorStyle;
	noUpdatingContainerProps?: DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	>;
	noUpdatingDescriptionProps?: DetailedHTMLProps<
		HTMLAttributes<HTMLSpanElement>,
		HTMLSpanElement
	>;
	updatingContainerProps?: DetailedHTMLProps<
		HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	>;
	updatingDescriptionProps?: DetailedHTMLProps<
		HTMLAttributes<HTMLSpanElement>,
		HTMLSpanElement
	>;
	updatingInputProps?: DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	>;
	actionButtonProps?: DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	>;
};
export function Chip({
	value,
	onRemove,
	onChange,
	colorStyle,
	variant,
	noUpdatingContainerProps,
	updatingContainerProps,
	updatingDescriptionProps,
	updatingInputProps,
	noUpdatingDescriptionProps,
	actionButtonProps,
}: ChipProps) {
	const [updating, setUpdating] = useState(false);
	const [valueEditing, setValueEditing] = useState(value);

	if (updating) {
		return (
			<UpdatingContainer {...updatingContainerProps}>
				<UpdatingDescription
					{...updatingDescriptionProps}
					value={updating ? valueEditing : value}
				/>
				<UpdatingInput
					{...updatingInputProps}
					autoFocus
					colorStyle={colorStyle}
					variant={variant}
					value={updating ? valueEditing : value}
					onChange={event => chipUtils.change({ event, setValueEditing })}
					onKeyDown={event =>
						chipUtils.keyDownInput({
							event,
							setEditing: setUpdating,
							value,
							valueEditing,
							onChange,
						})
					}
					onBlur={() =>
						chipUtils.save({
							value,
							valueEditing,
							setEditing: setUpdating,
							onChange,
						})
					}
				/>
				<ActionButton
					{...actionButtonProps}
					colorStyle={colorStyle}
					variant={variant}
					icon="checked"
					show={!!onRemove}
				/>
			</UpdatingContainer>
		);
	}

	return (
		<NoUpdatingContainer
			{...noUpdatingContainerProps}
			className={managerClassNames([
				{ 'hover:cursor-default': !onChange },
				{ 'hover:cursor-pointer': onChange },
				{ invisible: updating },
				{
					[noUpdatingContainerProps?.className as string]:
						noUpdatingContainerProps?.className,
				},
			])}
			colorStyle={colorStyle}
			variant={variant}
			onClick={() => {
				if (onChange) setUpdating(true);
			}}
		>
			<NoUpdatingDescription {...noUpdatingDescriptionProps}>
				{value}
			</NoUpdatingDescription>

			<ActionButton
				{...actionButtonProps}
				colorStyle={colorStyle}
				variant={variant}
				icon="close"
				show={!!onRemove}
				onClick={() => onRemove?.(value)}
			/>
		</NoUpdatingContainer>
	);
}
