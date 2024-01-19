import { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from 'react';
import { managerClassNames } from '../../Utils/ManagerClassNames';

type TProps = {
	show?: boolean;
	external?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
	internal?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
};

export function LoadingBar({ show, external, internal }: TProps) {
	const [customWidth, setCustomWidth] = useState(97);
	function frame() {
		setCustomWidth(prev => {
			if (prev > 99) {
				return prev - 99;
			}
			return prev + 0.1;
		});
	}

	useEffect(() => {
		const id = setInterval(frame, 0.1);
		return () => clearInterval(id);
	}, []);
	if (!show) return null;
	return (
		<div
			className={managerClassNames([
				{ 'bg-gray-300 rounded-bl-sm rounded-br-sm': true },
				{ [external?.className as string]: external?.className },
			])}
		>
			<div
				className={managerClassNames([
					{
						'bg-gray-500 text-center h-1 rounded-bl-sm rounded-br-sm': true,
					},
					{ [internal?.className as string]: internal?.className },
				])}
				style={{ width: `${customWidth}%` }}
			/>
		</div>
	);
}
