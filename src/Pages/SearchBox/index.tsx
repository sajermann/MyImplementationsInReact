import { Main } from '~/Components/Main';
import { useTranslation } from '~/Hooks/UseTranslation';
import Section from '~/Components/Section';
import { ComponentBlock } from '~/Components/ComponentBlock';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';
import { SearchBox } from '~/Components/SearchBox';
import { ChangeEvent, useState } from 'react';
import { makeData } from '~/Utils/MakeData';
import { delay } from '@sajermann/utils/Delay';

export function SearchBoxPage() {
	const { translate } = useTranslation();
	const [search, setSearch] = useState('');
	const [searchAsync, setSearchAsync] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [resultsAsync, setResultsAsync] = useState<string[]>([]);
	const data = makeData.countries();

	const filtredCountry = data
		.filter(country =>
			country.name.toLowerCase().includes(search.toLowerCase())
		)
		.map(item => item.name);

	async function handleSearch(e: ChangeEvent<HTMLInputElement>) {
		const { value } = e.target;
		setResultsAsync([]);
		setSearchAsync(value);
		if (value === '') {
			return;
		}
		setIsLoading(true);
		await delay(3000);
		setResultsAsync(
			data
				.filter(country =>
					country.name.toLowerCase().includes(value.toLowerCase())
				)
				.map(item => item.name)
		);
		setIsLoading(false);
	}

	return (
		<Main data-content="content-main">
			<Section title={translate('SEARCH_BOX')} variant="h1">
				{`${translate('IMPLEMENTS_COMPONENT')} ${translate('SEARCH_BOX')} `}
			</Section>

			<Section title={translate('CODES')} variant="h2">
				<div className="flex gap-2">
					<QuickAccessGithub name="SearchBox" />
				</div>
			</Section>

			<Section title={translate('ABSOLUTE')} variant="h2">
				<Section title={translate('ABSOLUTE')} variant="h3">
					<ComponentBlock className="min-h-[8rem] h-full !justify-start">
						<SearchBox
							alwaysOpenedResult
							absolute
							searchValue={search}
							onChange={e => setSearch(e.target.value)}
							results={filtredCountry}
						/>
					</ComponentBlock>
				</Section>
			</Section>

			<Section subHeading={translate('LOCKEDS_RESULTS')} className="mt-5">
				<ComponentBlock className="h-full">
					<SearchBox
						isLoading={isLoading}
						searchValue={searchAsync}
						onChange={handleSearch}
						results={resultsAsync}
					/>
				</ComponentBlock>
			</Section>
		</Main>
	);
}
