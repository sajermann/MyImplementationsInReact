import {
	DetailedHTMLProps,
	forwardRef,
	HTMLAttributes,
	LegacyRef,
} from 'react';

interface Props
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: React.ReactNode;
}

export const ToPrint = forwardRef(
	({ children, ...rest }: Props, ref: unknown) => (
		<div {...rest} ref={ref as LegacyRef<HTMLDivElement> | undefined}>
			{children}
		</div>
	)
);
