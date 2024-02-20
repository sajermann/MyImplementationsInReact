import { useQuery } from '@tanstack/react-query';
import { delay } from '@sajermann/utils/Delay';

import { usePagination } from '~/Hooks/UsePagination';
import { Table } from '~/Components/Table';
import { useTranslation } from '~/Hooks/UseTranslation';
import { TPerson } from '~/Types/TPerson';
import { makeData } from '~/Utils/MakeData';
import { useColumns } from '~/Hooks/UseColumns';
import { Search } from '~/Components/Filter/Search';
import { Section } from '~/Components/Section';
import { Main } from '~/Components/Main';
import { QuickAccessGithub } from '~/Components/QuickAccessGithub';

export function PaginationPage() {
	const {
		pageCount,
		setPageCount,
		pagination,
		setPagination,
		filterQuery,
		setFilterQuery,
		backQuery,
	} = usePagination();
	const { translate } = useTranslation();
	const { columns } = useColumns();

	async function load(query: string) {
		if (query === '') return [];
		console.log('Backend...', { query });
		await delay(3000);
		const result = makeData.personWithPagination({
			pageSize: pagination.pageSize,
		});

		setPageCount(result.pageCount);
		return result.data;
	}

	const { data, isFetching } = useQuery<TPerson[]>({
		queryKey: ['pagination', backQuery],
		queryFn: () => load(backQuery),
		keepPreviousData: true,
	});

	return (
		<Main data-content="content-main">
			<Section title={translate('PAGINATION')} variant="h1">
				{translate('IMPLEMENTS_PAGINATION_MODE')}
			</Section>
			<Section title={translate('CODES')} variant="h2">
				<div className="flex gap-2 bg-dark-400">
					<QuickAccessGithub name="Pagination" />
				</div>
			</Section>
			<Section title={translate('IMPLEMENTS')} variant="h2">
				<div className="flex flex-col gap-2">
					<div>
						<strong>{translate('NOTE')}: </strong>
						<span>{translate('NOTE_PAGINATION_MODE')} </span>
						<span>{JSON.stringify({ backQuery })}</span>
					</div>
					<Search
						filterParams={filterQuery}
						setFilterParams={setFilterQuery}
						isLoading={isFetching}
					/>

					<Table
						isLoading={isFetching}
						columns={[...columns]}
						data={data || []}
						pagination={{
							pageCount,
							pageIndex: pagination.pageIndex,
							pageSize: pagination.pageSize,
							setPagination,
							disabledActions: isFetching,
						}}
						disabledVirtualization
					/>
				</div>
			</Section>
		</Main>
	);
}
