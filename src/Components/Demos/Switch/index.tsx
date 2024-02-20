import { useState } from 'react';
import { ContainerInput } from '~/Components/ContainerInput';
import { Icons } from '~/Components/Icons';
import { Label } from '~/Components/Label';
import { Switch } from '~/Components/Switch';

export function SwitchDemo() {
	const [checked, setChecked] = useState(false);
	return (
		<ContainerInput className="items-center">
			<Label htmlFor="right">Switch</Label>
			<Switch
				id="right"
				checked={checked}
				onChangge={e => setChecked(e)}
				checkedIcon={<Icons nameIcon="sun" color="#fff" />}
				uncheckedIcon={<Icons nameIcon="moon" color="#fff" />}
			/>
		</ContainerInput>
	);
}
