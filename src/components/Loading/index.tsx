// import logoCirtcle from './circle-notch-svgrepo-com.svg';

import React from 'react';

export default function Loading() {
	return (
		<div className="w-6 h-6 flex items-center justify-center overflow-hidden">
			<img
				alt="test"
				src="logoCirtcle"
				// weight="bold"
				className="w-4 h-4 animate-spin"
			/>
		</div>
	);
}
