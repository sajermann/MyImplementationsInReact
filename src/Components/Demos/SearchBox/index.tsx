import { useState } from 'react';

import { SearchBox } from '~/Components/SearchBox';
import { useTranslation } from '~/Hooks/UseTranslation';
import { makeData } from '~/Utils/MakeData';

export function SearchBoxDemo() {
	const data = makeData.countries();
	const { translate } = useTranslation();
	const [search, setSearch] = useState('');

	return <p>{translate('UNDER_CONSTRUCTION')}</p>;
}
