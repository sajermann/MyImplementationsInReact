/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useRef, useState } from 'react';
import { textEditorMdUtils } from './utils';

type TProps = 'bold' | 'italic' | 'link';

function convertToHtml(markdownText: string) {
	let html = markdownText;

	// Negrito
	html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

	// Itálico
	html = html.replace(/(\*|_)(.*?)\1/g, '<span class="italic">$2</span>');

	// Links
	html = html.replace(
		/\[(.*?)\]\((.*?)\)/g,
		'<a class="underline text-blue-500" href="$2">$1</a>',
	);

	// Listas não ordenadas
	html = html.replace(/(-|\*|\+)\s+(.*)/g, '<ul><li>$2</li></ul>');

	return html;
}

function MarkdownViewer({ text }: { text: string }) {
	const html = convertToHtml(text);

	return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

export function TextEditor() {
	const [textContent, setTextContent] = useState('');
	const ref = useRef<HTMLDivElement>(null);

	function handleAddTag({ tag, event }: { tag: TProps; event: MouseEvent }) {
		event.preventDefault();
		if (!ref.current) return;

		const CONFIG = {
			bold: textEditorMdUtils.toBold,
			italic: textEditorMdUtils.toItalic,
			link: textEditorMdUtils.toLink,
		};

		ref.current.focus();
		if (
			!document.activeElement ||
			!ref.current.contains(document.activeElement)
		) {
			console.log('O elemento de entrada não está focado.');
			return;
		}

		const selectedText = window.getSelection()?.toString();

		if (!selectedText) {
			console.log('Nenhum texto selecionado.');
			return;
		}
		const first = window.getSelection()?.anchorOffset;
		const last = window.getSelection()?.focusOffset;
		const textOnTextArea = ref.current?.innerHTML;
		if (first === undefined || last === undefined || !textOnTextArea) {
			console.log(`Um desses não tava selecionado`, {
				first,
				last,
				textOnTextArea,
			});
			return;
		}
		const start = first < last ? first : last;
		const end = last > first ? last : first;
		const before = textOnTextArea.substring(0, start);
		const after = textOnTextArea.substring(end, textOnTextArea.length);
		const {
			text: wrappedText,
			startForSelection,
			endForSelection,
		} = CONFIG[tag]({
			text: selectedText,
			startSelected: start,
			endSelected: end,
		});
		ref.current.innerHTML = `${before}${wrappedText}${after}`;
		setTextContent(`${before}${wrappedText}${after}`);
		textEditorMdUtils.selectTextByRange({
			ref,
			start: startForSelection,
			end: endForSelection,
		});
	}

	function onKeyUp(e: React.KeyboardEvent<HTMLDivElement>) {
		console.log('up', e.key, e.currentTarget.innerHTML);
		const text = e.currentTarget?.innerHTML;
		if (text === undefined || text === null || !ref.current) {
			return;
		}
		if (e.key === 'Enter') {
			e.preventDefault();
			const newText = textEditorMdUtils
				.removeInvalidTags(text)
				.concat('<br />');
			ref.current.innerHTML = newText;
			setTextContent(newText);
			// handleJump();
		}
		setTextContent(e.currentTarget.innerHTML);
	}

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

	function onInput(e: React.KeyboardEvent<HTMLDivElement>) {
		const text = e.currentTarget?.innerHTML;
		if (!ref.current) return;
		// if (text === undefined || text === null) {
		// 	return;
		// }
		// if (text === '<br>') {
		// 	setTextContent('');
		// 	return;
		// }
		// console.log('Change', { text }, textEditorMdUtils.removeInvalidTags(text));
		// ref.current.innerHTML = textEditorMdUtils.removeInvalidTags(text);
		// handleJump();
		// setTextContent(textEditorMdUtils.removeInvalidTags(text));
		setTextContent(text);
	}

	function onBlur() {}

	return (
		<div className="w-full bg-zinc-700 h-96 flex gap-2 flex-col p-2">
			<div className="flex gap-2">
				<button
					type="button"
					onMouseDown={e =>
						handleAddTag({ event: e as unknown as MouseEvent, tag: 'bold' })
					}
					className="font-bold p-2 border rounded w-8 h-8 flex items-center justify-center"
				>
					B
				</button>

				<button
					type="button"
					onMouseDown={e =>
						handleAddTag({ event: e as unknown as MouseEvent, tag: 'italic' })
					}
					className="italic p-2 border rounded w-8 h-8 flex items-center justify-center"
				>
					I
				</button>

				<button
					type="button"
					onMouseDown={e =>
						handleAddTag({ event: e as unknown as MouseEvent, tag: 'link' })
					}
					className="p-2 border rounded w-8 h-8 flex items-center justify-center"
				>
					L
				</button>
			</div>
			<div
				ref={ref}
				// contentEditable
				className="bg-transparent border w-full h-72"
				// onKeyUp={onKeyUp}
				onInput={onInput}
			>
				Bruno Sajermann
			</div>
			<p>{JSON.stringify({ textContent })}</p>
			<p>Preview</p>
			<MarkdownViewer text={ref.current?.innerHTML || ''} />
		</div>
	);
}
