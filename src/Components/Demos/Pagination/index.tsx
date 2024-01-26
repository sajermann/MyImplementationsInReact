import { PaginationModel } from 'ultimate-pagination';

import { Button } from '~/Components/Button';
import { Icons } from '~/Components/Icons';
import { Select } from '~/Components/Select';
import { usePaginationModel } from '~/Hooks/UsePaginationModel';
import { useTranslation } from '~/Hooks/UseTranslation';

type TProps = {
	paginationModel?: PaginationModel;
	onChange?: (page: number) => void;
	currentPage?: number;
	totalPages?: number;
};

export function PaginationDemo({
	paginationModel,
	onChange,
	currentPage,
	totalPages,
}: TProps) {
	const { translate } = useTranslation();
	const totalPagesInternal = totalPages || 9;
	const {
		currentPage: currentPageInternal,
		onChange: onChangeInternal,
		paginationModel: paginationModelInternal,
	} = usePaginationModel({
		totalPages: totalPagesInternal,
		boundaryPagesRange: 1,
		siblingPagesRange: 1,
		defaultCurrentPage: 1,
	});

	return (
		<div className="flex items-center gap-2 flex-wrap">
			<Button
				disabled={(paginationModel || paginationModelInternal)[0].isActive}
				onClick={() => {
					if (onChange) {
						onChange(
							Number((paginationModel || paginationModelInternal)[0].value)
						);
					} else {
						onChangeInternal(
							Number((paginationModel || paginationModelInternal)[0].value)
						);
					}
				}}
				iconButton="squared"
			>
				<Icons nameIcon="arrowPairLeft" />
			</Button>
			<Button
				disabled={(paginationModel || paginationModelInternal)[1].isActive}
				onClick={() => {
					if (onChange) {
						onChange(
							Number((paginationModel || paginationModelInternal)[1].value)
						);
					} else {
						onChangeInternal(
							Number((paginationModel || paginationModelInternal)[1].value)
						);
					}
				}}
				iconButton="squared"
			>
				<Icons nameIcon="arrowSingleLeft" />
			</Button>

			<Select
				className={totalPages ? 'w-32' : 'w-24'}
				menuPosition="fixed"
				isSearchable={false}
				value={{
					value: currentPage || currentPageInternal,
					label: `${currentPage || currentPageInternal} ${translate('OF')} ${
						totalPages || totalPagesInternal
					}`,
				}}
				defaultValue={{
					value: 1,
					label: `${1} ${translate('OF')} ${totalPages || totalPagesInternal}`,
				}}
				options={Array.from(
					{ length: totalPagesInternal },
					(_, i) => i + 1
				).map(itemNumber => ({
					value: itemNumber,
					label: `${itemNumber} ${translate('OF')} ${
						totalPages || totalPagesInternal
					}`,
				}))}
				onChange={e => {
					if (onChange) {
						onChange(e?.value || 1);
					} else {
						onChangeInternal(e?.value || 1);
					}
				}}
			/>

			<Button
				disabled={(paginationModel || paginationModelInternal).at(-2)?.isActive}
				onClick={() => {
					if (onChange) {
						onChange(
							Number((paginationModel || paginationModelInternal).at(-2)?.value)
						);
					} else {
						onChangeInternal(
							Number((paginationModel || paginationModelInternal).at(-2)?.value)
						);
					}
				}}
				iconButton="squared"
			>
				<Icons nameIcon="arrowSingleRight" />
			</Button>

			<Button
				disabled={(paginationModel || paginationModelInternal).at(-1)?.isActive}
				onClick={() => {
					if (onChange) {
						onChange(
							Number((paginationModel || paginationModelInternal).at(-1)?.value)
						);
					} else {
						onChangeInternal(
							Number((paginationModel || paginationModelInternal).at(-1)?.value)
						);
					}
				}}
				iconButton="squared"
			>
				<Icons nameIcon="arrowPairRight" />
			</Button>
		</div>
	);
}
