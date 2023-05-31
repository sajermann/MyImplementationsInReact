import * as PopoverRadix from '@radix-ui/react-popover';
import { ChangeEvent, useCallback, useRef, useState } from 'react';
import { managerClassNames } from '~/Utils/ManagerClassNames';
import { Input } from '../Input';
import { Main } from '../Main';

type Props = {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	results: string[];
	isLoading?: boolean;
	searchValue: string;
};
export function Absolute({ onChange, results, isLoading, searchValue }: Props) {
	const refInputSearch = useRef<HTMLDivElement | null>(null);
	const [currentSide, setCurrentSide] = useState('bottom');
	const onRefChange = useCallback((node: HTMLDivElement) => {
		if (node !== null) {
			setCurrentSide(node.attributes['data-side' as unknown as number].value);
		}
	}, []);
	const width = refInputSearch.current?.offsetWidth;
	return (
		<PopoverRadix.Root open>
			<PopoverRadix.Trigger asChild>
				<Input
					absolute
					onChange={onChange}
					ref={refInputSearch}
					searchValue={searchValue}
					isLoading={isLoading}
					currentSide={currentSide}
				/>
			</PopoverRadix.Trigger>
			<PopoverRadix.Portal>
				<PopoverRadix.Content
					ref={onRefChange}
					onOpenAutoFocus={e => e.preventDefault()}
					side="bottom"
					align="center"
					className={managerClassNames([
						{ 'opacity-0': searchValue === '' || isLoading },
						{ 'border w-full rounded-lg p-2': true },
						{ 'bg-white dark:bg-gray-800 ': true },
						{ 'rounded-b-none border-b-0': currentSide === 'top' },
						{
							'rounded-t-none border-t-0':
								!currentSide || currentSide === 'bottom',
						},
					])}
					style={{ width }}
				>
					<Main
						results={results}
						searchValue={searchValue}
						isLoading={isLoading}
					/>
				</PopoverRadix.Content>
			</PopoverRadix.Portal>
		</PopoverRadix.Root>
	);
}
