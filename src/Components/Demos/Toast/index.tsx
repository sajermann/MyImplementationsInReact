import { Button } from '~/Components/Button';
import { useToast } from '~/Hooks/UseToast';
import { useTranslation } from '~/Hooks/UseTranslation';

export function ToastDemo() {
	const { translate } = useTranslation();
	const { customToast } = useToast();

	return (
		<Button
			colorStyle="Success"
			onClick={() =>
				customToast({ msg: translate('I_AM_TOAST'), type: 'success' })
			}
		>
			{translate('SUCCESS')}
		</Button>
	);
}
