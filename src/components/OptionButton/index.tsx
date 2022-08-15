import { generateGuid } from '@sajermann/utils/Random';
import styles from './styles.module.css';

interface Props extends React.HTMLProps<HTMLButtonElement> {
	srcForImage?: string;
}

function OptionButton({ children, srcForImage, ...props }: Props) {
	const { onClick } = props;

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

	return (
		<button
			{...props}
			onClick={createEffect}
			type="button"
			className={`${styles.btn} ${props.className}`}
		>
			{srcForImage && (
				<img src={srcForImage} className={styles.img} alt="ImageOptionButton" />
			)}
			{children}
		</button>
	);
}

export { OptionButton };
