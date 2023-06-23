import addMilliseconds from 'date-fns/addMilliseconds';

import { toast } from 'react-hot-toast';

import { Icons } from '~/Components/Icons';
import { managerClassNames } from '~/Utils/ManagerClassNames';
import useCountdown from '../UseCountdown2';

type Props = {
	type: 'info' | 'success' | 'error' | 'warning';
	msg: string;
	enableProgress?: boolean;
};

export function useToast() {
	// const { timers, addCountdown } = useCountdown();
	// console.log({ timers });
	const duration = 3000;

	function customToast({ type, msg, enableProgress }: Props) {
		const commonsType = {
			'bg-success-500 text-success-700': type === 'success',
			'bg-error-500 text-error-700': type === 'error',
			'bg-warning-500 text-warning-700': type === 'warning',
			'bg-info-500 text-info-700': type === 'info',
		};

		const commonsTypeProgressBarPrimary = {
			'bg-success-700': type === 'success',
			'bg-error-700': type === 'error',
			'bg-warning-700': type === 'warning',
			'bg-info-700': type === 'info',
		};

		const icons = {
			info: <Icons nameIcon="Info" />,
			success: <Icons nameIcon="Checked" />,
			error: <Icons nameIcon="Error" />,
			warning: <Icons nameIcon="Info" />,
		};

		return toast.custom(
			t => (
				<div
					className={managerClassNames({
						'flex flex-col': true,
						'max-w-2xl w-full shadow-lg rounded pointer-events-auto': true,
						'ring-1 ring-black ring-opacity-5  font-bold gap-1': true,
						'animate-enter': t.visible, // Look tailwind.config.cjs
						'animate-leave': !t.visible, // Look tailwind.config.cjs
						...commonsType,
					})}
				>
					{/* <div className="flex gap-2 flex-col">
						<span>Inicio: {new Date(t.createdAt).toLocaleString()}</span>
						<span>
							Termino:{' '}
							{addMilliseconds(
								new Date(t.createdAt),
								t.duration as number
							).toLocaleString()}
						</span>
					</div> */}
					<div className="flex w-full py-4 px-3">
						<div className="flex flex-1 w-0 items-center flex-row gap-2">
							<div
								className={managerClassNames({
									'min-w-[1.75rem] w-7 max-w-[1.75rem]': true,
									'min-h-[1.75rem] h-7 max-h-[1.75rem]': true,
									...commonsType,
								})}
							>
								{icons[type]}
							</div>
							<div data-type={type}>{msg}</div>
						</div>

						<div className="flex items-center justify-center">
							<button
								type="button"
								data-role="close"
								onClick={() => toast.dismiss(t.id)}
								className={managerClassNames({
									'w-5 h-4 flex items-center justify-center': true,
									...commonsType,
								})}
							>
								<Icons nameIcon="Close" />
							</button>
						</div>
					</div>
					{enableProgress && (
						<div className="w-full relative -top-2">
							<div
								className={managerClassNames({
									'w-full h-2 rounded-r-sm absolute': true,
									...commonsType,
								})}
							/>
							<div
								className={managerClassNames({
									'w-[50%] h-2 rounded-r-sm absolute': true,
									...commonsTypeProgressBarPrimary,
								})}
							/>
						</div>
					)}
				</div>
			),
			{
				duration,
			}
		);
	}

	function removeToast(id?: string) {
		toast.remove(id);
	}

	return { customToast, removeToast };
}
