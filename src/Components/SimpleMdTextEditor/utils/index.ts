import { handleJump } from './handleJump';
import { selectInTextAreaByRange } from './selectInTextAreaByRange';
import { handleBold } from './handleBold';
import { handleItalic } from './handleItalic';
import { handleLink } from './handleLink';
import { handleList } from './handleList';

import { toHtml } from './toHtml';

export const textEditorMdUtils = {
	handleLink,
	handleBold,
	handleItalic,
	handleJump,
	toHtml,
	handleList,
	selectInTextAreaByRange,
};
