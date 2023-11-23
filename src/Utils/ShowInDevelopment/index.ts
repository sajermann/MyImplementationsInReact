export function showInDevelopment(obj: { [i: string]: string }) {
	if (!import.meta.env.DEV) return {};
	return obj;
}
