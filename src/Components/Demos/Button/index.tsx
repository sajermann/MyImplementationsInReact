import { useState } from 'react';

import { Button } from '~/Components/Button';
import { makeData } from '~/Utils/MakeData';

type Props = {
	variant: 'Default' | 'Outlined' | 'Option';
	style: 'Primary' | 'Secondary' | 'Success' | 'Warning';
};

export function ButtonDemo() {
	const [config, setConfig] = useState<Props>({
		variant: 'Default',
		style: 'Primary',
	});

	const VARIANT: Record<number, 'Default' | 'Outlined' | 'Option'> = {
		0: 'Default',
		1: 'Outlined',
		2: 'Option',
	};

	const STYLE: Record<number, 'Primary' | 'Secondary' | 'Success' | 'Warning'> =
		{
			0: 'Primary',
			1: 'Secondary',
			2: 'Success',
			3: 'Warning',
		};

	function handleToggleVariant() {
		const numberVariant = makeData.random.number(0, 2);
		const numberStyle = makeData.random.number(0, 3);
		setConfig({
			variant: VARIANT[numberVariant],
			style: STYLE[numberStyle],
		});
	}

	return (
		<Button
			variant={config.variant}
			colorStyle={config.style}
			onClick={handleToggleVariant}
			className="!w-72 !h-12"
		>
			{config.variant} | {config.style}
		</Button>
	);
}
