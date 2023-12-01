import { ContainerInput } from '~/Components/ContainerInput';
import { Datepicker } from '~/Components/Datepicker';
import { Label } from '~/Components/Label';
import { useTranslation } from '~/Hooks/UseTranslation';

export function DatepickerDemo() {
	const { translate } = useTranslation();
	return (
		<ContainerInput>
			<Label htmlFor="Date1">{translate('DATE')}</Label>
			<Datepicker placeholder={translate('DD/MM/YYYY')} id="Date1" />
		</ContainerInput>
	);
}
