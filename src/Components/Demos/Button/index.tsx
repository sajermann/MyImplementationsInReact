import { useState } from 'react';

import { Button } from '~/Components/Button';
import { makeData } from '~/Utils/MakeData';

type Props = {
	variant: 'default' | 'outlined' | 'option';
	style: 'primary' | 'secondary' | 'success' | 'warning';
};

export function ButtonDemo() {
	const [config, setConfig] = useState<Props>({
		variant: 'default',
		style: 'primary',
	});

	const VARIANT: Record<number, 'default' | 'outlined' | 'option'> = {
		0: 'default',
		1: 'outlined',
		2: 'option',
	};

	const STYLE: Record<number, 'primary' | 'secondary' | 'success' | 'warning'> =
		{
			0: 'primary',
			1: 'secondary',
			2: 'success',
			3: 'warning',
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
