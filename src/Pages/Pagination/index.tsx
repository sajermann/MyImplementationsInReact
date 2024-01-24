import { useState } from 'react';
import { Button } from '~/Components/Button';
import { ContainerInput } from '~/Components/ContainerInput';
import { Input } from '~/Components/Input';
import { Label } from '~/Components/Label';
import { Pagination } from '~/Components/Pagination';
import { usePagination } from '~/Hooks/UsePagination2';

export function PaginationPage() {
	const [boundaryPagesRange, setBoundaryPagesRange] = useState(3);
	const [siblingPagesRange, setSiblingPagesRange] = useState(3);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1000);
	// const { config, currentPage, onChange, pages } = usePagination({
	// 	boundaryPagesRange,
	// 	siblingPagesRange,
	// 	totalPages,
	// });
	return (
		<div>
			<Pagination
				onPageChange={setCurrentPage}
				page={currentPage}
				total={totalPages}
				siblingPagesRange={siblingPagesRange}
				boundaryPagesRange={boundaryPagesRange}
			/>
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
			{/* 
			<div className="flex gap-2">
				<Button onClick={() => onChange(currentPage - 1)}>Voltar</Button>
				<span>{currentPage}</span>
				<Button onClick={() => onChange(currentPage + 1)}>Avancar</Button>
			</div>
			<pre>
				<p>first: {JSON.stringify(config.first)}</p>
				<p>boundaryLeft: {JSON.stringify(config.boundaryLeft)}</p>
				<p>siblingLeft: {JSON.stringify(config.siblingLeft)}</p>
				<p>current: {JSON.stringify(config.current)}</p>
				<p>siblingRight: {JSON.stringify(config.siblingRight)}</p>
				<p>boundaryRight: {JSON.stringify(config.boundaryRight)}</p>
				<p>last: {JSON.stringify(config.last)}</p>
				<p>pages: {JSON.stringify(pages)}</p>
			</pre>
			<div className="flex gap-2">
				{pages.map((item, i) => (
					<div key={`${item}-${i * 1}`}>
						<Button
							variant={item === String(currentPage) ? 'outlined' : 'default'}
							onClick={() => onChange(Number(item))}
							className="w-20"
						>
							{item}
						</Button>
					</div>
				))}
			</div> */}
		</div>
	);
}
