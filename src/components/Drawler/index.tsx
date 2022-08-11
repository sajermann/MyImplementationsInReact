/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useEffect, useState } from 'react';
import styles from './styles.module.css';
// import CloseButton from '../CloseButton';
// import SaveButton from '../SaveButton';

interface ISide {
	side: 'left' | 'right';
	onSave?: () => never;
}

interface ISideFull {
	side: 'full';
	onSave: () => void;
}

type Props = {
	leftButton?: React.ReactNode;
	rightButton?: React.ReactNode;
	children: JSX.Element;
	isOpen: boolean;
	isLoading?: boolean;
	setIsOpen: (isOpen: boolean) => void;
	title?: string;
	disabledSaveButton?: boolean;
	inSuccess?: {
		success: boolean;
		setSuccess: (data: boolean) => void;
		setIsOpen: (data: boolean) => void;
	};
	inFailed?: {
		failed: boolean;
		setFailed: (data: boolean) => void;
	};
};

type Batata = Props & (ISide | ISideFull);

export default function Drawler({
	children,
	side,
	isOpen,
	setIsOpen,
	title,
	isLoading,
	onSave,
	inSuccess,
	inFailed,
	disabledSaveButton,
	leftButton,
	rightButton,
}: Batata) {
	const [configSide, setConfigSide] = useState({ side: '', translate: '' });

	useEffect(() => {
		if (side === 'left') {
			setConfigSide({
				side: styles.leftZero,
				translate: styles.minusTranslateXFull,
			});
		}
		if (side === 'right') {
			setConfigSide({
				side: styles.rightZero,
				translate: styles.translateXFull,
			});
		}

		if (side === 'full') {
			setConfigSide({
				side: styles.leftZero,
				translate: styles.translateYFull,
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
		<main
			className={`${styles.container} ${
				isOpen ? styles.containerOpen : styles.containerClose
			}`}
		>
			<section
				className={`${styles.subContainer} ${
					side === 'full' ? styles.maxWidthfull : styles.maxWidthHalf
				} ${configSide.side} ${styles.subContainer}  ${
					isOpen ? styles.subContainerOpen : `${configSide.translate}`
				}`}
			>
				<article
					className={`${styles.article} ${
						side === 'full' ? styles.widthfull : styles.maxWidthHalf
					}`}
				>
					{side === 'full' && (
						<nav className={styles.containerNav}>
							<div className={styles.subContainerNav}>
								{leftButton}

								<h2>{title}</h2>

								{rightButton}
							</div>
						</nav>
					)}
					<div className={styles.main}>{children}</div>
				</article>
			</section>
			<section
				className={styles.sectionEscape}
				onClick={() => setIsOpen(false)}
			/>
		</main>
	);
}
