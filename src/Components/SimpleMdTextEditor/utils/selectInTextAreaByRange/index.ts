import { RefObject } from 'react';

type TProps = {
	start: number;
	end: number;
	ref: RefObject<HTMLTextAreaElement>;
};
export function selectInTextAreaByRange({ ref, start, end }: TProps) {
	const selection = window.getSelection();
	console.log({ selection, ref });
	if (!selection || !ref.current) {
		return;
	}

	if (ref.current.value === '') {
		console.error('Textarea is empty.');
		return;
	}

	if (
		start < 0 ||
		end <= 0 ||
		start >= ref.current.value.length ||
		end > ref.current.value.length
	) {
		console.error('Invalid Index.');
		return;
	}
	console.log('Aqui', start, end);
	ref.current.setSelectionRange(start, end, 'forward');
}
