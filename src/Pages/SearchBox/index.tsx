import { Main } from '~/Components/Main';
import { useTranslation } from '~/Hooks/UseTranslation';
import Section from '~/Components/Section';
import { ComponentBlock } from '~/Components/ComponentBlock';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';

import { ChangeEvent, useState } from 'react';
import { makeData } from '~/Utils/MakeData';
import { delay } from '@sajermann/utils/Delay';
import { Popover } from '~/Components/Popover';
import { SearchBox } from '~/Components/SearchBox';

export function SearchBoxPage() {
	const data = makeData.countries();
	const { translate } = useTranslation();
	const [searchAbsoluteConstant, setSearchAbsoluteConstant] = useState('');

	const [searchAbsoluteAsync, setSearchAbsoluteAsync] = useState('');
	const [isLoadingAbsolute, setIsLoadingAbsolute] = useState(false);
	const [resultsAsyncAbsolute, setResultsAsyncAbsolute] = useState<string[]>(
		[]
	);

	const [searchStaticConstant, setSearchStaticConstant] = useState('');

	const [searchStaticAsync, setSearchStaticAsync] = useState('');
	const [isLoadingStatic, setIsLoadingStatic] = useState(false);
	const [resultsAsyncStatic, setResultsAsyncStatic] = useState<string[]>([]);

	async function handleSearch(
		e: ChangeEvent<HTMLInputElement>,
		setIsLoading: (dataToToggleLoading: boolean) => void,
		setSearchAsync: (dataToSearch: string) => void,
		setResultsAsync: (dataToResults: string[]) => void
	) {
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

	function filterConstant(searchWord: string) {
		return data
			.filter(country =>
				country.name.toLowerCase().includes(searchWord.toLowerCase())
			)
			.map(item => item.name);
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
				<span>{translate('SEARCH_BOX_DESCRIPTION_ABSOLUTE')}</span>
				<Section title={translate('CONSTANTS_RESULTS')} variant="h3">
					<ComponentBlock className="min-h-[8rem] h-full !justify-start">
						<SearchBox
							absolute
							searchValue={searchAbsoluteConstant}
							onChange={e => setSearchAbsoluteConstant(e.target.value)}
							results={filterConstant(searchAbsoluteConstant)}
						/>
					</ComponentBlock>
				</Section>

				<Section title={translate('ASYNC_RESULTS')} variant="h3">
					<ComponentBlock className="min-h-[8rem] h-full !justify-start">
						<SearchBox
							absolute
							isLoading={isLoadingAbsolute}
							searchValue={searchAbsoluteAsync}
							onChange={e =>
								handleSearch(
									e,
									setIsLoadingAbsolute,
									setSearchAbsoluteAsync,
									setResultsAsyncAbsolute
								)
							}
							results={resultsAsyncAbsolute}
						/>
					</ComponentBlock>
				</Section>
			</Section>

			<Section title={translate('DEFAULT')} variant="h2">
				<span>{translate('SEARCH_BOX_DESCRIPTION_STATIC')}</span>
				<Section title={translate('CONSTANTS_RESULTS')} variant="h3">
					<ComponentBlock className="min-h-[8rem] h-full !justify-start">
						<SearchBox
							searchValue={searchStaticConstant}
							onChange={e => setSearchStaticConstant(e.target.value)}
							results={filterConstant(searchStaticConstant)}
						/>
					</ComponentBlock>
				</Section>

				<Section title={translate('ASYNC_RESULTS')} variant="h3">
					<ComponentBlock className="min-h-[8rem] h-full !justify-start">
						<SearchBox
							isLoading={isLoadingStatic}
							searchValue={searchStaticAsync}
							onChange={e =>
								handleSearch(
									e,
									setIsLoadingStatic,
									setSearchStaticAsync,
									setResultsAsyncStatic
								)
							}
							results={resultsAsyncStatic}
						/>
					</ComponentBlock>
				</Section>
			</Section>

			<Section title={translate('BATATA')} variant="h2">
				<Popover
					isOpen={false}
					trigger={
						<button
							className="w-5 h-4 flex items-center justify-center"
							type="button"
							onClick={console.log}
						>
							B
						</button>
					}
				>
					<div className="w-48 h-48">Test</div>
				</Popover>
			</Section>
		</Main>
	);
}
