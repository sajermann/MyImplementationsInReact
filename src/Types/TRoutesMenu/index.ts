export type TRoutesMenu = {
	name: string;
	path: string;
	implements_code: string;
	docs_code: string;
	element: React.ReactNode;
	demo?: React.ReactNode;
	subs?: TRoutesMenu[];
	expandedMenu?: boolean;
	hideMenu?: boolean;
	label: string;
	hideTriRoutes?: boolean;
	className?: string;
};
