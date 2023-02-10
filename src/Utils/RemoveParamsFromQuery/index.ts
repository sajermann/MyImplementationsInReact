export function removeParamsFromQuery(str: string, name: string) {
	const pattern = new RegExp(`&?${name}=\\d+&?`, 'g');
	return str.replace(pattern, (match, offset, string) =>
		offset === 0 || offset + match.length === string.length ? '' : '&'
	);
}
