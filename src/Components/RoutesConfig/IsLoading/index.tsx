import { useEffect } from 'react';
import { useTranslation } from '~/Hooks/UseTranslation';
import { useLoadingLazy } from '~/Store/UseLoadingLazy';

export function IsLoading() {
	const { translate } = useTranslation();
	const { setIsLoadingLazy } = useLoadingLazy();

	useEffect(() => {
		setIsLoadingLazy(true);
		return () => setIsLoadingLazy(false);
	}, []);
	return <p>{translate('LOADING...')}</p>;
}
