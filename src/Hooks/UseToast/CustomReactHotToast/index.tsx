import { Toast } from 'react-hot-toast';
import { Icons } from '~/Components/Icons';
import { managerClassNames } from '~/Utils/ManagerClassNames';
import { COMMONS_TYPE, ICONS, TTypeOptions } from '..';

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
					<div
						className={managerClassNames({
							hidden: type === 'default',
							'min-w-[1.75rem] w-7 max-w-[1.75rem]': true,
							'min-h-[1.75rem] h-7 max-h-[1.75rem]': true,
							[COMMONS_TYPE[type || 'default']]: true,
						})}
					>
						{ICONS[type || 'default']}
					</div>
					<div data-type={type}>{message}</div>
				</div>

				<div className="flex items-center justify-center">
					<button
						type="button"
						aria-label="close"
						data-role="close"
						onClick={closeToast}
						className={managerClassNames({
							'w-5 h-4 flex items-center justify-center': true,
							'hover:opacity-50 transition-all duration-300': true,
						})}
					>
						<Icons nameIcon="close" />
					</button>
				</div>
			</div>
		</div>
	);
}
