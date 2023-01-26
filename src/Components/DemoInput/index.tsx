import { useTranslation } from '~/Hooks/UseTranslation';
import { Input } from '../Input';

export function DemoInput() {
	const { translate } = useTranslation();
	return (
		<div className="w-full h-64 flex items-center justify-center">
			<Input
				placeholder={translate('REMOVE_NUMBERS')}
				id="Label"
				label={translate('REMOVE_NUMBERS')}
				onBeforeChange={{ removeNumber: true }}
				containerProps={{ className: 'w-72' }}
			/>
		</div>
	);
}
