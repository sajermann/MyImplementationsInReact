import { FormEvent, useCallback, useEffect, useRef, useState } from 'react';

type TProps = { last: Date; currentTarget: EventTarget & HTMLDivElement };
export function TextEditor() {
	const [htmlContent, setHtmlContent] = useState('');
	const [event, setEvent] = useState<TProps>({} as TProps);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		console.log(`Use Effect`, event);
		if (!event?.currentTarget?.innerHTML) {
			return () => {};
		}

		const timer = setTimeout(() => {
			console.log(`Batendo no timeout`);

			setHtmlContent(event.currentTarget.innerHTML);
			handleJump();
		}, 800);

		return () => clearTimeout(timer);
	}, [event]);

	const handleJump = () => {
		if (!ref.current) return;
		console.log('handleJump');
		const range = document.createRange();
		const selection = window.getSelection();

		console.log('handleJump', { selection });
		range.setStart(ref.current, ref.current?.childNodes.length);
		range.collapse(true);
		selection?.removeAllRanges();
		selection?.addRange(range);
	};

	const handleItalicClick = e => {
		e.preventDefault();
		if (!ref.current) return;
		ref.current.focus();
		if (
			!document.activeElement ||
			!ref.current.contains(document.activeElement)
		) {
			console.log('O elemento de entrada não está focado.');
			return;
		}

		console.log();

		const selectedText = window.getSelection()?.toString();
		if (!selectedText) {
			console.log('Nenhum texto selecionado.');
			return;
		}
		const start = window.getSelection()?.anchorOffset;
		const end = window.getSelection()?.focusOffset;

		const before = htmlContent.substring(0, start);
		const after = htmlContent.substring(end, htmlContent.length);
		console.log({ start, end, before, after });
		// const wrappedText = `<i>${selectedText}</i>`;

		// setHtmlContent(`${before}${wrappedText}${after}`);
	};

	const onInput = (e: FormEvent<HTMLDivElement>) => {
		console.log(`Inpout`, e.currentTarget);
		e.preventDefault();
		setEvent({
			currentTarget: e.currentTarget,
			last: new Date(),
		});
	};
	console.log(ref.current?.innerHTML);

	return (
		<div className="w-full bg-zinc-700 h-96">
			<button type="button" onMouseDown={handleItalicClick}>
				Itálico
			</button>
			<div
				ref={ref}
				contentEditable
				dangerouslySetInnerHTML={{ __html: htmlContent }}
				onInput={onInput}
				className="bg-transparent border w-full"
			/>
			Preview
			<div>{htmlContent}</div>
		</div>
	);
}
