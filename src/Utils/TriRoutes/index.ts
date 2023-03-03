import { TRoutesMenu } from '~/Types/TRoutesMenu';
import { TTriRoutes } from '~/Types/TTriRoutes';

function get(options: TRoutesMenu[], url: string) {
	const result: TTriRoutes = {
		actual: null,
		prev: null,
		next: null,
	};

	options.forEach((opt, indexOpt) => {
		if (opt.path === url) {
			result.actual = opt;
			result.prev = options[indexOpt - 1] || null;
			result.next = options[indexOpt + 1].hideTriRoutes
				? null
				: options[indexOpt + 1];
		}
		if (opt.subs) {
			opt.subs.forEach((optSub, indexOptSub) => {
				if (optSub.path === url) {
					result.actual = optSub;
					result.next =
						options[indexOpt].subs?.[indexOptSub + 1] || options[indexOpt + 1];
					if (indexOptSub === 0) {
						result.prev = opt;
					} else {
						result.prev = options[indexOpt].subs?.[indexOptSub - 1];
					}
				}
			});
		}
	});

	return { ...result };
}

export const triRoutes = { get };
