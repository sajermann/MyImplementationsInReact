import { useEffect } from 'react';
import { useBreadcrumbs } from '~/Hooks/UseBreadcrumbs';
import { useTranslation } from '~/Hooks/UseTranslation';

export function NotFound() {
	const { translate } = useTranslation();
	const { breadcrumbs, setBreadcrumbs } = useBreadcrumbs();

	useEffect(() => {
		setTimeout(() => {
			setBreadcrumbs(prev => [
				...prev,
				{ label: translate('NOT_FOUND_PAGE'), link: undefined },
			]);
		}, 1);
	}, []);
	console.log({ breadcrumbs });
	return <div>{translate('NOT_FOUND_PAGE')}</div>;
}
