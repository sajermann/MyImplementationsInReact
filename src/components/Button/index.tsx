/* eslint-disable react/button-has-type */
import Loading from '../Loading';
import styles from './styles.module.css';
import './button.css';

interface Props extends React.HTMLProps<HTMLButtonElement> {
	type: 'button' | 'reset' | 'submit';
	isLoading?: boolean;
	variant?:
		| 'Primary'
		| 'Secondary'
		| 'Success'
		| 'Error'
		| 'Transparent'
		| 'Warning';
}

function Button({ type, isLoading, children, variant, ...props }: Props) {
	const VARIANT = {
		Primary: {
			normal: 'primary',
			hover: 'primary',
		},
		Secondary: {
			normal: 'bg-pink-500',
			hover: 'hover:bg-pink-700',
		},
		Success: {
			normal: 'bg-green-500',
			hover: 'hover:bg-green-700',
		},
		Error: {
			normal: 'bg-red-500',
			hover: 'hover:bg-red-700',
		},
		Warning: {
			normal: 'bg-yellow-500',
			hover: 'hover:bg-yellow-700',
		},
		Transparent: {
			normal: 'bg-transparent-500',
			hover: 'hover:bg-gray-800',
		},
	};

	function createRipple(event: React.MouseEvent<HTMLButtonElement>) {
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
		circle.style.animation = 'ripple 600ms linear';
		circle.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
		circle.classList.add('ripple');

		const ripple = button.getElementsByClassName('ripple')[0];
		console.log({ button, circle, diameter, radius, ripple });

		if (ripple) {
			ripple.remove();
		}

		button.appendChild(circle);
	}

	return (
		<button
			onClick={createRipple}
			type={type}
			className={`${styles.primary}  ${styles.btn} ${props.className} btn`}
			{...props}
		>
			{isLoading && <Loading />}
			{children}
		</button>
	);
}

// eslint-disable-next-line import/prefer-default-export
export { Button };
