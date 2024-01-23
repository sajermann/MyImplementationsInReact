export function demoveDuplicateds(dataToInsert: string[]): string[] {
	return [...new Set(dataToInsert)];
}
