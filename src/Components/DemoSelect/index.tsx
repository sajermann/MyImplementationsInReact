import { useTranslation } from '~/Hooks/UseTranslation';
import { makeData } from '~/Utils/MakeData';
import { Select } from '../Select';

export function DemoSelect() {
	const { translate } = useTranslation();
	const result = makeData.vehicles(10);
	return (
		<main className="w-[90%] flex items-center justify-center flex-1 m-auto">
			<Select
				id="vehicle"
				label={translate('VEHICLES')}
				isClearable
				options={result}
				placeholder={translate('CHOOSE_VEHICLE')}
				onChange={console.log}
				menuPosition="fixed"
			/>
		</main>
	);
}
