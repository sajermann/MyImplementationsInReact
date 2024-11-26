export type TDate = {
	day: number | null;
	month: number | null;
	year: number | null;
	hour: number | null;
	minute: number | null;
	date: Date | null;
	iso: string | null;
	clockType: 'am' | 'pm' | null;
};

export type TAdjustDay = {
	dayRef: React.RefObject<HTMLInputElement>;
	date: TDate;
	setDate: (value: TDate | ((prevState: TDate) => TDate)) => void;
	onChange?: (data: TDate) => void;
};

export type TOnBlurDay = {
	event: React.FocusEvent<HTMLInputElement, Element>;
	dayRef: React.RefObject<HTMLInputElement>;
};

export type TOnBlurMonth = {
	event: React.FocusEvent<HTMLInputElement, Element>;
	dayRef: React.RefObject<HTMLInputElement>;
	monthRef: React.RefObject<HTMLInputElement>;
	date: TDate;
	setDate: (value: TDate | ((prevState: TDate) => TDate)) => void;
	onChange?: (data: TDate) => void;
};

export type TOnBlurYear = {
	event: React.FocusEvent<HTMLInputElement, Element>;
	dayRef: React.RefObject<HTMLInputElement>;
	yearRef: React.RefObject<HTMLInputElement>;
	date: TDate;
	setDate: (value: TDate | ((prevState: TDate) => TDate)) => void;
	onChange?: (data: TDate) => void;
};

export type TChangeDay = {
	event: React.ChangeEvent<HTMLInputElement>;
	date: TDate;
	setDate: (value: TDate | ((prevState: TDate) => TDate)) => void;
	onChange?: (data: TDate) => void;
	dayRef: React.RefObject<HTMLInputElement>;
};

export type TChangeMonth = {
	event: React.ChangeEvent<HTMLInputElement>;
	setDate: (value: TDate | ((prevState: TDate) => TDate)) => void;
	onChange?: (data: TDate) => void;
	monthRef: React.RefObject<HTMLInputElement>;
	dayRef: React.RefObject<HTMLInputElement>;
};

export type TChangeYear = {
	event: React.ChangeEvent<HTMLInputElement>;
	setDate: (value: TDate | ((prevState: TDate) => TDate)) => void;
	dayRef: React.RefObject<HTMLInputElement>;
	yearRef: React.RefObject<HTMLInputElement>;
	onChange?: (data: TDate) => void;
};

export type TChangeHour = {
	event: React.ChangeEvent<HTMLInputElement>;
	setDate: (value: TDate | ((prevState: TDate) => TDate)) => void;
	onChange?: (data: TDate) => void;
	hourRef: React.RefObject<HTMLInputElement>;
	isAmPm?: boolean;
};

export type TChangeMinute = {
	event: React.ChangeEvent<HTMLInputElement>;
	setDate: (value: TDate | ((prevState: TDate) => TDate)) => void;
	onChange?: (data: TDate) => void;
	minuteRef: React.RefObject<HTMLInputElement>;
};

export type TClickToggleAmPm = {
	setDate: (value: TDate | ((prevState: TDate) => TDate)) => void;
	onChange?: (data: TDate) => void;
	hourRef: React.RefObject<HTMLInputElement>;
	isAmPm?: boolean;
};

export type TChangeDatepicker = {
	dates: Date[];
	onChange?: (data: TDate) => void;
	setDate: (value: TDate | ((prevState: TDate) => TDate)) => void;
	dayRef: React.RefObject<HTMLInputElement>;
	yearRef: React.RefObject<HTMLInputElement>;
	monthRef: React.RefObject<HTMLInputElement>;
};
