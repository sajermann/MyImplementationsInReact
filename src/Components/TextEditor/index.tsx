/* eslint-disable jsx-a11y/no-static-element-interactions */
import { ChangeEvent, RefObject, useRef, useState } from 'react';
import { Icons } from '~/Components/Icons';
import { TReturnInfos } from './types/TReturn';
import { textEditorMdUtils } from './utils';

type TProps = 'bold' | 'italic' | 'link' | 'list';

function MarkdownViewer({ text }: { text: string }) {
	return (
		<div dangerouslySetInnerHTML={{ __html: textEditorMdUtils.toHtml(text) }} />
	);
}

export function TextEditor() {
	const [textContent, setTextContent] = useState(
		'Lista de supermercado \n\n* Batata \n* Le**g**umes \n* Macarrão de Batata\n\nEspero que vc compre tudo!',
	);
	const ref = useRef<HTMLTextAreaElement>(null);

	function getInfos(refTextArea: RefObject<HTMLTextAreaElement>): TReturnInfos {
		const { selectionStart, selectionEnd } = refTextArea.current!;
		const completeText = refTextArea.current!.value;
		const selectedText = completeText.substring(selectionStart, selectionEnd);

		const beforeText = completeText.substring(0, selectionStart);
		const afterText = completeText.substring(selectionEnd, completeText.length);

		return {
			selectedText,
			completeText,
			beforeText,
			afterText,
			selectionStart,
			selectionEnd,
		};
	}

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

		const {
			afterText,
			beforeText,
			completeText,
			selectedText,
			selectionEnd,
			selectionStart,
		} = getInfos(ref);

		console.log({
			afterText,
			beforeText,
			completeText,
			selectedText,
			selectionEnd,
			selectionStart,
		});

		if (tag === 'list') {
			textEditorMdUtils.toList({
				afterText,
				beforeText,
				completeText,
				selectedText,
				selectionEnd,
				selectionStart,
				ref,
				callback: setTextContent,
			});
			return;
		}

		const {
			text: wrappedText,
			startForSelection,
			endForSelection,
		} = CONFIG[tag]({
			text: selectedText,
			startSelected: selectionStart,
			endSelected: selectionEnd,
		});
		ref.current.value = `${beforeText}${wrappedText}${afterText}`;
		setTextContent(`${beforeText}${wrappedText}${afterText}`);
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
		<div className="w-full flex gap-2 flex-col p-2">
			<div className="flex gap-2">
				<button
					aria-label="bold"
					type="button"
					onMouseDown={e =>
						handleAddTag({ event: e as unknown as MouseEvent, tag: 'bold' })
					}
					className="font-bold p-2 border rounded w-8 h-8 flex items-center justify-center hover:border-blue-800 hover:text-blue-800 transition-colors duration-500"
				>
					<Icons nameIcon="bold" />
				</button>

				<button
					aria-label="italic"
					type="button"
					onMouseDown={e =>
						handleAddTag({ event: e as unknown as MouseEvent, tag: 'italic' })
					}
					className="font-bold p-2 border rounded w-8 h-8 flex items-center justify-center hover:border-blue-800 hover:text-blue-800 transition-colors duration-500"
				>
					<Icons nameIcon="italic" />
				</button>

				<button
					aria-label="link"
					type="button"
					onMouseDown={e =>
						handleAddTag({ event: e as unknown as MouseEvent, tag: 'link' })
					}
					className="font-bold p-2 border rounded w-8 h-8 flex items-center justify-center hover:border-blue-800 hover:text-blue-800 transition-colors duration-500"
				>
					<Icons nameIcon="link" />
				</button>
				<button
					aria-label="list"
					type="button"
					onMouseDown={e =>
						handleAddTag({ event: e as unknown as MouseEvent, tag: 'list' })
					}
					className="font-bold p-2 border rounded w-8 h-8 flex items-center justify-center hover:border-blue-800 hover:text-blue-800 transition-colors duration-500"
				>
					<Icons nameIcon="listUnordered" />
				</button>
			</div>
			<textarea
				ref={ref}
				className="bg-transparent border w-full min-h-64 p-2 rounded"
				onChange={onChange}
				value={textContent}
			>
				Lista de supermercado * Batata * Le**g**umes * Macarrão Bom dia * Linda
				Noite
			</textarea>
			<code>{JSON.stringify({ textContent }, null, 2)}</code>
			<MarkdownViewer text={ref.current?.value || ''} />
		</div>
	);
}
