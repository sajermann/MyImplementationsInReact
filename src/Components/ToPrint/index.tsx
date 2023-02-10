import { forwardRef, LegacyRef } from 'react';

type Props = {
	children: React.ReactNode;
};

export const ToPrint = forwardRef(({ children }: Props, ref: unknown) => (
	<div ref={ref as LegacyRef<HTMLDivElement> | undefined}>{children}</div>
));
