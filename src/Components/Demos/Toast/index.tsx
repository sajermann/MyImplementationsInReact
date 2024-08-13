import { Button } from '~/Components/Button';
import { useToast } from '~/Hooks/UseToast';
import { useTranslation } from '~/Hooks/UseTranslation';

export function ToastDemo() {
	const { translate } = useTranslation();
	const { customReactToastify } = useToast();

	return (
		<Button
			colorStyle="success"
			onClick={() =>
				customReactToastify(translate('I_AM_TOAST'), { type: 'success' })
			}
		>
			{translate('SUCCESS')}
		</Button>
	);
}
