import { Datepicker } from '~/Components/Datepicker';
import { useTranslation } from '~/Hooks/UseTranslation';

export function DatepickerDemo() {
	const { translate } = useTranslation();
	return (
		<Datepicker
			label={translate('DATE')}
			placeholder={translate('DD/MM/YYYY')}
			id="Date1"
		/>
	);
}
