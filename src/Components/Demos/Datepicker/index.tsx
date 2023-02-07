import { Datepicker } from '~/Components/Datepicker';
import { useTranslation } from '~/Hooks/UseTranslation';

export function DatepickerDemo() {
	const { translate } = useTranslation();
	return (
		<div className="w-full h-64 flex items-center justify-center">
			<Datepicker
				label={translate('DATE')}
				placeholder={translate('DD/MM/YYYY')}
				id="Date1"
			/>
		</div>
	);
}
