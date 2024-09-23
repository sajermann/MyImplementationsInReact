import * as PopoverRadix from '@radix-ui/react-popover';
import { managerClassNames } from '~/Utils/ManagerClassNames';
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
						className={managerClassNames([
							{ 'data-[state=open]:animate-enter': true },
							{ 'data-[state=closed]:animate-leave': true },
							{ 'rounded-lg z-[1] p-4': true },
							{ 'shadow-lg shadow-black/25 dark:shadow-white/25': true },
							{ 'bg-transparent backdrop-blur-md border': true },
						])}
					>
						{children}
						<PopoverRadix.Close
							onClick={onClose}
							className="w-5 h-5 absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
							aria-label="Close"
						>
							<Icons nameIcon="close" />
						</PopoverRadix.Close>
						<PopoverRadix.Arrow className="PopoverRadixArrow" />
					</PopoverRadix.Content>
				</PopoverRadix.Portal>
			</PopoverRadix.Root>
		</div>
	);
}
