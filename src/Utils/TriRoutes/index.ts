import { TRoutesMenu } from '~/Types/TRoutesMenu';
import { TTriRoutes } from '~/Types/TTriRoutes';

// TODO: Tanto o getPrev e o getNext são problemáticos, afinal se eu tiver dois menus seguidos cujo é hideTriRoutes mas o terceiro existir, vai dar como null
// e não será exibido, preciso fazer uma função circular para ajustar isso
function getPrev(options: TRoutesMenu[], indexOpt: number) {
	const prev = options[indexOpt - 1] || null;
	const prevAfterPrev = options[indexOpt - 2] || null;
	if (!prev?.hideTriRoutes) {
		return prev;
	}

	return prevAfterPrev;
}
function getNext(options: TRoutesMenu[], indexOpt: number) {
	const next = options[indexOpt + 1] || null;
	const nextAfterNext = options[indexOpt + 2] || null;
	if (!next?.hideTriRoutes) {
		return next;
	}

	return nextAfterNext;
}

function get(options: TRoutesMenu[], url: string) {
	const result: TTriRoutes = {
		actual: null,
		prev: null,
		next: null,
	};

	if (url === '/') {
		return result;
	}

	options.forEach((opt, indexOpt) => {
		console.log({ options });
		if (opt.path === url) {
			result.actual = opt;
			result.prev = getPrev(options, indexOpt);
			result.next = getNext(options, indexOpt);
		}
		if (opt.subs) {
			opt.subs.forEach((optSub, indexOptSub) => {
				if (optSub.path === url) {
					result.actual = optSub;
					result.next =
						options[indexOpt].subs?.[indexOptSub + 1] ?? options[indexOpt + 1];
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
