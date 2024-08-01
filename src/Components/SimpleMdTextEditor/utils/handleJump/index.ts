import { RefObject } from 'react';

export function handleJump(ref: RefObject<HTMLDivElement>) {
	if (!ref.current) return;
	const range = document.createRange();
	const selection = window.getSelection();
	range.setStart(ref.current, ref.current?.childNodes.length);
	range.collapse(true);
	selection?.removeAllRanges();
	selection?.addRange(range);
}
