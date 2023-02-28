type TCommons<T> = {
	header: string;
	accessor: keyof T;
	accessorFn?: (data: TCellProps<T>) => string;
};

export type TCellProps<T> = {
	valueCell: unknown;
	row: T;
	original: T[];
	index: number;
};

type THeaderProps<T> = {
	valueHeader: string;
	currentDefinition: TDefXlsx<T>;
	definitions: TDefXlsx<T>[];
	index: number;
};

export type TDefXlsx<T> = TCommons<T> & {
	typeCell?: 's' | 'b';
	styleCellFn?: (data: TCellProps<T>) => Record<string, unknown>;
	styleHeaderCellFn?: (data: THeaderProps<T>) => Record<string, unknown>;
};

export type TDefCsv<T> = TCommons<T>;
export type TDefXml<T> = TCommons<T>;

export type TDefPrintPdfPng<T> = TCommons<T> & {
	align?: 'center' | 'left' | 'right';
	cellRender?: (data: TCellProps<T>) => string;
};

export type TDefTools<T> = {
	defForExcel?: TDefXlsx<T>[];
	defForCsv?: TDefCsv<T>[];
	defForXml?: TDefXml<T>[];
	defForPrint?: TDefPrintPdfPng<T>[];
	defForPdf?: TDefPrintPdfPng<T>[];
	defForPng?: TDefPrintPdfPng<T>[];
};
