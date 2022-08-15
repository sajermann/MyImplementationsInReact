/* eslint-disable react/button-has-type */
import { useEffect, useRef, useState } from 'react';
import { generateGuid } from '@sajermann/utils/Random';
import styles from './styles.module.css';
import { Loading } from '../Loading';
import delay from './delay';

type PropsFeedBackIcons = {
	color?: string;
	size?: string;
};

function Success({ color, size }: PropsFeedBackIcons) {
	return (
		<svg
			version="1.1"
			style={{
				color: color || '#fff',
				width: size || '1.2rem',
				height: size || '1.2rem',
			}}
			xmlns="http://www.w3.org/2000/svg"
			x="0px"
			y="0px"
			viewBox="0 0 297 297"
			xmlSpace="preserve"
		>
			<g>
				<path
					fill="currentColor"
					d="M294.033,82.033l-54.675-54.701c-1.899-1.901-4.479-2.97-7.167-2.97c-2.688,0-5.268,1.068-7.168,2.97L113.636,138.765
		L71.975,97.09c-1.901-1.9-4.479-2.969-7.169-2.969c-2.688,0-5.267,1.069-7.167,2.97L2.966,151.794
		c-3.955,3.958-3.955,10.372,0.001,14.329l103.501,103.545c1.9,1.902,4.478,2.97,7.168,2.97c2.689,0,5.267-1.067,7.167-2.97
		L294.033,96.361C297.989,92.405,297.989,85.99,294.033,82.033z"
				/>
			</g>
			<g />
			<g />
			<g />
			<g />
			<g />
			<g />
			<g />
			<g />
			<g />
			<g />
			<g />
			<g />
			<g />
			<g />
			<g />
		</svg>
	);
}

function Failed({ color, size }: PropsFeedBackIcons) {
	return (
		<svg
			version="1.1"
			style={{
				color: color || '#fff',
				width: size || '1rem',
				height: size || '1rem',
			}}
			xmlns="http://www.w3.org/2000/svg"
			x="0px"
			y="0px"
			viewBox="0 0 503.021 503.021"
			xmlSpace="preserve"
		>
			<g>
				<g>
					<path
						fill="currentColor"
						d="M491.613,75.643l-64.235-64.235c-15.202-15.202-39.854-15.202-55.056,0L251.507,132.222L130.686,11.407
			c-15.202-15.202-39.853-15.202-55.055,0L11.401,75.643c-15.202,15.202-15.202,39.854,0,55.056l120.821,120.815L11.401,372.328
			c-15.202,15.202-15.202,39.854,0,55.056l64.235,64.229c15.202,15.202,39.854,15.202,55.056,0l120.815-120.814l120.822,120.814
			c15.202,15.202,39.854,15.202,55.056,0l64.235-64.229c15.202-15.202,15.202-39.854,0-55.056L370.793,251.514l120.82-120.815
			C506.815,115.49,506.815,90.845,491.613,75.643z"
					/>
				</g>
			</g>
			<g />
			<g />
			<g />
			<g />
			<g />
			<g />
			<g />
			<g />
			<g />
			<g />
			<g />
			<g />
			<g />
			<g />
			<g />
		</svg>
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
		const classesToReturn = [];
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

	function verifyColorIcon() {
		if (variant === 'Default' || variant === undefined) {
			return 'rgb(255 255 255)';
		}

		if (colorStyle === 'Primary' || colorStyle === undefined) {
			if (variant === 'Outlined' || variant === 'Option') {
				return '#476fe6';
			}
		}

		if (colorStyle === 'Secondary') {
			if (variant === 'Outlined' || variant === 'Option') {
				return 'rgb(239 68 68)';
			}
		}

		if (colorStyle === 'Success') {
			if (variant === 'Outlined' || variant === 'Option') {
				return 'rgb(34 197 94)';
			}
		}

		if (colorStyle === 'Warning') {
			if (variant === 'Outlined' || variant === 'Option') {
				return 'rgb(234 179 8)';
			}
		}

		return '';
	}

	return (
		<button
			{...props}
			onClick={createEffect}
			type={type}
			className={` ${styles.btn} ${!children && styles.onlyIcon} ${
				props.className
			} ${verifyClasses()} `}
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
						{withFeedback?.isLoading && (
							<Loading color={verifyColorIcon()} data-testid="loadingIcon" />
						)}
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

export { Button };
