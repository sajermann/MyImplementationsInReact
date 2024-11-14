export type TDate = {
	day: number | null;
	month: number | null;
	year: number | null;
	date: Date | null;
	iso: string | null;
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
