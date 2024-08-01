import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { managerClassNames } from '~/Utils/ManagerClassNames';
import { textEditorMdUtils } from '../../utils';

export function MarkdownViewer({
	text,
	...rest
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
	text: string;
}) {
	return (
		<div
			className={managerClassNames([
				{ 'bg-transparent border w-full min-h-64 p-2 rounded': true },
				{ [rest.className as string]: rest.className },
			])}
			dangerouslySetInnerHTML={{ __html: textEditorMdUtils.toHtml(text) }}
		/>
	);
}
