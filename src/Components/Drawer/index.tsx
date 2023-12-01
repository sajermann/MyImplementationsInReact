import { DetailedHTMLProps, HTMLAttributes, useEffect } from 'react';
import { managerClassNames } from '~/Utils/ManagerClassNames';
import styles from './styles.module.css';

type Props = {
	children: React.ReactNode;
	isOpen: boolean;
	onClose: () => void;
	openFrom: 'left' | 'right' | 'bottom' | 'top';
	disableBackdrop?: boolean;
	disableEsc?: boolean;
	disableClickOnBackdrop?: boolean;
	oneClickToClose?: boolean;
	sectionInternal?: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
};

export function Drawer({
	children,
	openFrom,
	isOpen,
	onClose,
	disableBackdrop,
	disableEsc,
	disableClickOnBackdrop,
	oneClickToClose,
	sectionInternal,
}: Props) {
	useEffect(() => {
		const body = document.querySelector('body');
		if (isOpen) {
			if (body) {
				body.style.overflow = 'hidden';
			}
		} else if (body) {
			body.style.overflow = '';
		}
	}, [isOpen]);

	function handleClose(esc: boolean) {
		// Verify if caller is ESC and user allow ESC
		if (esc && !disableEsc) {
			onClose();
			return;
		}

		// Verify if caller is click in back drop and user allow backdrop
		if (!esc && !disableClickOnBackdrop) {
			onClose();
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
			className={managerClassNames([
				{ [styles.container]: true },
				{ [styles.containerOpen]: isOpen },
				{ [styles.containerClose]: !isOpen },
			])}
			role="presentation"
			onClick={oneClickToClose ? () => onClose() : () => null}
		>
			<section
				className={managerClassNames([
					{ [styles.backdropOpen]: isOpen },
					{ [styles.black]: !disableBackdrop },
				])}
				role="presentation"
				onClick={() => handleClose(false)}
			/>
			<section
				{...sectionInternal}
				className={managerClassNames([
					{ [styles.subContainer]: true },
					{ [styles.leftZero]: openFrom === 'left' },
					{ [styles.translateLeft]: openFrom === 'left' && !isOpen },
					{ [styles.rightZero]: openFrom === 'right' },
					{
						[styles.translateRight]: openFrom === 'right' && !isOpen,
					},
					{
						[styles.translateBottom]: openFrom === 'bottom' && !isOpen,
					},
					{ [styles.translateTop]: openFrom === 'top' && !isOpen },

					{ [styles.subContainerOpen]: isOpen },
					{
						[sectionInternal?.className as string]: sectionInternal?.className,
					},
				])}
			>
				{children}
			</section>
		</main>
	);
}
