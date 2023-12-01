import { useTranslation } from '~/Hooks/UseTranslation';
import { makeData } from '~/Utils/MakeData';
import { Select } from '~/Components/Select';
import { ContainerInput } from '~/Components/ContainerInput';
import { Label } from '~/Components/Label';

export function SelectDemo() {
	const { translate } = useTranslation();
	const result = makeData.vehicles(10);
	return (
		<ContainerInput>
			<Label htmlFor="vehicle">{translate('VEHICLES')}</Label>
			<Select
				id="vehicle"
				isClearable
				options={result}
				placeholder={translate('CHOOSE_VEHICLE')}
				menuPosition="fixed"
			/>
		</ContainerInput>
	);
}
