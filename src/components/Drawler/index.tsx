/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useEffect, useState } from 'react';
import styles from './styles.module.css';
// import CloseButton from '../CloseButton';
// import SaveButton from '../SaveButton';

type Props = {
	children: JSX.Element;
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
	side: 'left' | 'right' | 'bottom' | 'top';
	percentage?: number;
};

export default function Drawler({
	children,
	side,
	isOpen,
	setIsOpen,
	percentage,
}: Props) {
	const [configSide, setConfigSide] = useState({
		side: '',
		translate: '',
		style: {},
	});

	useEffect(() => {
		if (side === 'left') {
			setConfigSide({
				side: styles.leftZero,
				translate: styles.minusTranslateXFull,
				style: {
					maxWidth: `${percentage || 100}%`,
					maxHeight: '100%',
				},
			});
		}
		if (side === 'right') {
			setConfigSide({
				side: styles.rightZero,
				translate: styles.translateXFull,
				style: {
					maxWidth: `${percentage || 100}%`,
					maxHeight: '100%',
				},
			});
		}

		if (side === 'bottom') {
			setConfigSide({
				side: styles.leftZero,
				translate: styles.translateYFull,
				style: {
					maxWidth: '100%',
					top: `${100 - (percentage || 100)}%`,
				},
			});
		}
		if (side === 'top') {
			setConfigSide({
				side: styles.leftZero,
				translate: styles.translateYFull,
				style: {
					maxWidth: '100%',
					bottom: `${100 - (percentage || 100)}%`,
				},
			});
		}
	}, [side]);

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

	return (
		// eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
		<main
			className={`${styles.container} ${
				isOpen ? styles.containerOpen : styles.containerClose
			}`}
			onClick={() => setIsOpen(false)} // Tirar saporra depois
		>
			<section
				className={`${styles.subContainer} ${configSide.side} ${
					styles.subContainer
				}  ${isOpen ? styles.subContainerOpen : `${configSide.translate}`}`}
				style={configSide.style}
			>
				{children}
			</section>
		</main>
	);
}
