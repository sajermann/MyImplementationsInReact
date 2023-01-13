/* eslint-disable react/button-has-type */
import { useEffect, useMemo, useRef, useState } from 'react';
import { Button as ButtonSajermann } from '@sajermann/react-button';
import styles from './styles.module.css';
import { Loading } from '../Loading';
import { FeedbackIcons } from '../FeedbackIcons';
import { generateGuid, createEffect } from '../utils';
import { useWindowSize } from '../utils/useWindowSize';

type PropsFeedBack = {
	loadingOptions: {
		isLoading: boolean;
		typeLoadingIcon?: 'Default' | 'Points';
		customIcon?: JSX.Element;
		fullIcon?: boolean;
	};
	successOptions?: {
		success: boolean;
		customIcon?: JSX.Element;
		fullIcon?: boolean;
	};
	failedOptions?: {
		failed: boolean;
		customIcon?: JSX.Element;
		fullIcon?: boolean;
	};
};

interface Props extends React.HTMLProps<HTMLButtonElement> {
	variant?: 'Default' | 'Outlined' | 'Option';
	colorStyle?: 'Primary' | 'Secondary' | 'Success' | 'Warning';
	type: 'button' | 'reset' | 'submit';
	startIcon?: JSX.Element;
	endIcon?: JSX.Element;
	withFeedback?: PropsFeedBack;
}

function Button({
	type,
	withFeedback,
	children,
	colorStyle,
	startIcon,
	endIcon,
	variant,
	...props
}: Props) {
	const { onClick } = props;
	const [isEllipsisActive, setIsEllipsisActive] = useState(false);
	const divRef = useRef<HTMLDivElement>(null);
	const size = useWindowSize();

	function verifyClasses() {
		const classesToReturn = [styles.btn];

		if (!children) {
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

	useEffect(() => {
		const element = divRef.current;

		setIsEllipsisActive(
			element
				? element.offsetWidth < element.scrollWidth ||
						element.offsetHeight < element.scrollHeight
				: false
		);
	}, [size]);

	const ID_BUTTON = 'effect_sajermann_ui_button';
	const ID = generateGuid();

	function verifyColorIcon(opacity?: number) {
		if (variant === 'Default' || variant === undefined) {
			return `rgba(255, 255, 255, ${opacity})`;
		}

		if (colorStyle === 'Primary' || colorStyle === undefined) {
			if (variant === 'Outlined' || variant === 'Option') {
				return `rgba(71, 111, 230, ${opacity})`;
			}
		}

		if (colorStyle === 'Secondary') {
			if (variant === 'Outlined' || variant === 'Option') {
				return `rgba(239, 68, 68, ${opacity})`;
			}
		}

		if (colorStyle === 'Success') {
			if (variant === 'Outlined' || variant === 'Option') {
				return `rgba(34, 197, 94, ${opacity})`;
			}
		}

		if (colorStyle === 'Warning') {
			if (variant === 'Outlined' || variant === 'Option') {
				return `rgba(234, 179, 8, ${opacity})`;
			}
		}

		return '';
	}

	function verifyEllipsis() {
		if (props.title) {
			return props.title;
		}
		if (isEllipsisActive && typeof children === 'string') {
			return children;
		}
		return '';
	}

	const buildLoading = useMemo(() => {
		if (
			withFeedback?.loadingOptions.isLoading &&
			!withFeedback?.loadingOptions.customIcon
		) {
			return (
				<Loading
					color={verifyColorIcon()}
					type={withFeedback.loadingOptions.typeLoadingIcon}
					data-testid="loadingIcon"
				/>
			);
		}

		if (
			withFeedback?.loadingOptions.isLoading &&
			withFeedback?.loadingOptions.customIcon
		) {
			return withFeedback.loadingOptions.customIcon;
		}
		return null;
	}, [withFeedback]);

	const buildFeedbackIcon = useMemo(() => {
		if (withFeedback?.loadingOptions.isLoading) {
			return null;
		}
		if (
			withFeedback?.successOptions?.success &&
			!withFeedback?.successOptions?.customIcon
		) {
			return <FeedbackIcons name="Success" color={verifyColorIcon()} />;
		}
		if (
			withFeedback?.successOptions?.success &&
			withFeedback?.successOptions?.customIcon
		) {
			return withFeedback?.successOptions?.customIcon;
		}
		if (
			withFeedback?.failedOptions?.failed &&
			!withFeedback?.failedOptions?.customIcon
		) {
			return <FeedbackIcons name="Failed" color={verifyColorIcon()} />;
		}
		if (
			withFeedback?.failedOptions?.failed &&
			withFeedback?.failedOptions?.customIcon
		) {
			return withFeedback?.failedOptions?.customIcon;
		}

		return null;
	}, [withFeedback]);

	const mainFeedback = useMemo(() => {
		if (
			withFeedback?.loadingOptions.isLoading ||
			withFeedback?.successOptions?.success ||
			withFeedback?.failedOptions?.failed
		) {
			return (
				<div className={styles.containerIcon}>
					{buildLoading}
					{buildFeedbackIcon}
				</div>
			);
		}
		return null;
	}, [withFeedback]);

	const buildStartIcon = useMemo(() => {
		if (startIcon) {
			return <div className={styles.containerIcon}>{startIcon}</div>;
		}
		return null;
	}, [startIcon]);

	const buildChildren = useMemo(() => {
		if (!children) {
			return null;
		}
		if (
			withFeedback?.loadingOptions.fullIcon &&
			withFeedback?.loadingOptions.isLoading
		) {
			return null;
		}
		if (
			withFeedback?.successOptions?.fullIcon &&
			withFeedback?.successOptions.success
		) {
			return null;
		}
		if (
			withFeedback?.failedOptions?.fullIcon &&
			withFeedback?.failedOptions.failed
		) {
			return null;
		}
		return (
			<div className={styles.text} ref={divRef} title={verifyEllipsis()}>
				{children}
			</div>
		);
	}, [withFeedback, children, isEllipsisActive]);

	const buildEndIcon = useMemo(() => {
		if (
			endIcon &&
			!withFeedback?.loadingOptions.isLoading &&
			!withFeedback?.successOptions?.success &&
			!withFeedback?.failedOptions?.failed
		) {
			return <div className={styles.containerIcon}>{endIcon}</div>;
		}
		return null;
	}, [endIcon, withFeedback]);

	return (
		<ButtonSajermann
			{...props}
			className={`${verifyClasses()} ${props.className}`}
		>
			{children}
		</ButtonSajermann>
		// <button
		// 	{...props}
		// 	onClick={event =>
		// 		createEffect({
		// 			event,
		// 			ID_BUTTON,
		// 			ID,
		// 			variant,
		// 			verifyColorIcon,
		// 			onClick,
		// 		})
		// 	}
		// 	type={type}
		// 	className={`${verifyClasses()} ${props.className}`}
		// >
		// 	<div className={styles.internal}>
		// 		{buildStartIcon}
		// 		{buildChildren}
		// 		{mainFeedback}
		// 		{buildEndIcon}
		// 	</div>
		// </button>
	);
}

export { Button };
