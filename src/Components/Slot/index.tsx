import React, { forwardRef, isValidElement, cloneElement } from 'react';

type SlotProps = {
	children: React.ReactNode;
	[key: string]: unknown;
};

export const Slot = forwardRef<unknown, SlotProps>(
	({ children, ...props }, ref) => {
		if (isValidElement(children)) {
			return cloneElement(children, {
				...props,
				...children.props,
				ref: ref ?? children.props.ref,
			});
		}

		return null;
	},
);
