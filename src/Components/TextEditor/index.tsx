/* eslint-disable jsx-a11y/no-static-element-interactions */
import {
	Columns2Icon,
	FilePenLineIcon,
	FileSlidersIcon,
	Rows2Icon,
} from 'lucide-react';
import { ChangeEvent, RefObject, useRef, useState } from 'react';
import { Icons } from '~/Components/Icons';
import { useTranslation } from '~/Hooks/UseTranslation';
import { managerClassNames } from '~/Utils/ManagerClassNames';
import { TReturnInfos } from './types/TReturn';
import { textEditorMdUtils } from './utils';

type TProps = 'bold' | 'italic' | 'link' | 'list';
enum EPreview {
	side = 0,
	vertical = 1,
	onlyEditor = 2,
	onlyPreview = 3,
}

function MarkdownViewer({ text }: { text: string }) {
	return (
		<div
			className="bg-transparent border w-full min-h-64 p-2 rounded"
			dangerouslySetInnerHTML={{ __html: textEditorMdUtils.toHtml(text) }}
		/>
	);
}

export function TextEditor() {
	const { translate } = useTranslation();
	const [textContent, setTextContent] = useState(
		'Lista de supermercado \n\n* Batata \n* Le**g**umes \n* Macarrão de Batata\n\nEspero que vc compre tudo!',
	);
	const [previewMode, setPreviewMode] = useState<EPreview>(EPreview.vertical);
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
			bold: textEditorMdUtils.handleBold,
			italic: textEditorMdUtils.handleItalic,
			link: textEditorMdUtils.handleLink,
			list: textEditorMdUtils.handleList,
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

		CONFIG[tag]({
			afterText,
			beforeText,
			completeText,
			selectedText,
			selectionEnd,
			selectionStart,
			ref,
			callback: data => {
				if (!ref.current) return;
				ref.current.value = data;
				setTextContent(data);
			},
		});
	}

	function onChange(e: ChangeEvent<HTMLTextAreaElement>) {
		const text = e.target?.value;
		setTextContent(text);
	}

	function handlePreviewMode() {
		setPreviewMode(prev => {
			if (prev === 3) {
				return 0;
			}
			return prev + 1;
		});
	}

	return (
		<div className="w-full flex gap-2 flex-col p-2">
			<div className="flex justify-between">
				<div className="flex gap-2">
					<button
						title={translate('BOLD')}
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
						title={translate('ITALIC')}
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
						title="Link"
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
						title={translate('LIST')}
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

				<button
					title={translate('CHANGE_PREVIEW_MODE')}
					aria-label="preview-mode"
					type="button"
					onMouseDown={handlePreviewMode}
					className="font-bold p-2 border rounded w-8 h-8 flex items-center justify-center hover:border-blue-800 hover:text-blue-800 transition-colors duration-500"
				>
					{previewMode === EPreview.side && <Columns2Icon />}
					{previewMode === EPreview.vertical && <Rows2Icon />}
					{previewMode === EPreview.onlyPreview && <FileSlidersIcon />}
					{previewMode === EPreview.onlyEditor && <FilePenLineIcon />}
				</button>
			</div>
			<div
				className={managerClassNames([
					{ 'flex gap-2': true },
					{ 'flex-row': previewMode === EPreview.side },
					{ 'flex-col': previewMode === EPreview.vertical },
				])}
			>
				<textarea
					ref={ref}
					className={managerClassNames([
						{ 'bg-transparent border w-full min-h-64 p-2 rounded': true },
						{ hidden: previewMode === EPreview.onlyPreview },
					])}
					onChange={onChange}
					value={textContent}
				/>
				<MarkdownViewer text={textContent || ''} />
			</div>

			<code>{JSON.stringify({ controlledState: textContent }, null, 2)}</code>
		</div>
	);
}
