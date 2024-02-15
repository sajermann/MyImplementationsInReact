import { DetailedHTMLProps, HTMLAttributes, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { managerClassNames } from '~/Utils/ManagerClassNames';

type Props = {
	children: React.ReactNode;
	isOpen: boolean;
	onClose: () => void;
	openFrom: 'left' | 'right' | 'bottom' | 'top';
	disableBackdrop?: boolean;
	disableEsc?: boolean;
	disableClickOnBackdrop?: boolean;
	oneClickToClose?: boolean;
	sectionInternal?: DetailedHTMLProps<
		HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	>;
};

export function DrawerNew({
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

	return ReactDOM.createPortal(
		<>
			<div
				className={managerClassNames([
					{ 'opacity-0 transition-opacity duration-500': true },
					{ '-z-50  inset-0 fixed': true },
					{ 'opacity-50 z-[9998]': isOpen },
					{ 'bg-black': !disableBackdrop },
				])}
				role="presentation"
				onClick={() => handleClose(false)}
			/>
			<div
				className={managerClassNames([
					{ 'fixed inset-0': true },
					{ 'z-[9999]': true },
					{ '-translate-x-full': !isOpen },
					{ 'transition-all duration-500': true },
					{
						[sectionInternal?.className as string]: sectionInternal?.className,
					},
				])}
				role="presentation"
				onClick={oneClickToClose ? () => onClose() : () => null}
			>
				{children}
			</div>
		</>,
		document.body
	);
}
