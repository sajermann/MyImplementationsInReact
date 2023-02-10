import { useTranslation } from '~/Hooks/UseTranslation';
import { makeData } from '~/Utils/MakeData';
import { Select } from '~/Components/Select';

export function SelectDemo() {
	const { translate } = useTranslation();
	const result = makeData.vehicles(10);
	return (
		<Select
			id="vehicle"
			label={translate('VEHICLES')}
			isClearable
			options={result}
			placeholder={translate('CHOOSE_VEHICLE')}
			menuPosition="fixed"
		/>
	);
}
