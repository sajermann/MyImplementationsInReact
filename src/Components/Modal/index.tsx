import { Transition } from '@headlessui/react';
import * as Dialog from '@radix-ui/react-dialog';
import { Fragment, useEffect, useState } from 'react';
import { ButtonIcon } from '../ButtonIcon';
import { Icons } from '../Icons';
import styles from './index.module.css';

type Props = {
	children: React.ReactNode;
	title?: string;
	isOpen: boolean;
	onClose: () => void;
	width?: string;
	height?: string;
	closeByBackdrop?: boolean;
	closeByEsc?: boolean;
	contentProps?: object;
	overlayProps?: object;
	closeButton?: boolean;
	expand?: {
		resetOnClose: boolean;
	};
};

export function Modal({
	children,
	title,
	isOpen,
	onClose,
	closeByBackdrop,
	closeByEsc,
	width,
	height,
	contentProps,
	overlayProps,
	closeButton,
	expand,
}: Props) {
	const [isExpanded, setIsExpanded] = useState(false);

	useEffect(() => {
		if (expand && expand.resetOnClose && !isOpen) {
			setIsExpanded(false);
		}
	}, [isOpen]);

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
							style={{
								width: isExpanded ? '100%' : width,
								height: isExpanded ? '100%' : height,
								transition: '300ms',
							}}
							onEscapeKeyDown={closeByEsc ? onClose : undefined}
							className={styles.content}
						>
							{title && (
								<Dialog.Title className={styles.header}>
									{title}
									{expand && (
										<ButtonIcon
											className="absolute top-2 right-16 text-primary-500 hover:text-primary-300 transition-colors duration-500"
											onClick={() => setIsExpanded(prev => !prev)}
										>
											{!isExpanded ? (
												<Icons.ArrowsOutSimple />
											) : (
												<Icons.ArrowsInSimple />
											)}
										</ButtonIcon>
									)}

									{closeButton && (
										<ButtonIcon
											className="absolute top-2 right-6  text-primary-500 hover:text-primary-300 transition-colors duration-500"
											onClick={onClose}
											data-testid="closeButtonModal"
										>
											<Icons.Close width="1rem" />
										</ButtonIcon>
									)}
								</Dialog.Title>
							)}
							<main className={styles.main}>{children}</main>
						</Dialog.Content>
					</Transition.Child>
				</Transition.Root>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
