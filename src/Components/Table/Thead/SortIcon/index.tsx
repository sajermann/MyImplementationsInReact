import { Header } from '@tanstack/react-table';

const config = {
	asc: ' 🔼',
	desc: ' 🔽',
};

export function SortIcon<T>({ header }: { header: Header<T, unknown> }) {
	const opt = header.column.getIsSorted() as 'asc' | 'desc';
	if (!opt) return null;
	return <span>{config[opt]}</span>;
}
