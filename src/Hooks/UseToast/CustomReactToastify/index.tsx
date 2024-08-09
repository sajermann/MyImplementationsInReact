import { ToastContentProps } from 'react-toastify';
import { managerClassNames } from '~/Utils/ManagerClassNames';
import { Icons } from '~/Components/Icons';
import { COMMONS_TYPE, ICONS, TCustomReactToastify } from '..';

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
			<div
				className={managerClassNames({
					hidden: type === 'default',
					'min-w-[1.75rem] w-7 max-w-[1.75rem]': true,
					'min-h-[1.75rem] h-7 max-h-[1.75rem]': true,
					[COMMONS_TYPE[type]]: true,
				})}
			>
				{ICONS[type]}
			</div>
			<div>{message}</div>
			<div className="flex items-center justify-center absolute right-2 top-2">
				<button
					type="button"
					aria-label="close"
					data-role="close"
					onClick={toastContentOptions?.closeToast}
					className={managerClassNames({
						'w-3 h-3 flex items-center justify-center': true,
						'hover:opacity-50 transition-all duration-300': true,
					})}
				>
					<Icons nameIcon="close" />
				</button>
			</div>
		</div>
	);
}
