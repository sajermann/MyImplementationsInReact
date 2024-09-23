import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Icons } from '~/Components/Icons';
import { managerClassNames } from '~/Utils/ManagerClassNames';
import { COMMONS_TYPE, TTypeOptions } from '..';

export const ICONS = {
	success: <Icons nameIcon="checked" />,
	error: <Icons nameIcon="error" />,
	warning: <Icons nameIcon="warning" />,
	info: <Icons nameIcon="info" />,
	default: null,
};

type TIconToastProps = DetailedHTMLProps<
	HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
> & { type?: TTypeOptions };

export function IconToast({ type }: TIconToastProps) {
	return (
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
	);
}
