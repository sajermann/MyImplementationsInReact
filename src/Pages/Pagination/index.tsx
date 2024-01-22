import { Button } from '~/Components/Button';
import { Pagination } from '~/Components/Pagination';
import { usePagination } from '~/Hooks/UsePagination2';

export function PaginationPage() {
	const { pageNumbers, currentPage, onChange } = usePagination({
		boundaryPagesRange: 2,
		siblingPagesRange: 2,
		totalPages: 1000,
	});
	return (
		<div>
			{/* <Pagination onPageChange={console.log} page={10} total={100} /> */}
			{JSON.stringify({ pageNumbers, currentPage })}
			<div className="flex gap-2">
				<Button onClick={() => onChange(currentPage - 1)}>Voltar</Button>
				<span>{currentPage}</span>
				<Button onClick={() => onChange(currentPage + 1)}>Avancar</Button>
			</div>

			<div className="flex gap-2">
				{pageNumbers.map((item, i) => (
					<div key={`${item}-${i * 1}`}>
						<Button className="w-20">{item}</Button>
					</div>
				))}
			</div>
		</div>
	);
}
