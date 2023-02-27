import * as PopoverRadix from '@radix-ui/react-popover';
import { Icons } from '../Icons';

type Props = {
	children: React.ReactNode;
	isOpen?: boolean;
	onClose?: () => void;
	trigger?: React.ReactNode;
};

export function Popover({ children, isOpen, onClose, trigger }: Props) {
	return (
		<div className="relative inline-block text-left">
			<PopoverRadix.Root open={isOpen}>
				<PopoverRadix.Trigger asChild>{trigger}</PopoverRadix.Trigger>
				<PopoverRadix.Portal>
					<PopoverRadix.Content
						align="center"
						sideOffset={4}
						className="radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down w-48 rounded-lg p-4 pt-10 shadow-md md:w-56 bg-white dark:bg-gray-800 z-[1]"
						style={{ border: '1px solid' }}
					>
						{children}
						<PopoverRadix.Close
							onClick={onClose}
							className="w-5 h-5 absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
							aria-label="Close"
						>
							<Icons.Close />
						</PopoverRadix.Close>
						<PopoverRadix.Arrow className="PopoverRadixArrow" />
					</PopoverRadix.Content>
				</PopoverRadix.Portal>
			</PopoverRadix.Root>
		</div>
	);
}
