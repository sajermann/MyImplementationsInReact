import { Dispatch, SetStateAction } from 'react';

export type TPagination = {
	pageCount: number;
	pageIndex: number;
	pageSize: number;
	setPagination: Dispatch<
		SetStateAction<{
			pageIndex: number;
			pageSize: number;
		}>
	>;
	disabledActions?: boolean;
	disabledPageSize?: boolean;
};
