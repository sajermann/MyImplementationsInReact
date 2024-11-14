import { DetailedHTMLProps, HTMLAttributes } from 'react';

export default function Divider(
	props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
) {
	return (
		<div className="w-4 h-8 p-1 flex items-center justify-center" {...props}>
			{props?.children || '/'}
		</div>
	);
}
