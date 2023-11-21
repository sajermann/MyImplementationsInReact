import ReactSwitch from 'react-switch';
import { tv } from 'tailwind-variants';

const switchVariants = tv({
	slots: {
		inputPropsInternal: [
			'group outline-none focus:ring-1',
			'transition-all duration-500',
		],
	},
	variants: {
		color: {
			primary: {
				inputPropsInternal: '',
			},
			error: {
				inputPropsInternal: '',
			},

			normal: {
				inputPropsInternal: '',
			},
		},
	},

	defaultVariants: {
		color: 'normal',
	},
});

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
	iserror?: boolean;
	className?: string;
};
export function Switch({
	onChangge,
	checked,
	offColor,
	onColor,
	checkedIcon,
	uncheckedIcon,
	id,
	checkedHandleIcon,
	uncheckedHandleIcon,
	onHandleColor,
	offHandleColor,
	iserror,
	className,
}: Props) {
	const { inputPropsInternal } = switchVariants({
		color: iserror ? 'error' : 'primary',
	});
	return (
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
			className={inputPropsInternal({
				class: className,
			})}
		/>
	);
}
