function error(...args: any[]) {
	if (!import.meta.env.DEV) return;
	console.error([...args]);
}

export const log = { error };
