export function showInDevelopment(obj: { [i: string]: string }) {
	if (!import.meta.env.DEV) return {};
	return obj;
}

export function testIdOnlyDev(testid: string) {
	if (!import.meta.env.DEV) return {};
	return { 'data-testid': testid };
}
