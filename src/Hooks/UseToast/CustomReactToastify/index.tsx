import { ToastContentProps } from 'react-toastify';
import { TCustomReactToastify } from '..';
import { CloseButtonToast } from '../CloseButtonToast';
import { IconToast } from '../IconToast';

export function CustomReactToastify({
	message,
	toastContentOptions,
	options,
}: {
	message: string;
	toastContentOptions?: ToastContentProps;
	options?: TCustomReactToastify;
}) {
	const type = options?.type || 'default';
	return (
		<div className="flex flex-1 items-center flex-row gap-2 p-2">
			<IconToast type={type} />
			<div>{message}</div>
			<div className="flex items-center justify-center absolute right-2 top-2">
				<CloseButtonToast
					className="w-3 h-3"
					onClick={toastContentOptions?.closeToast}
				/>
			</div>
		</div>
	);
}
