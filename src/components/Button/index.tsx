/* eslint-disable react/button-has-type */
import { useEffect, useRef, useState } from 'react';
import Loading from '../Loading';
import styles from './styles.module.css';
import successSvg from './success.svg';
import failedSvg from './failed.svg';
import delay from './delay';

function Success() {
	return (
		<img src={successSvg} className={styles.successSvg} alt="success img" />
	);
}

function Failed() {
	return (
		<img src={failedSvg} className={styles.successSvg} alt="success img" />
	);
}

type PropsFeedBack = {
	isLoading: boolean;
	inSuccess?: {
		success: boolean;
		setSuccess: (data: boolean) => void;
	};
	inFailed?: {
		failed: boolean;
		setFailed: (data: boolean) => void;
	};
};

interface Props extends React.HTMLProps<HTMLButtonElement> {
	type: 'button' | 'reset' | 'submit';
	withFeedback?: PropsFeedBack;
	colorStyle?: 'Primary' | 'Secondary' | 'Success' | 'Transparent' | 'Warning';
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
	...props
}: Props) {
	const { onClick } = props;
	const COLOR_STYLE = {
		Primary: styles.Primary,
		Secondary: styles.Secondary,
		Success: styles.Success,
		Warning: styles.Warning,
		Transparent: styles.Transparent,
	};
	const [isEllipsisActive, setIsEllipsisActive] = useState(false);
	const divRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const element = divRef.current;

		setIsEllipsisActive(
			element
				? element.offsetWidth < element.scrollWidth ||
						element.offsetHeight < element.scrollHeight
				: false
		);
	}, []);

	function generateGuid(): string {
		let d = new Date().getTime();
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
			// eslint-disable-next-line no-bitwise
			const r = (d + Math.random() * 16) % 16 | 0;
			d = Math.floor(d / 16);
			// eslint-disable-next-line no-bitwise
			return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
		});
	}

	const ID_BUTTON = 'riple_sajermann_ui_button';
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

	function createEffect(event: React.MouseEvent<HTMLButtonElement>) {
		insertCss();
		const button = event.currentTarget;
		const circle = document.createElement('span');
		const diameter = Math.max(button.clientWidth, button.clientHeight);
		const radius = diameter / 2;

		// eslint-disable-next-line no-multi-assign
		circle.style.width = circle.style.height = `${diameter}px`;
		circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
		circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
		circle.style.position = 'absolute';
		circle.style.borderRadius = '50%';
		circle.style.transform = 'scale(0)';
		circle.style.animation = `forLight_${ID} 600ms linear`;
		circle.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
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
		withFeedback?.inSuccess?.setSuccess(false);
	}

	async function failed() {
		await delay(1000);
		withFeedback?.inFailed?.setFailed(false);
	}

	useEffect(() => {
		if (withFeedback?.inSuccess?.success) {
			success();
		}
		if (withFeedback?.inFailed?.failed) {
			failed();
		}
	}, [withFeedback]);

	return (
		<button
			{...props}
			onClick={createEffect}
			type={type}
			className={`${COLOR_STYLE[colorStyle || 'Primary']}  ${styles.btn} ${
				!children && styles.onlyIcon
			} ${props.className} `}
		>
			<div className={styles.internal}>
				{startIcon && <div className={styles.containerIcon}>{startIcon}</div>}
				{children && (
					<div
						className={styles.text}
						ref={divRef}
						title={(isEllipsisActive && (children as unknown as string)) || ''}
					>
						{children}
					</div>
				)}
				{(withFeedback?.isLoading ||
					withFeedback?.inSuccess?.success ||
					withFeedback?.inFailed?.failed) && (
					<div className={styles.containerIcon}>
						{withFeedback?.isLoading && <Loading />}
						{!withFeedback?.isLoading && withFeedback?.inSuccess?.success && (
							<Success />
						)}
						{!withFeedback?.isLoading && withFeedback?.inFailed?.failed && (
							<Failed />
						)}
					</div>
				)}

				{endIcon &&
					!withFeedback?.isLoading &&
					!withFeedback?.inSuccess?.success &&
					!withFeedback?.inFailed?.failed && (
						<div className={styles.containerIcon}>{endIcon}</div>
					)}
			</div>
		</button>
	);
}

// eslint-disable-next-line import/prefer-default-export
export { Button };
