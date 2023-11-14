import { DetailedHTMLProps, forwardRef, HTMLAttributes } from 'react';
import { managerClassNames } from '~/Utils/ManagerClassNames';

type TErrorsInput = DetailedHTMLProps<
	HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
> & {
	errors?: string[];
};
export const ErrorsInput = forwardRef<HTMLDivElement, TErrorsInput>(
	({ className, errors, ...rest }, ref) => {
		if (!errors) return null;
		return (
			<div
				{...rest}
				ref={ref}
				className={managerClassNames([
					{ 'flex flex-col text-red-500 text-sm': true },
					{ [className as string]: className },
				])}
			>
				{errors && errors?.map(error => <span key={error}>{error}</span>)}
			</div>
		);
	}
);
