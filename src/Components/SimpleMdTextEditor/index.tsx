/* eslint-disable jsx-a11y/no-static-element-interactions */
import {
	Columns2Icon,
	FilePenLineIcon,
	FileSlidersIcon,
	MaximizeIcon,
	MinimizeIcon,
	Rows2Icon,
} from 'lucide-react';
import { useRef, useState } from 'react';
import { Icons } from '~/Components/Icons';
import { useTranslation } from '~/Hooks/UseTranslation';
import { managerClassNames } from '~/Utils/ManagerClassNames';
import { MarkdownViewer } from './components/MarkdownViewer';
import { Minibutton } from './components/MiniButton';
import { EPreview } from './enum/EPreview';
import { TTag } from './types/TTag';
import { textEditorMdUtils } from './utils';
import { getInfos } from './utils/getInfos';

export function SimpleMdTextEditor() {
	const { translate } = useTranslation();
	const [textContent, setTextContent] = useState(
		'Lista de supermercado \n\n* Batata \n* Le**g**umes \n* Macarrão de Batata\n\nEspero que vc compre tudo!',
	);
	const [previewMode, setPreviewMode] = useState(EPreview.row);
	const [isFullScreen, setIsFullScreen] = useState(false);
	const ref = useRef<HTMLTextAreaElement>(null);

	function handleAddTag({
		tag,
		event,
	}: {
		tag: TTag;
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>;
	}) {
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

	return (
		<div
			className={managerClassNames([
				{
					'w-full flex gap-2 flex-col p-2 ': true,
					'fixed inset-0 z-50 backdrop-blur-md transition-transform duration-500':
						isFullScreen,
				},
			])}
		>
			<div className="flex justify-between">
				<div className="flex gap-2">
					<Minibutton
						title={translate('BOLD')}
						aria-label="bold"
						type="button"
						onClick={event => handleAddTag({ event, tag: 'bold' })}
					>
						<Icons nameIcon="bold" />
					</Minibutton>

					<Minibutton
						title={translate('ITALIC')}
						aria-label="italic"
						type="button"
						onClick={event => handleAddTag({ event, tag: 'italic' })}
					>
						<Icons nameIcon="italic" />
					</Minibutton>

					<Minibutton
						title="Link"
						aria-label="link"
						type="button"
						onClick={event => handleAddTag({ event, tag: 'link' })}
					>
						<Icons nameIcon="link" />
					</Minibutton>

					<Minibutton
						title={translate('LIST')}
						aria-label="list"
						type="button"
						onClick={event => handleAddTag({ event, tag: 'list' })}
					>
						<Icons nameIcon="listUnordered" />
					</Minibutton>
				</div>

				<div className="flex gap-2">
					<Minibutton
						title={translate(isFullScreen ? 'MAXIMIZE' : 'MINIMIZE')}
						aria-label="fullscreen-mode"
						type="button"
						onClick={() => setIsFullScreen(prev => !prev)}
					>
						{!isFullScreen && <MaximizeIcon />}
						{isFullScreen && <MinimizeIcon />}
					</Minibutton>

					<Minibutton
						title={translate('CHANGE_PREVIEW_MODE')}
						aria-label="preview-mode"
						type="button"
						onClick={() => {
							setPreviewMode(prev => {
								if (prev === 3) {
									return 0;
								}
								return prev + 1;
							});
						}}
					>
						{previewMode === EPreview.row && <Columns2Icon />}
						{previewMode === EPreview.column && <Rows2Icon />}
						{previewMode === EPreview.onlyPreview && <FileSlidersIcon />}
						{previewMode === EPreview.onlyEditor && <FilePenLineIcon />}
					</Minibutton>
				</div>
			</div>
			<div
				className={managerClassNames([
					{ 'flex gap-2': true },
					{ 'flex-row': previewMode === EPreview.row },
					{ 'flex-col': previewMode === EPreview.column },
				])}
			>
				<textarea
					ref={ref}
					className={managerClassNames([
						{ 'bg-transparent border w-full min-h-64 p-2 rounded': true },
						{ hidden: previewMode === EPreview.onlyPreview },
					])}
					onChange={e => setTextContent(e.target?.value)}
					value={textContent}
				/>
				<MarkdownViewer
					className={managerClassNames([
						{ hidden: previewMode === EPreview.onlyEditor },
					])}
					text={textContent || ''}
				/>
			</div>

			<code>{JSON.stringify({ controlledState: textContent }, null, 2)}</code>
		</div>
	);
}
