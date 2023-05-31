import { useState } from 'react';

import { SearchBox } from '~/Components/SearchBox';
import { makeData } from '~/Utils/MakeData';

export function SearchBoxDemo() {
	const data = makeData.countries();
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
			<SearchBox
				absolute
				searchValue={searchAbsoluteConstant}
				onChange={e => setSearchAbsoluteConstant(e.target.value)}
				results={filterConstant(searchAbsoluteConstant)}
			/>
		</div>
	);
}
