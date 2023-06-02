export function filterByType(
	filterType: string,
	filterValue: string,
	valueCell: string
) {
	const config: Record<string, boolean> = {
		equals: filterValue === valueCell,
		different: filterValue !== valueCell,
		bigger: Number(valueCell) > Number(filterValue),
		smaller: Number(valueCell) < Number(filterValue),
		starts: valueCell.startsWith(filterValue),
		ends: valueCell.endsWith(filterValue),
		contains: valueCell.includes(filterValue),
	};

	return config[filterType];
}
