import { useState } from 'react';
import { PaginationModelItem } from 'ultimate-pagination';
import { Button } from '~/Components/Button';
import { CodeBlock } from '~/Components/CodeBlock';
import { ContainerInput } from '~/Components/ContainerInput';
import { Input } from '~/Components/Input';
import { Label } from '~/Components/Label';
import { Main } from '~/Components/Main';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';
import Section from '~/Components/Section';
import { Select } from '~/Components/Select';
import { usePaginationModel } from '~/Hooks/UsePaginationModel';
import { useTranslation } from '~/Hooks/UseTranslation';

export function PaginationPage() {
	const { translate } = useTranslation();
	const [boundaryPagesRange, setBoundaryPagesRange] = useState(1);
	const [siblingPagesRange, setSiblingPagesRange] = useState(1);
	const [totalPages, setTotalPages] = useState(20);
	const { currentPage, onChange, paginationModel } = usePaginationModel({
		totalPages,
		boundaryPagesRange,
		siblingPagesRange,
		defaultCurrentPage: 1,
	});

	function formattValue({ type, value }: PaginationModelItem) {
		const RENDER = {
			FIRST_PAGE_LINK: '<<',
			PREVIOUS_PAGE_LINK: '<',
			PAGE: value,
			ELLIPSIS: '...',
			NEXT_PAGE_LINK: '>',
			LAST_PAGE_LINK: '>>',
		};

		return RENDER[type];
	}

	return (
		<Main data-content="content-main">
			<Section heading={translate('PAGINATION')}>
				{`${translate('IMPLEMENTS_COMPONENT')} ${translate(
					'PAGINATION'
				)} ${translate('USING_THE_LIB')}`}{' '}
				ultimate-pagination
			</Section>
			<Section title={translate('INSTALLATION_OF_LIB')} variant="h2">
				<CodeBlock>npm i ultimate-pagination;</CodeBlock>
			</Section>
			<Section title={translate('CODES')} variant="h2">
				<div className="flex gap-2">
					<QuickAccessGithub name="Pagination" />
				</div>
			</Section>

			<Section title={translate('PARAMS')} variant="h2">
				<div className="flex gap-4 my-4">
					<ContainerInput>
						<Label>Boundary</Label>
						<Input
							type="number"
							value={boundaryPagesRange}
							onChange={({ target }) =>
								setBoundaryPagesRange(Number(target.value))
							}
						/>
					</ContainerInput>
					<ContainerInput>
						<Label>Sibling</Label>
						<Input
							type="number"
							value={siblingPagesRange}
							onChange={({ target }) =>
								setSiblingPagesRange(Number(target.value))
							}
						/>
					</ContainerInput>
					<ContainerInput>
						<Label>Page</Label>
						<Input
							type="number"
							value={currentPage}
							onChange={({ target }) => onChange(Number(target.value))}
						/>
					</ContainerInput>
					<ContainerInput>
						<Label>Max Pages</Label>
						<Input
							type="number"
							value={totalPages}
							onChange={({ target }) => setTotalPages(Number(target.value))}
						/>
					</ContainerInput>
				</div>
			</Section>

			<Section title={translate('WITH_NUMBERS')} variant="h2">
				<div className="flex gap-2">
					{paginationModel.map(item => (
						<div key={item.key}>
							<Button
								disabled={item.isActive}
								variant={item.isActive ? 'outlined' : 'default'}
								onClick={() => onChange(Number(item.value))}
								className="w-20"
							>
								{formattValue(item)}
							</Button>
						</div>
					))}
				</div>
			</Section>

			<Section title={translate('WITHOUT_NUMBERS')} variant="h2">
				<div className="flex gap-2">
					{paginationModel.map(item => {
						if (item.type === 'PAGE' || item.type === 'ELLIPSIS') return null;
						return (
							<div key={item.key}>
								<Button
									disabled={item.isActive}
									variant={item.isActive ? 'outlined' : 'default'}
									onClick={() => onChange(Number(item.value))}
									className="w-20"
								>
									{formattValue(item)}
								</Button>
							</div>
						);
					})}
				</div>
			</Section>

			<Section title={translate('WITHOUT_NUMBERS')} variant="h2">
				<div>
					<div className="h-2" />
					<div className="flex items-center gap-2 flex-wrap">
						{paginationModel.map(item => {
							if (item.type === 'PAGE' || item.type === 'ELLIPSIS') return null;
							return (
								<div key={item.key}>
									<Button
										disabled={item.isActive}
										variant={item.isActive ? 'outlined' : 'default'}
										onClick={() => onChange(Number(item.value))}
										className="w-20"
									>
										{formattValue(item)}
									</Button>
								</div>
							);
						})}

						<span className="flex items-center gap-1">
							<div>Pág.</div>
							<strong>{currentPage}</strong>
							de <strong>{totalPages}</strong>
						</span>
						<ContainerInput className="w-max flex-row items-center">
							<Label className="whitespace-nowrap" htmlFor="pageNumber">
								{translate('GO_TO_PAGE')}
							</Label>
							<Input
								type="number"
								id="pageNumber"
								defaultValue={currentPage}
								onBlur={e => {
									const page = e.target.value ? Number(e.target.value) - 1 : 0;
									onChange(page + 1);
								}}
								min={1}
								max={currentPage}
							/>
						</ContainerInput>

						{/* <ContainerInput className="w-max flex-row items-center">
							<Label htmlFor="isActive">{translate('ROWS')}</Label>
							<Select
								menuPosition="fixed"
								isSearchable={false}

								value={
									DEFAULT_OPTIONS.find(
										item => item.value === table.getState().pagination.pageSize
									)?.value
								}
								options={DEFAULT_OPTIONS}
								onChange={e => {
									table.setPageSize(Number(e.target.value));
								}}
								id="isActive"
							/>
						</ContainerInput> */}
					</div>
				</div>
			</Section>
		</Main>
	);
}
