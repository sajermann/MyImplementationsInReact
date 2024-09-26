import { TRoutesMenu } from '~/Types/TRoutesMenu';
import { TTriRoutes } from '~/Types/TTriRoutes';

function getPrev(options: TRoutesMenu[], indexOpt: number): TRoutesMenu | null {
	const prev = options[indexOpt - 1] || null;
	const realPrev = prev?.hideTriRoutes ? getPrev(options, indexOpt - 1) : prev;
	return realPrev;
}
function getNext(options: TRoutesMenu[], indexOpt: number): TRoutesMenu | null {
	const next = options[indexOpt + 1] || null;
	const realNext = next?.hideTriRoutes ? getNext(options, indexOpt + 1) : next;
	return realNext;
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
		if (opt.path === url) {
			result.actual = opt;
			result.prev = getPrev(options, indexOpt);
			result.next = getNext(options, indexOpt);
		}
		// TODO: Os filhos (Subs) não está ocorrendo verificação de hideTriRoutes, ou seja, se existir algum que não deveria ser mostrando, vai acabar sendo.
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
