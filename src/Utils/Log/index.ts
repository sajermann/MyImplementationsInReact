function error(...args: any[]) {
	// TODO: Change this ANY for example string[]
	if (!import.meta.env.DEV) return;
	console.error([...args]);
}

export const log = { error };
