import { ChangeEvent, useState } from 'react';
import { useTranslation } from '~/Hooks/UseTranslation';
import { managerClassNames } from '~/Utils/ManagerClassNames';
import { BoxScroll } from '../BoxScroll';
import { Icons } from '../Icons';

type Props = {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	absolute?: boolean;
	results: string[];
	isLoading?: boolean;
	alwaysOpenedResult?: boolean;
	searchValue: string;
};
export function SearchBox({
	onChange,
	absolute,
	results,
	isLoading,
	searchValue,
	alwaysOpenedResult,
}: Props) {
	const { translate } = useTranslation();
	const [inputIsFocused, setInputIsFocused] = useState(false);

	function getId(a: string, b: number) {
		return `${a}-${b}`;
	}

	function highlightLetters(text: string, query: string) {
		const regex = new RegExp(`(${query})`, 'gi');
		const parts = text.split(regex);
		return parts.map((part, i) =>
			regex.test(part) ? (
				<span key={getId(part, i)} className="highlight">
					{part}
				</span>
			) : (
				part
			)
		);
	}

	return (
		<div className="w-full relative group">
			<div
				className={managerClassNames([
					{ 'w-full flex flex-col border p-4 rounded bg-dark-600': true },
					{ 'absolute z-[1]': absolute },
				])}
			>
				<div className="flex items-center bg-white w-full overflow-hidden rounded p-2">
					<input
						type="search"
						placeholder={translate('SEARCH_COUNTRIES')}
						className="text-black  rounded outline-none flex-1"
						value={searchValue}
						onChange={onChange}
						onFocus={() => setInputIsFocused(true)}
						onBlur={() => setInputIsFocused(false)}
					/>
					{isLoading && (
						<Icons.LoadingCircle width="20px" height="20px" color="#000000" />
					)}
				</div>

				{searchValue !== '' && !isLoading && (
					<BoxScroll
						className={managerClassNames([
							{ 'overflow-auto transition-[max-height]': true },
							{ 'duration-500 ease-out': true },
							{ 'group-hover:max-h-96 group-hover:ease-in ease-out': true },
							{ 'max-h-0': !alwaysOpenedResult },
							{ 'max-h-96': alwaysOpenedResult || inputIsFocused },
							{ 'ease-in': inputIsFocused },
							{ 'transition-[max-height]': inputIsFocused },
						])}
					>
						<div className="p-2 border-b-2 mb-2 w-full sticky top-0 bg-dark-600">
							{translate(results.length > 0 ? 'RESULTS' : 'NO_DATA')}
						</div>
						<ul>
							{results.map(result => (
								<li key={result}>{highlightLetters(result, searchValue)}</li>
							))}
						</ul>
					</BoxScroll>
				)}
			</div>
		</div>
	);
}
