import { ContainerInput } from '~/Components/ContainerInput';
import { Input } from '~/Components/Input';
import { Label } from '~/Components/Label';
import { useTranslation } from '~/Hooks/UseTranslation';

export function InputDemo() {
	const { translate } = useTranslation();
	return (
		<ContainerInput>
			<Label htmlFor="Label">{translate('REMOVE_NUMBERS')}</Label>
			<Input
				placeholder={translate('REMOVE_NUMBERS')}
				id="Label"
				onBeforeChange={{ removeNumber: true }}
			/>
		</ContainerInput>
	);
}
