import { ChangeEvent, forwardRef, LegacyRef } from 'react';
import { Icons } from '~/Components/Icons';
import { useTranslation } from '~/Hooks/UseTranslation';
import { managerClassNames } from '~/Utils/ManagerClassNames';

type Props = {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	isLoading?: boolean;
	absolute?: boolean;
	searchValue: string;
	currentSide?: string;
};

export const Input = forwardRef((props: Props, ref) => {
	const {
		onChange,
		isLoading,
		searchValue,
		absolute,
		currentSide = 'bottom',
	} = props;
	const { translate } = useTranslation();
	return (
		<div
			ref={ref as LegacyRef<HTMLDivElement>}
			className={managerClassNames([
				{ 'p-2 rounded-lg w-full': true },
				{ border: absolute },
				{
					'border-b-0 rounded-b-none':
						searchValue !== '' && !isLoading && currentSide === 'bottom',
				},
				{
					'border-t-0 rounded-t-none':
						searchValue !== '' && !isLoading && currentSide === 'top',
				},
			])}
		>
			<div
				className={managerClassNames([
					{ 'flex items-center bg-white w-full': true },
					{ 'overflow-hidden rounded p-2 w-full': true },
				])}
			>
				<input
					type="search"
					placeholder={translate('SEARCH_COUNTRIES')}
					className="text-black rounded outline-none flex-1"
					value={searchValue}
					onChange={onChange}
				/>
				{isLoading && (
					<Icons.LoadingCircle width="20px" height="20px" color="#44659d" />
				)}
			</div>
		</div>
	);
});
