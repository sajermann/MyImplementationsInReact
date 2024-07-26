import { handleJump } from './handleJump';
import { removeInvalidTags } from './removeInvalidTags';
import { selectInTextAreaByRange } from './selectInTextAreaByRange';
import { toBold } from './toBold';
import { toItalic } from './toItalic';
import { toLink } from './toLink';
import { toHtml } from './toHtml';
import { toList } from './toList';

export const textEditorMdUtils = {
	toLink,
	toBold,
	toItalic,
	selectInTextAreaByRange,
	removeInvalidTags,
	handleJump,
	toHtml,
	toList,
};
