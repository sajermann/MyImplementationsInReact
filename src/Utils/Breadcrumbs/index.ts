import { TBreadcrumb } from '~/Types/TBreadcrumbs';
import { TRoutesMenu } from '~/Types/TRoutesMenu';

function getMyChild(routes: TRoutesMenu[], path: string): TRoutesMenu | null {
	for (const route of routes) {
		const result = route.subs?.find(obj => obj.path.includes(`/${path}`));
		if (result) {
			return result;
		}
		if (!result && route.subs) {
			const resultFock = getMyChild(route.subs, path);
			return resultFock;
		}
	}
	return null;
}

function get(urls: string[], options: TRoutesMenu[]) {
	const final: TBreadcrumb[] = [];
	for (const url of urls) {
		const child = getMyChild(options, url);
		const semiFinal = {
			label: options.find(opt => opt.path === `/${url}`)?.label ?? child?.label,
			link: options.find(opt => opt.path === `/${url}`)?.path ?? child?.path,
		};
		if (semiFinal.label) {
			final.push(semiFinal);
		}
	}

	return final;
}

export const breadcrumbs = { get };
