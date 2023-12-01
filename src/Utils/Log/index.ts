function error(...args: string[]) {
	if (!import.meta.env.DEV) return;
	console.error([...args]);
}

export const log = { error };
