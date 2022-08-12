import { useEffect, useState } from 'react';
import styles from './styles.module.css';

type Props = {
	children: JSX.Element;
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
	side: 'left' | 'right' | 'bottom' | 'top';
	percentage?: number;
	disableBackdrop?: boolean;
	disableEsc?: boolean;
	disableClickOnBackdrop?: boolean;
};

export default function Drawler({
	children,
	side,
	isOpen,
	setIsOpen,
	percentage,
	disableBackdrop,
	disableEsc,
	disableClickOnBackdrop,
}: Props) {
	const [configSide] = useState(() => {
		if (side === 'left') {
			return {
				side: styles.leftZero,
				translate: styles.translateLeft,
				style: {
					maxWidth: `${percentage || 100}%`,
					maxHeight: '100%',
				},
			};
		}
		if (side === 'right') {
			return {
				side: styles.rightZero,
				translate: styles.translateRight,
				style: {
					maxWidth: `${percentage || 100}%`,
					maxHeight: '100%',
				},
			};
		}

		if (side === 'bottom') {
			return {
				side: '',
				translate: styles.translateBottom,
				style: {
					maxWidth: '100%',
					top: `${percentage || 100}%`,
				},
			};
		}
		if (side === 'top') {
			return {
				side: '',
				translate: styles.translateTop,
				style: {
					maxWidth: '100%',
					maxHeight: `${percentage || 100}%`,
				},
			};
		}
		return {};
	});

	const [id] = useState(() => {
		const number: number[] = [];

		while (number.length < 10) {
			number.push(Math.floor(Math.random() * 10));
		}
		return number.join('');
	});

	useEffect(() => {
		const body = document.querySelector('body');
		if (isOpen) {
			if (body) {
				body.classList.add('overflow-hidden');
			}
		} else if (body) {
			body.classList.remove('overflow-hidden');
		}
	}, [isOpen]);

	function handleClose(esc: boolean) {
		// Verify if caller is ESC and user allow ESC
		if (esc && !disableEsc) {
			setIsOpen(false);
			return;
		}

		// Verify if caller is click in back drop and user allow backdrop
		if (!esc && !disableClickOnBackdrop) {
			setIsOpen(false);
		}
	}

	useEffect(() => {
		const handleEsc = (event: { keyCode: number }) => {
			if (event.keyCode === 27) {
				handleClose(true);
			}
		};
		window.addEventListener('keydown', handleEsc);

		return () => {
			window.removeEventListener('keydown', handleEsc);
		};
	}, []);

	return (
		<main
			id={`_${id}`}
			className={`${styles.container} ${
				isOpen ? styles.containerOpen : styles.containerClose
			}`}
		>
			<section
				className={`${isOpen && styles.backdropOpen}`}
				style={{ background: !disableBackdrop ? 'black' : '' }}
				role="presentation"
				onClick={() => handleClose(false)}
			/>

			<section
				className={`${styles.subContainer} ${configSide.side} ${
					isOpen ? styles.subContainerOpen : `${configSide.translate}`
				}`}
				style={configSide.style}
			>
				{children}
			</section>
		</main>
	);
}
