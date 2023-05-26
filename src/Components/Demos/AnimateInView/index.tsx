import { useTranslation } from '~/Hooks/UseTranslation';

export function AnimateInViewDemo() {
	const { translate } = useTranslation();
	return <p>{translate('UNDER_CONSTRUCTION')}</p>;
}
