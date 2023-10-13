/* eslint-disable arrow-body-style */
import addMilliseconds from 'date-fns/addMilliseconds';

import { toast, useToaster, useToasterStore } from 'react-hot-toast';

import { Icons } from '~/Components/Icons';
import { makeData } from '~/Utils/MakeData';
import { managerClassNames } from '~/Utils/ManagerClassNames';
import { useCountdown } from '../UseCountdown';

interface Timer {
	id: string;
	milliseconds: number;
	onComplete: () => void;
	isPaused: boolean;
	timeLeft: number;
	percentage: number;
}

type Props = {
	type: 'info' | 'success' | 'error' | 'warning';
	msg: string;
	enableProgress?: boolean;
	id?: string;
	timers?: Timer[];
};

function Test({ type, msg, enableProgress, id, timers }: Props) {
	console.log('test', timers);
	console.log(new Date());

	if (!id || !timers) return null;
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
		info: <Icons nameIcon="info" />,
		success: <Icons nameIcon="checked" />,
		error: <Icons nameIcon="error" />,
		warning: <Icons nameIcon="info" />,
	};
	return (
		<div
			data-bruno="sajermann"
			className={managerClassNames({
				'w-full max-w-2xl shadow-lg rounded pointer-events-auto flex': true,
				'ring-1 ring-black ring-opacity-5 font-bold gap-1': true,
				' flex-col': true,
				// 'animate-enter': t.visible,
				// 'animate-leave': !t.visible,
				...commonsType,
			})}
		>
			{/* <div className="flex w-full py-4 px-3">
				<div className="flex flex-1 items-center flex-row gap-2">Bruno</div>
			</div> */}
			<div className="flex w-full py-4 px-3">
				<div className="flex flex-1  items-center flex-row gap-2">
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
						data-role="close"
						type="button"
						onClick={() => {
							toast.dismiss(id);
						}}
						className={managerClassNames({
							'w-5 h-4 flex items-center justify-center': true,
							...commonsType,
						})}
					>
						<Icons nameIcon="close" />
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
						data-bar="progress"
						className={managerClassNames({
							'w-[50%] h-2 rounded-r-sm absolute': true,
							...commonsTypeProgressBarPrimary,
						})}
						// style={{
						// 	width: `${timers
						// 		.find(item => item.id === id)
						// 		?.percentage.toFixed(0)}%`,
						// }}
					/>
				</div>
			)}
		</div>
	);
}

export function useToast() {
	const { timers, addTimer, togglePlayPause } = useCountdown();
	// console.log({ a, toasts, handlers });
	const duration = 120000;

	function customToast({ type, msg, enableProgress }: Props) {
		const id = makeData.uuid();
		console.log({ enableProgress });

		addTimer({
			id,
			milliseconds: duration,
			onComplete: () => {
				console.log('acabou', id);
				toast.dismiss(id);
			},
		});
		console.log('Vou Injetar', new Date(), timers);
		toast(
			e => {
				// console.log({ e });
				return (
					<Test
						timers={timers}
						msg={msg}
						type={type}
						enableProgress={enableProgress}
						id={id}
					/>
				);
			},
			{
				id,
				// message: () => <Test />,
				duration,
			}
		);

		// return toast.custom(
		// 	t => {
		// 		// addTimer({
		// 		// 	id: t.id,
		// 		// 	milliseconds: 30000,
		// 		// 	onComplete: () => {
		// 		// 		console.log('acabou', t.id);
		// 		// 		toast.dismiss(t.id);
		// 		// 	},
		// 		// });
		// 		return (
		// 			<div
		// 				className={managerClassNames({
		// 					'flex flex-col': true,
		// 					'max-w-2xl w-full shadow-lg rounded pointer-events-auto': true,
		// 					'ring-1 ring-black ring-opacity-5  font-bold gap-1': true,
		// 					'animate-enter': t.visible, // Look tailwind.config.cjs
		// 					'animate-leave': !t.visible, // Look tailwind.config.cjs
		// 					...commonsType,
		// 				})}
		// 			>
		// 				<div className="border p-s">
		// 					Bruno
		// 					{timers.map(timer => (
		// 						<div key={timer.id}>
		// 							ID {timer.id} - Time Left {(timer.timeLeft / 1000).toFixed()}{' '}
		// 							- Percentage {timer.percentage.toFixed(0)}%
		// 							<button
		// 								type="button"
		// 								onClick={() => togglePlayPause(timer.id)}
		// 							>
		// 								Toggle
		// 							</button>
		// 						</div>
		// 					))}
		// 				</div>
		// 				<div className="flex w-full py-4 px-3">
		// 					<div className="flex flex-1 w-0 items-center flex-row gap-2">
		// 						<div
		// 							className={managerClassNames({
		// 								'min-w-[1.75rem] w-7 max-w-[1.75rem]': true,
		// 								'min-h-[1.75rem] h-7 max-h-[1.75rem]': true,
		// 								...commonsType,
		// 							})}
		// 						>
		// 							{icons[type]}
		// 						</div>
		// 						<div data-type={type}>{msg}</div>
		// 					</div>

		// 					<div className="flex items-center justify-center">
		// 						<button
		// 							type="button"
		// 							data-role="close"
		// 							onClick={() => toast.dismiss(t.id)}
		// 							className={managerClassNames({
		// 								'w-5 h-4 flex items-center justify-center': true,
		// 								...commonsType,
		// 							})}
		// 						>
		// 							<Icons nameIcon="Close" />
		// 						</button>
		// 					</div>
		// 				</div>
		// 				{enableProgress && (
		// 					<div className="w-full relative -top-2">
		// 						<div
		// 							className={managerClassNames({
		// 								'w-full h-2 rounded-r-sm absolute': true,
		// 								...commonsType,
		// 							})}
		// 						/>
		// 						<div
		// 							className={managerClassNames({
		// 								' h-2 rounded-r-sm absolute': true,
		// 								...commonsTypeProgressBarPrimary,
		// 							})}
		// 							style={{
		// 								width: `${timers
		// 									.find(item => item.id === t.id)
		// 									?.percentage.toFixed(0)}%`,
		// 							}}
		// 						/>
		// 					</div>
		// 				)}
		// 			</div>
		// 		);
		// 	},
		// 	{
		// 		duration,
		// 	}
		// );
	}

	function removeToast(id?: string) {
		toast.remove(id);
	}

	return { customToast, removeToast };
}
