import { RefObject } from 'react';

type TProps = {
	start: number;
	end: number;
	ref: RefObject<HTMLTextAreaElement>;
};
export function selectInTextAreaByRange({ ref, start, end }: TProps) {
	const selection = window.getSelection();
	if (!selection || !ref.current) {
		return;
	}

	if (ref.current.value === '') {
		console.error('Textarea está vazio.');
		return;
	}

	if (
		start < 0 ||
		end <= 0 ||
		start >= ref.current.value.length ||
		end > ref.current.value.length
	) {
		console.error('Índices inválidos.');
		return;
	}
	ref.current.setSelectionRange(start, end, 'forward');
}
