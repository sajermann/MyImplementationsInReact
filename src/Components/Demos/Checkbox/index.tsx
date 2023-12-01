import { Checkbox } from '~/Components/Checkbox';
import { ContainerInput } from '~/Components/ContainerInput';
import { Label } from '~/Components/Label';

export function CheckboxDemo() {
	return (
		<ContainerInput className="items-center">
			<Label htmlFor="checkbox">Checkbox</Label>
			<Checkbox id="checkbox" />
		</ContainerInput>
	);
}
