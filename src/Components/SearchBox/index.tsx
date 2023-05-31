import { ChangeEvent } from 'react';
import { Absolute } from './Absolute';
import { Default } from './Default';

type Props = {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	results: string[];
	isLoading?: boolean;
	searchValue: string;
	absolute?: boolean;
};
export function SearchBox({
	onChange,
	results,
	isLoading,
	searchValue,
	absolute,
}: Props) {
	if (absolute) {
		return (
			<Absolute
				onChange={onChange}
				results={results}
				searchValue={searchValue}
				isLoading={isLoading}
			/>
		);
	}
	return (
		<Default
			onChange={onChange}
			results={results}
			searchValue={searchValue}
			isLoading={isLoading}
		/>
	);
}
