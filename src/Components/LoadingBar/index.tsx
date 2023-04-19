import { useEffect, useState } from 'react';

export function LoadingBar() {
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
	return (
		<div className="bg-gray-300 rounded-bl-sm rounded-br-sm">
			<div
				className="w3-container bg-gray-500 text-center h-1 rounded-bl-sm rounded-br-sm test"
				style={{ width: `${customWidth}%` }}
			/>
		</div>
	);
}
