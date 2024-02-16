import {
	DetailedHTMLProps,
	HTMLAttributes,
	useCallback,
	useEffect,
	useState,
} from 'react';
import ReactDOM from 'react-dom';
import { managerClassNames } from '~/Utils/ManagerClassNames';
import { managerOverflowBody } from './Utils';

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
	const [isOpenInternal, setIsOpenInternal] = useState(false);
	const [inDom, setIInDom] = useState(false);
	const [timer, setTimer] = useState<NodeJS.Timeout>();

	useEffect(() => {
		managerOverflowBody(isOpen, document.querySelector('body'));
		if (timer) {
			clearTimeout(timer);
		}
		if (isOpen) {
			setIInDom(isOpen);
			const resultTimer = setTimeout(() => {
				setIsOpenInternal(isOpen);
			}, 100);
			setTimer(resultTimer);
		} else {
			setIsOpenInternal(isOpen);
			const resultTimer = setTimeout(() => {
				setIInDom(isOpen);
			}, 1000);
			setTimer(resultTimer);
		}
	}, [isOpen]);

	const handleClose = useCallback((esc: boolean) => {
		if ((esc && !disableEsc) || (!esc && !disableClickOnBackdrop)) {
			onClose();
		}
	}, []);

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

	if (!inDom) return null;

	return ReactDOM.createPortal(
		<>
			<div
				className={managerClassNames([
					{ 'opacity-0 transition-opacity duration-500': true },
					{ '-z-50  inset-0 fixed': true },
					{ 'opacity-50 z-[9998]': isOpenInternal },
					{ 'bg-black': !disableBackdrop },
				])}
				role="presentation"
				onClick={() => handleClose(false)}
			/>
			<div
				className={managerClassNames([
					{ 'fixed inset-0': true },
					{ 'z-[9999]': true },
					{ '-translate-x-full': !isOpenInternal && openFrom === 'left' },
					{ 'translate-x-full': !isOpenInternal && openFrom === 'right' },
					{ 'left-0': !isOpenInternal && openFrom === 'right' },
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
