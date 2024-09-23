import * as Dialog from '@radix-ui/react-dialog';
import {
	DetailedHTMLProps,
	ForwardRefExoticComponent,
	HTMLAttributes,
	RefAttributes,
	useEffect,
	useState,
} from 'react';
import { managerClassNames } from '~/Utils/ManagerClassNames';
import { BoxScroll } from '../BoxScroll';
import { Button } from '../Button';
import { Icons } from '../Icons';

type Props = {
	children: React.ReactNode;
	title?: string;
	isOpen: boolean;
	onClose: () => void;
	closeByBackdrop?: boolean;
	closeByEsc?: boolean;
	contentProps?: DetailedHTMLProps<
		HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	>;
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
	contentProps,
	overlayProps,
	closeButton,
	expand,
}: Props) {
	const [isExpanded, setIsExpanded] = useState(false);

	useEffect(() => {
		if (expand?.resetOnClose && !isOpen) {
			setIsExpanded(false);
		}
	}, [isOpen]);

	return (
		<Dialog.Root open={isOpen}>
			<Dialog.Portal>
				<Dialog.Overlay
					{...overlayProps}
					className={managerClassNames([
						{ 'bg-black/60 inset-0 fixed z-[9999]': true },
						// Look tailwind.config.cjs
						{ 'data-[state=open]:animate-overlayShow': true },
						{ 'data-[state=closed]:animate-overlayClose': true },
					])}
					onClick={closeByBackdrop ? onClose : undefined}
				/>
				<Dialog.Content
					{...(contentProps as ForwardRefExoticComponent<
						Dialog.DialogContentProps & RefAttributes<HTMLDivElement>
					>)}
					onEscapeKeyDown={closeByEsc ? onClose : undefined}
					className={managerClassNames([
						{ 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ': true },
						{ 'shadow-lg shadow-black/25 dark:shadow-white/25': true },
						{ 'z-[9999] fixed rounded border': true },
						{ ' bg-transparent backdrop-blur-md text-white': true },
						// Look tailwind.config.cjs
						{ 'data-[state=open]:animate-contentShow': true },
						{ 'data-[state=closed]:animate-contentClose': true },
						{ 'transition-all duration-300': true },
						{ '!w-full !h-full': isExpanded },
						{ [contentProps?.className as string]: contentProps?.className },
					])}
				>
					{title && (
						<Dialog.Title className="h-14 px-6 py-3 font-bold text-3xl flex items-center border-b-2">
							<span className="flex-1">{title}</span>
							<div className="flex gap-4 items-center">
								{expand && (
									<Button
										iconButton="rounded"
										variant="option"
										onClick={() => setIsExpanded(prev => !prev)}
										className="text-white"
									>
										{!isExpanded ? (
											<Icons nameIcon="arrowsOutSimple" />
										) : (
											<Icons nameIcon="arrowsInSimple" />
										)}
									</Button>
								)}

								{closeButton && (
									<Button
										iconButton="rounded"
										variant="option"
										onClick={onClose}
										data-testid="closeButtonModal"
										className="text-white"
									>
										<Icons nameIcon="close" width="1rem" />
									</Button>
								)}
							</div>
						</Dialog.Title>
					)}
					<main className="h-[calc(100%_-_48px)]  py-2">
						<BoxScroll className="px-6">{children}</BoxScroll>
					</main>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
