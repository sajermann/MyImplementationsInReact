import { DetailedHTMLProps, HTMLAttributes } from 'react';

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export function ComponentBlock({ children }: Props) {
	return (
		<div className="componentBlock">
			<div className="children">{children}</div>
		</div>
	);
}
