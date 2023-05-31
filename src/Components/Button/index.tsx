import {
	Button as ButtonSajermann,
	ISajermannReactButton,
} from '@sajermann/react-button';
import { memo } from 'react';
import { managerClassNames } from '~/Utils/ManagerClassNames';
import styles from './styles.module.css';

interface PropsV extends ISajermannReactButton {
	variant?: 'Default' | 'Outlined' | 'Option';
	colorStyle?: 'Primary' | 'Secondary' | 'Success' | 'Warning';
}

function verifyClasses({
	colorStyle = 'Primary',
	variant = 'Default',
	children,
}: PropsV) {
	const classesToReturn = [styles.btn, styles[colorStyle.toLowerCase()]];

	if (!children) {
		classesToReturn.push(styles.onlyIcon);
	}

	if (variant === 'Outlined') {
		classesToReturn.push(styles[`${colorStyle.toLowerCase()}Outlined`]);
	}

	if (variant === 'Option') {
		classesToReturn.push(styles[`${colorStyle.toLowerCase()}Outlined`]);
		classesToReturn.push(styles.option);
	}

	return classesToReturn.join(' ');
}

interface Props extends ISajermannReactButton {
	variant?: 'Default' | 'Outlined' | 'Option';
	colorStyle?: 'Primary' | 'Secondary' | 'Success' | 'Warning';
}

export const Button = memo(({ colorStyle, variant, ...props }: Props) => (
	<ButtonSajermann
		{...props}
		className={managerClassNames([
			{
				[verifyClasses({ colorStyle, variant, children: props.children })]:
					true,
			},

			{ [props.className as string]: props.className },
		])}
	/>
));
