import { BoxScroll } from '~/Components/BoxScroll';
import { useTranslation } from '~/Hooks/UseTranslation';
import { managerClassNames } from '~/Utils/ManagerClassNames';

type Props = {
	searchValue: string;
	results: string[];
	isLoading?: boolean;
};

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

export function Main({ searchValue, results, isLoading }: Props) {
	const { translate } = useTranslation();
	return (
		<BoxScroll
			className={managerClassNames([
				{ 'max-h-0': searchValue === '' },
				{ 'max-h-96': searchValue !== '' },
				{ 'overflow-auto transition-[max-height] duration-500': true },
			])}
		>
			{searchValue !== '' && !isLoading && (
				<>
					<div className="py-2 border-b-2 mb-2 w-full sticky top-0 bg-white dark:bg-dark-600">
						{translate(results.length > 0 ? 'RESULTS' : 'NO_DATA')}
					</div>
					<ul className="m-0">
						{results.map(result => (
							<li key={result}>{highlightLetters(result, searchValue)}</li>
						))}
					</ul>
				</>
			)}
		</BoxScroll>
	);
}
