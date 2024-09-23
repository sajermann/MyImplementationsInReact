import { Header } from '@tanstack/react-table';
import { Icons } from '~/Components/Icons';

const config = {
	asc: <Icons nameIcon="arrowSingleLeft" className="w-5	rotate-90" />,
	desc: <Icons nameIcon="arrowSingleLeft" className="w-5	-rotate-90" />,
};

export function SortIcon<T>({ header }: { header: Header<T, unknown> }) {
	const opt = header.column.getIsSorted() as 'asc' | 'desc';
	if (!opt) return null;
	return config[opt];
}
