/**
 * ### For use of @sajermann/ui-react
 */
function delay(delayMs: number): Promise<void> {
	return new Promise(resolve => {
		setTimeout(() => resolve(), delayMs);
	});
}

/**
 * ### For use of @sajermann/ui-react
 */
function generateGuid(): string {
	let d = new Date().getTime();
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
		// eslint-disable-next-line no-bitwise
		const r = (d + Math.random() * 16) % 16 | 0;
		d = Math.floor(d / 16);
		// eslint-disable-next-line no-bitwise
		return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
	});
}

export { delay, generateGuid };
