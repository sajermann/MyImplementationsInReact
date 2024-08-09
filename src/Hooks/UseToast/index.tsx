import { toast as reactHotToast, ToastOptions } from 'react-hot-toast';
import { toast as reactToastify, ToastContentProps } from 'react-toastify';

import { Icons } from '~/Components/Icons';
import { CustomReactHotToast } from './CustomReactHotToast';
import { CustomReactToastify } from './CustomReactToastify';

export type TTypeOptions = 'info' | 'success' | 'warning' | 'error' | 'default';

const DURATION = 3000;

export const ICONS = {
	success: <Icons nameIcon="checked" />,
	error: <Icons nameIcon="error" />,
	warning: <Icons nameIcon="warning" />,
	info: <Icons nameIcon="info" />,
	default: null,
};

export const COMMONS_TYPE = {
	success: 'text-success-700',
	error: 'text-error-700',
	warning: 'text-warning-700',
	info: 'text-blue-400',
	default: 'text-info-700',
};

export type TCustomReactToastify = {
	type?: TTypeOptions;
	autoClose?: number;
	id?: string;
};

type Props = {
	type?: TTypeOptions;
	duration?: number;
	id?: string;
};

export function useToast() {
	function customReactHotToast(message: string, { type, duration, id }: Props) {
		return reactHotToast.custom(
			options => (
				<CustomReactHotToast
					message={message}
					type={type}
					options={options}
					closeToast={() => reactHotToast.dismiss(options.id)}
				/>
			),
			{
				duration: duration || DURATION,
				id,
			},
		);
	}

	function customReactToastify(
		msg: string,
		options?: TCustomReactToastify,
		toastContentOptions?: ToastContentProps,
		toastOptions?: ToastOptions,
	) {
		return reactToastify(
			internalProps => (
				<CustomReactToastify
					message={msg}
					toastContentOptions={{ ...internalProps, ...toastContentOptions }}
					options={options}
				/>
			),
			{
				...toastOptions,
				className:
					'bg-transparent backdrop-blur-md dark:text-white text-black h-full w-full border rounded-lg overflow-hidden m-1',
				bodyClassName: 'h-full w-full p-0',
				autoClose: options?.autoClose || 3000,
				closeButton: false,
				type: options?.type,
				icon: false,
				toastId: options?.id,
			},
		);
	}

	return { customReactHotToast, customReactToastify };
}
