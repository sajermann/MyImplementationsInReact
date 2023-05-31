import { allDatesIsSelectedsByDayOfWeek } from './AllDatesIsSelectedsByDayOfWeek';
import { dateIsInArray } from './DateIsInArray';
import { fixSelectionByRange } from './FixSelectionByRange';
import { getClassNames } from './GetClassNames';
import { handleHoverRangeSelection } from './HandleHoverRangeSelection';
import { handleSelectByRange } from './HandleSelectByRange';
import { handleToggleHeader } from './HandleToggleHeader';
import { handleToggleSelection } from './Toggle';
import { generateConfig } from './GenerateConfig';

export const calendar = {
	handleToggleSelection,
	getClassNames,
	dateIsInArray,
	handleToggleHeader,
	allDatesIsSelectedsByDayOfWeek,
	handleSelectByRange,
	handleHoverRangeSelection,
	fixSelectionByRange,
	generateConfig,
};
