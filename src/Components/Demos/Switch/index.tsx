import { useState } from 'react';
import { Icons } from '~/Components/Icons';
import { Switch } from '~/Components/Switch';

export function SwitchDemo() {
	const [checked, setChecked] = useState(false);
	return (
		<div className="w-full h-full flex items-center justify-center">
			<Switch
				label="Switch"
				id="left"
				checked={checked}
				onChangge={e => setChecked(e)}
				checkedIcon={<Icons nameIcon="sun" />}
				uncheckedIcon={<Icons nameIcon="moon" />}
			/>
		</div>
	);
}
