import {
	DetailedHTMLProps,
	forwardRef,
	HTMLAttributes,
	LegacyRef,
} from 'react';
import clsx from 'clsx';

export const BoxScroll = forwardRef(
	(
		props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
		ref
	) => {
		const { className } = props;
		return (
			<div
				ref={ref as LegacyRef<HTMLDivElement>}
				className={clsx({
					'scrollbar-thin': true,
					'scrollbar-thumb-gray-500': true,
					'scrollbar-track-gray-300': true,
					'scrollbar-thumb-rounded-full': true,
					'scrollbar-track-rounded-full': true,
					'!overflow-auto': true,
					[`${className}`]: className,
				})}
				{...props}
			/>
		);
	}
);
