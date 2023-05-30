import { useState } from 'react';

import { SearchBoxNew } from '~/Components/SearchBoxNew';
import { useTranslation } from '~/Hooks/UseTranslation';
import { makeData } from '~/Utils/MakeData';

export function SearchBoxDemo() {
	const data = makeData.countries();
	const { translate } = useTranslation();
	const [search, setSearch] = useState('');
	const [searchAbsoluteConstant, setSearchAbsoluteConstant] = useState('');

	function filterConstant(searchWord: string) {
		return data
			.filter(country =>
				country.name.toLowerCase().includes(searchWord.toLowerCase())
			)
			.map(item => item.name);
	}

	return (
		<div>
			<SearchBoxNew
				absolute
				searchValue={searchAbsoluteConstant}
				onChange={e => setSearchAbsoluteConstant(e.target.value)}
				results={filterConstant(searchAbsoluteConstant)}
				containerProps={{
					className: 'z-[3]',
				}}
			/>
		</div>
	);
}
