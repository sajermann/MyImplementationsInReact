import { Input } from '~/Components/Input';
import { useTranslation } from '~/Hooks/UseTranslation';

export function InputDemo() {
	const { translate } = useTranslation();
	return (
		<Input
			placeholder={translate('REMOVE_NUMBERS')}
			id="Label"
			label={translate('REMOVE_NUMBERS')}
			onBeforeChange={{ removeNumber: true }}
			containerProps={{ className: 'w-72' }}
		/>
	);
}
