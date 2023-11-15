import { ContainerInput } from '~/Components/ContainerInput';
import { Datepicker } from '~/Components/Datepicker';
import { Label } from '~/Components/Label';
import { useTranslation } from '~/Hooks/UseTranslation';

export function DatepickerDemo() {
	const { translate } = useTranslation();
	return (
		<ContainerInput>
			<Label htmlFor="Label">{translate('REMOVE_NUMBERS')}</Label>
			<Datepicker
				label={translate('DATE')}
				placeholder={translate('DD/MM/YYYY')}
				id="Date1"
			/>
		</ContainerInput>
	);
}
