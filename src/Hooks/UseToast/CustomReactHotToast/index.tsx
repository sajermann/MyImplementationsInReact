import { Toast } from 'react-hot-toast';
import { managerClassNames } from '~/Utils/ManagerClassNames';
import { TTypeOptions } from '..';
import { CloseButtonToast } from '../CloseButtonToast';
import { IconToast } from '../IconToast';

type TCustomReactHotToast = {
	type?: TTypeOptions;
	message: string;
	options: Toast;
	closeToast: () => void;
};

export function CustomReactHotToast({
	type,
	closeToast,
	options,
	message,
}: TCustomReactHotToast) {
	return (
		<div
			className={managerClassNames({
				'max-w-2xl w-full shadow-lg rounded pointer-events-auto flex': true,
				'ring-1 ring-black ring-opacity-5  font-bold gap-1 flex-col': true,
				'bg-transparent backdrop-blur-md': true,
				'animate-enter': options.visible,
				'animate-leave': !options.visible,
			})}
		>
			<div className="flex w-full py-4 px-3 border rounded-lg">
				<div className="flex flex-1 w-0 items-center flex-row gap-2">
					<IconToast type={type} />
					<div data-type={type}>{message}</div>
				</div>

				<div className="flex items-center justify-center">
					<CloseButtonToast className="w-5 h-4" onClick={closeToast} />
				</div>
			</div>
		</div>
	);
}
