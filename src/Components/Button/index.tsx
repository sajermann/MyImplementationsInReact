import {
	Button as ButtonSajermann,
	ISajermannReactButton,
} from '@sajermann/react-button';
import { memo } from 'react';
import styles from './styles.module.css';

interface Props extends ISajermannReactButton {
	variant?: 'Default' | 'Outlined' | 'Option';
	colorStyle?: 'Primary' | 'Secondary' | 'Success' | 'Warning';
}

export const Button = memo(({ colorStyle, variant, ...props }: Props) => {
	function verifyClasses() {
		const classesToReturn = [styles.btn];

		if (!props.children) {
			classesToReturn.push(styles.onlyIcon);
		}

		if (colorStyle === 'Primary' || colorStyle === undefined) {
			classesToReturn.push(styles.primary);
			if (variant === 'Outlined') {
				classesToReturn.push(styles.primaryOutlined);
			}
			if (variant === 'Option') {
				classesToReturn.push(styles.primaryOutlined);
				classesToReturn.push(styles.option);
			}
		}

		if (colorStyle === 'Secondary') {
			classesToReturn.push(styles.secondary);
			if (variant === 'Outlined') {
				classesToReturn.push(styles.secondaryOutlined);
			}
			if (variant === 'Option') {
				classesToReturn.push(styles.secondaryOutlined);
				classesToReturn.push(styles.option);
			}
		}

		if (colorStyle === 'Success') {
			classesToReturn.push(styles.success);
			if (variant === 'Outlined') {
				classesToReturn.push(styles.successOutlined);
			}
			if (variant === 'Option') {
				classesToReturn.push(styles.successOutlined);
				classesToReturn.push(styles.option);
			}
		}

		if (colorStyle === 'Warning') {
			classesToReturn.push(styles.warning);
			if (variant === 'Outlined') {
				classesToReturn.push(styles.warningOutlined);
			}
			if (variant === 'Option') {
				classesToReturn.push(styles.warningOutlined);
				classesToReturn.push(styles.option);
			}
		}

		return classesToReturn.join(' ');
	}

	return (
		<ButtonSajermann
			{...props}
			className={`${verifyClasses()} ${props.className}`}
		/>
	);
});
