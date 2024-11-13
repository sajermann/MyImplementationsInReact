export type TDate = {
	day: number | null;
	month: number | null;
	year: number | null;
	iso: string | null;
};

export type TAdjustDay = {
	dayRef: React.RefObject<HTMLInputElement>;
	date: TDate;
	setDate: (value: TDate | ((prevState: TDate) => TDate)) => void;
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
};

export type TOnBlurYear = {
	event: React.FocusEvent<HTMLInputElement, Element>;
	dayRef: React.RefObject<HTMLInputElement>;
	yearRef: React.RefObject<HTMLInputElement>;
	date: TDate;
	setDate: (value: TDate | ((prevState: TDate) => TDate)) => void;
};

export type TChangeDay = {
	event: React.ChangeEvent<HTMLInputElement>;
	date: TDate;
	setDate: (value: TDate | ((prevState: TDate) => TDate)) => void;
};

export type TChangeMonth = {
	event: React.ChangeEvent<HTMLInputElement>;
	setDate: (value: TDate | ((prevState: TDate) => TDate)) => void;
};

export type TChangeYear = {
	event: React.ChangeEvent<HTMLInputElement>;
	setDate: (value: TDate | ((prevState: TDate) => TDate)) => void;
};
