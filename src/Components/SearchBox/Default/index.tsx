import { ChangeEvent } from 'react';
import { managerClassNames } from '~/Utils/ManagerClassNames';
import { Input } from '../Input';
import { Main } from '../Main';

type Props = {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	results: string[];
	isLoading?: boolean;
	searchValue: string;
};
export function Default({ onChange, results, isLoading, searchValue }: Props) {
	return (
		<div
			className={managerClassNames([
				{ 'w-full flex flex-col border rounded-lg': true },
				{ 'bg-transparent': true },
			])}
		>
			<Input
				onChange={onChange}
				searchValue={searchValue}
				isLoading={isLoading}
			/>

			<div
				className={managerClassNames([
					{ 'p-2': searchValue !== '' && !isLoading },
					{ 'opacity-0': searchValue === '' || isLoading },
				])}
			>
				<Main
					results={results}
					searchValue={searchValue}
					isLoading={isLoading}
				/>
			</div>
		</div>
	);
}
