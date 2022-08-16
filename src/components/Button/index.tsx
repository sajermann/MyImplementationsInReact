/* eslint-disable react/button-has-type */
import { useEffect, useMemo, useRef, useState } from 'react';
import styles from './styles.module.css';
import { Loading } from '../Loading';
import { FeedbackIcons } from '../FeedbackIcons';
import { delay, generateGuid } from '../utils';

type PropsFeedBack = {
	loadingOptions: {
		isLoading: boolean;
		typeLoadingIcon?: 'Default' | 'Points';
		customIcon?: JSX.Element;
		fullIcon?: boolean;
	};
	successOptions?: {
		success: boolean;
		setSuccess: (data: boolean) => void;
		customIcon?: JSX.Element;
		fullIcon?: boolean;
	};
	failedOptions?: {
		failed: boolean;
		setFailed: (data: boolean) => void;
		customIcon?: JSX.Element;
		fullIcon?: boolean;
	};
};

interface Props extends React.HTMLProps<HTMLButtonElement> {
	type: 'button' | 'reset' | 'submit';
	withFeedback?: PropsFeedBack;
	colorStyle?: 'Primary' | 'Secondary' | 'Success' | 'Warning';
	variant?: 'Default' | 'Outlined' | 'Option';
	startIcon?: JSX.Element;
	endIcon?: JSX.Element;
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
	}, []);

	const ID_BUTTON = 'effect_sajermann_ui_button';
	const ID = generateGuid();

	function insertCss() {
		const element = document.createElement('style');
		element.id = ID_BUTTON;
		element.innerHTML = `
		@keyframes forLight_${ID} {
			to {
				transform: scale(4);
				opacity: 0;
			}
		}
		`;
		const head = document.querySelector('head');
		if (head) {
			head.appendChild(element);
		}
	}

	function removeCss() {
		setTimeout(() => document.querySelector(`#${ID_BUTTON}`)?.remove(), 1000);
	}

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

	function createEffect(event: React.MouseEvent<HTMLButtonElement>) {
		const temp = event.target as HTMLElement;
		const { x: tempX, y: tempY } = temp.getBoundingClientRect();

		insertCss();
		const button = event.currentTarget;
		const circle = document.createElement('span');
		const diameter = Math.max(button.clientWidth, button.clientHeight);
		const radius = diameter / 2;

		// eslint-disable-next-line no-multi-assign
		circle.style.width = circle.style.height = `${diameter}px`;
		circle.style.left = `${
			(event.clientX || tempX) - button.offsetLeft - radius
		}px`;
		circle.style.top = `${
			(event.clientY || tempY) - button.offsetTop - radius
		}px`;
		circle.style.position = 'absolute';
		circle.style.borderRadius = '50%';
		circle.style.transform = 'scale(0)';
		circle.style.animation = `forLight_${ID} 600ms linear`;
		circle.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
		if (variant === 'Option' || variant === 'Outlined') {
			circle.style.backgroundColor = `${verifyColorIcon(0.7)}`;
		}
		circle.classList.add(`forLight_${ID}`);

		const effectLight = button.getElementsByClassName(`forLight_${ID}`)[0];

		if (effectLight) {
			effectLight.remove();
		}

		button.appendChild(circle);
		if (onClick) {
			onClick(event);
		}
		removeCss();
	}

	async function success() {
		await delay(1000);
		withFeedback?.successOptions?.setSuccess(false);
	}

	async function failed() {
		await delay(1000);
		withFeedback?.failedOptions?.setFailed(false);
	}

	useEffect(() => {
		if (withFeedback?.successOptions?.success) {
			success();
		}
		if (withFeedback?.failedOptions?.failed) {
			failed();
		}
	}, [withFeedback]);

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
			return <span>{withFeedback.loadingOptions.customIcon}</span>;
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
			<div
				className={styles.text}
				ref={divRef}
				title={
					(isEllipsisActive && typeof children === 'string' && children) || ''
				}
			>
				{children}
			</div>
		);
	}, [withFeedback]);

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
		<button
			{...props}
			onClick={createEffect}
			type={type}
			className={`${verifyClasses()} ${props.className}`}
		>
			<div className={styles.internal}>
				{buildStartIcon}
				{buildChildren}
				{mainFeedback}
				{buildEndIcon}
			</div>
		</button>
	);
}

export { Button };
