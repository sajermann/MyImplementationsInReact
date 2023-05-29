import { Dispatch, SetStateAction } from 'react';

export type TSelectOptions = {
	single?: {
		selectedDate: Date | null;
		onSelectedDate: Dispatch<SetStateAction<Date | null>>;
	};
	multi?: {
		selectedDates: Date[];
		onSelectedDates: Dispatch<SetStateAction<Date[]>>;
		enableRangeSelection?: true;
	};
};

export type TDisabled = {
	dates?: Date[];
	datesBefore?: Date;
	datesAfter?: Date;
};

export type TSelectionByRange = {
	start: Date | null;
	end: Date | null;
};
