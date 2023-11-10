import {
	ISajermannReactInput,
	Input as InputSajermann,
} from '@sajermann/react-input';
import { forwardRef } from 'react';
import { tv } from 'tailwind-variants';

type Props = ISajermannReactInput & {
	error?: string;
};

const input = tv({
	slots: {
		containerPropsInternal: 'group flex flex-col gap-1 w-full',
		labelPropsInternal: [
			'text-sm text-gray-500',
			'transition-all duration-500',
		],
		inputPropsInternal: [
			'group border h-11 py-1 px-2 rounded w-full text-black',
			'transition-all duration-500',
		],
	},
	variants: {
		color: {
			primary: {
				labelPropsInternal:
					'group-hover:text-blue-500 group-focus-within:text-blue-500',
				inputPropsInternal:
					'outline-none focus:ring-1 focus:ring-blue-500 group-hover:border-blue-500 focus:border-blue-500',
			},
			error: {
				labelPropsInternal: 'text-red-500',
				inputPropsInternal: 'outline-red-700 border-red-500',
			},

			normal: {
				labelPropsInternal: '',
				inputPropsInternal: '',
			},
		},
	},

	defaultVariants: {
		// size: 'md',
		color: 'normal',
	},
});

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
	const { labelPropsInternal, inputPropsInternal, containerPropsInternal } =
		input({
			color: props?.error ? 'error' : 'primary',
		});
	return (
		<div className="w-full">
			<InputSajermann
				{...props}
				ref={ref}
				containerProps={{
					...props.containerProps,
					// className: `flex w-full flex-col gap-2 ${props.containerProps?.className}`,
					className: containerPropsInternal({
						class: props.containerProps?.className,
					}),
				}}
				labelProps={{
					...props.labelProps,
					className: labelPropsInternal({
						class: props.labelProps?.className,
					}),
				}}
				// className={`w-full h-11 py-1 px-2 rounded-md border dark:text-black outline-none focus:outline-2 ${
				// 	props.className ? props.className : ''
				// }`}
				className={inputPropsInternal({ class: props?.className })}
			/>
		</div>
	);
});

export { Input };
