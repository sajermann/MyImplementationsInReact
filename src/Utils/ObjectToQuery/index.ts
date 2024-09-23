export function objectToQuery(data: { [index: string]: unknown }) {
	let resultFinal = '';

	Object.keys(data).forEach(item => {
		if (data[item] !== '') {
			resultFinal += `${item}=${data[item]}&`;
		}
	});
	return resultFinal.substring(0, resultFinal.length - 1);
}
