import { Button } from '~/Components/Button';
import { ToPrint } from '~/Components/ToPrint';
import { usePrinter } from '~/Hooks/UsePrinter';
import { useTranslation } from '~/Hooks/UseTranslation';

export function PrintDemo() {
	const { translate } = useTranslation();
	const { componentRef, handlePreparePrint } = usePrinter();

	return (
		<ToPrint ref={componentRef}>
			<span>{translate('PRINT_ONLY_THIS_CONTENT')}</span>
			<Button
				colorStyle="Primary"
				variant="Outlined"
				onClick={handlePreparePrint}
				className="print:hidden"
			>
				{translate('PRINT')}
			</Button>
		</ToPrint>
	);
}
