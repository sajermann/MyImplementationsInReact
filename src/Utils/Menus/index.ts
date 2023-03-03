import { TRoutesMenu } from '~/Types/TRoutesMenu';

function filterSubs(
	menu: TRoutesMenu,
	valueFilter: string
): TRoutesMenu[] | null {
	const newOptions: TRoutesMenu[] = [];
	if (!menu.subs) return null;
	for (const subs of menu.subs) {
		const result = subs.label.toLowerCase().indexOf(valueFilter) > -1;
		if (result) {
			newOptions.push(subs);
		}

		if (subs.subs) {
			const t = filterSubs(subs, valueFilter);
			if (t) newOptions.push(...t);
		}
	}
	return newOptions;
}

function get(globalRoutes: TRoutesMenu[], search: string) {
	const valueFilter = search.toLowerCase();
	if (valueFilter === '') return globalRoutes;

	const newOptions: TRoutesMenu[] = [];
	const optionsWithChild: TRoutesMenu[] = [];

	for (const menu of globalRoutes) {
		if (menu.label.toLowerCase().indexOf(valueFilter) > -1) {
			newOptions.push(menu);
		}
		if (menu.subs) {
			const result = filterSubs(menu, valueFilter);
			if (result) {
				newOptions.push(...result);
			}
		}
	}

	// remove childs
	for (const opt of newOptions) {
		const temp = { ...opt };
		if (temp.subs) {
			delete temp.subs;
		}
		optionsWithChild.push(temp);
	}
	return optionsWithChild;
}

export const menus = { get };
