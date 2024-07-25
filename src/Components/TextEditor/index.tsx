/* eslint-disable jsx-a11y/no-static-element-interactions */
import { ChangeEvent, useRef, useState } from 'react';
import { textEditorMdUtils } from './utils';

type TProps = 'bold' | 'italic' | 'link' | 'list';

function MarkdownViewer({ text }: { text: string }) {
	const html = textEditorMdUtils.toHtml(text);
	return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

export function TextEditor() {
	const [textContent, setTextContent] = useState('');
	const ref = useRef<HTMLTextAreaElement>(null);

	function handleAddTag({ tag, event }: { tag: TProps; event: MouseEvent }) {
		event.preventDefault();
		if (!ref.current) return;

		const CONFIG = {
			bold: textEditorMdUtils.toBold,
			italic: textEditorMdUtils.toItalic,
			link: textEditorMdUtils.toLink,
			list: textEditorMdUtils.toList,
		};

		ref.current.focus();
		if (
			!document.activeElement ||
			!ref.current.contains(document.activeElement)
		) {
			console.log('O elemento de entrada não está focado.');
			return;
		}

		const selectedText = ref.current.value.substring(
			ref.current.selectionStart,
			ref.current.selectionEnd,
		);

		if (!selectedText) {
			console.log('Nenhum texto selecionado.');
			return;
		}
		const first = window.getSelection()?.anchorOffset;
		const last = window.getSelection()?.focusOffset;
		const textOnTextArea = ref.current?.value;
		if (first === undefined || last === undefined || !textOnTextArea) {
			console.log(`Um desses não tava selecionado`, {
				first,
				last,
				textOnTextArea,
			});
			return;
		}
		const start = ref.current.selectionStart;
		const end = ref.current.selectionEnd;
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
		ref.current.value = `${before}${wrappedText}${after}`;
		setTextContent(`${before}${wrappedText}${after}`);
		textEditorMdUtils.selectInTextAreaByRange({
			ref,
			start: startForSelection,
			end: endForSelection,
		});
	}

	function onChange(e: ChangeEvent<HTMLTextAreaElement>) {
		const text = e.target?.value;
		setTextContent(text);
	}

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
				<button
					type="button"
					onMouseDown={e =>
						handleAddTag({ event: e as unknown as MouseEvent, tag: 'list' })
					}
					className="p-2 border rounded w-8 h-8 flex items-center justify-center"
				>
					Li
				</button>
			</div>
			<textarea
				ref={ref}
				className="bg-transparent border w-full h-72"
				onChange={onChange}
			>
				Bruno Sajermann
			</textarea>
			<p>{JSON.stringify({ textContent })}</p>
			<MarkdownViewer text={ref.current?.value || ''} />
		</div>
	);
}
