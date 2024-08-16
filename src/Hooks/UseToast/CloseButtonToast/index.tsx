import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { Icons } from '~/Components/Icons';
import { managerClassNames } from '~/Utils/ManagerClassNames';

type TCloseButtonProps = DetailedHTMLProps<
	ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>;

export function CloseButtonToast(props: TCloseButtonProps) {
	return (
		<button
			{...props}
			type="button"
			aria-label="close"
			data-role="close"
			className={managerClassNames({
				'flex items-center justify-center': true,
				'hover:opacity-50 transition-all duration-300': true,
				[props?.className as string]: props?.className,
			})}
		>
			<Icons nameIcon="close" />
		</button>
	);
}
