import {
	DetailedHTMLProps,
	forwardRef,
	HTMLAttributes,
	LegacyRef,
} from 'react';
import { managerClassNames } from '~/Utils/ManagerClassNames';

export const BoxScroll = forwardRef(
	(
		props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
		ref
	) => (
		<div
			{...props}
			ref={ref as LegacyRef<HTMLDivElement>}
			className={managerClassNames({
				'scrollbar-thin': true,
				'scrollbar-thumb-gray-500': true,
				'scrollbar-track-gray-300': true,
				'scrollbar-thumb-rounded-full': true,
				'scrollbar-track-rounded-full': true,
				'!overflow-auto': true,
				'h-full': true,
				[props.className as string]: props.className,
			})}
		/>
	)
);
