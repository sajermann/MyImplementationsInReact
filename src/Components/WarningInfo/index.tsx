import { managerClassNames } from '~/Utils/ManagerClassNames';
import { Icons } from '../Icons';

type Props = {
	type: 'info' | 'success' | 'error' | 'warning';
	msg: string;
};

export function WarningInfo({ type, msg }: Props) {
	const commonsType = {
		'bg-success-500 text-success-700': type === 'success',
		'bg-error-500 text-error-700': type === 'error',
		'bg-warning-500 text-warning-700': type === 'warning',
		'bg-info-500 text-info-700': type === 'info',
	};

	const icons = {
		info: <Icons nameIcon="Info" />,
		success: <Icons nameIcon="Checked" />,
		error: <Icons nameIcon="Error" />,
		warning: <Icons nameIcon="Info" />,
	};

	return (
		<div
			className={managerClassNames({
				'w-full shadow-lg rounded pointer-events-auto flex': true,
				'ring-1 ring-black ring-opacity-5  font-bold gap-1': true,
				' flex-col': true,
				...commonsType,
			})}
		>
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
					<div>{msg}</div>
				</div>
			</div>
		</div>
	);
}
