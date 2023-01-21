import { Transition } from '@headlessui/react';
import * as Dialog from '@radix-ui/react-dialog';
import { Fragment } from 'react';
import { Icons } from '../Icons';
import styles from './index.module.css';

type Props = {
	children: React.ReactNode;
	title?: string;
	isOpen: boolean;
	onClose: () => void;
	width?: string;
	closeByBackdrop?: boolean;
	closeByEsc?: boolean;
	contentProps?: object;
	overlayProps?: object;
	closeButton?: boolean;
};

export function Modal({
	children,
	title,
	isOpen,
	onClose,
	closeByBackdrop,
	closeByEsc,
	width,
	contentProps,
	overlayProps,
	closeButton,
}: Props) {
	return (
		<Dialog.Root open={isOpen}>
			<Dialog.Portal forceMount>
				<Transition.Root show={isOpen}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Dialog.Overlay
							{...overlayProps}
							className={styles.overlay}
							onClick={closeByBackdrop ? onClose : undefined}
						/>
					</Transition.Child>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0 scale-95"
						enterTo="opacity-100 scale-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-95"
					>
						<Dialog.Content
							{...contentProps}
							style={{ width }}
							onEscapeKeyDown={closeByEsc ? onClose : undefined}
							className={styles.content}
						>
							{/* <Dialog.Title></Dialog.Title> */}
							<header className={styles.header}>
								{title && <span className={styles.title}>{title}</span>}
								{closeButton && (
									<div
										className={styles.closeButton}
										onClick={onClose}
										onKeyPress={onClose}
										role="button"
										tabIndex={0}
										data-testid="closeButtonModal"
									>
										<Icons.Close />
									</div>
								)}
							</header>
							<main className={styles.main}>{children}</main>
						</Dialog.Content>
					</Transition.Child>
				</Transition.Root>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
