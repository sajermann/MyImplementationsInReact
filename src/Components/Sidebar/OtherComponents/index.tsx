import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

import { useRoutesMenu } from '~/Hooks/UseRoutesMenu';
import { useTranslation } from '~/Hooks/UseTranslation';
import { Icons } from '~/Components/Icons';
import { Main } from '../Main';

type Menu = {
	name: string;
	path: string;
};

export function OtherComponents() {
	const { options } = useRoutesMenu();
	const { translate } = useTranslation();
	const location = useLocation();
	const [prev, setPrev] = useState<Menu | null>(null);
	const [next, setNext] = useState<Menu | null>(null);

	function getIndex() {
		const ocurrencies = (location.pathname.match(/\//g) || []).length; // Count Bars (/)
		console.log({ location });
		const routes = {
			actualRoute: {},
			prevRoute: {},
			nextRoute: {},
		};
		const indexParent = options
			.map(item => item.path)
			.indexOf(location.pathname);
		if (indexParent > -1) return indexParent;

		options.forEach(opt => {
			const subOptions = opt.subs?.filter(
				subOpt => subOpt.path.indexOf(location.pathname) > -1
			);

			if (subOptions) {
				routes.actualRoute = { ...subOptions };
			}
			// if (translate(opt.path).indexOf(location.pathname) > -1) {
			// 	newOptions.push(opt);
			// } else if (subOptions.length > 0) {
			// 	newOptions.push({
			// 		...opt,
			// 		expandedMenu: true,
			// 		subs: [...subOptions],
			// 	});
			// }
			const t = options.findIndex((a, b, c) => {
				console.log({ a, b, c });
				return 1;
			});
			console.log({ subOptions });
		});
		return -1;
	}

	function load() {
		const indexSub = getIndex();

		const index = options.map(item => item.path).indexOf(location.pathname);
		if (index - 1 < 0) {
			setPrev(null);
		} else {
			setPrev(options[index - 1]);
		}
		if (index + 1 > options.length) {
			setPrev(null);
		} else {
			setNext(options[index + 1]);
		}
	}

	useEffect(() => load(), [location.pathname]);

	if (!options.length) {
		return null;
	}

	return (
		<Main heading={translate('OTHERS_COMPONENTS')}>
			<div className="flex justify-between items-center">
				{prev && (
					<Link
						className="flex items-center justify-center hover:text-primary-700 transition-colors duration-500"
						to={prev.path}
					>
						<Icons.ArrowSingleLeft width="15px" /> {prev.name}
					</Link>
				)}
				{next && (
					<Link
						className="flex items-center justify-center hover:text-primary-700 transition-colors duration-500"
						to={next.path}
					>
						{next.name}
						<Icons.ArrowSingleRight width="15px" />
					</Link>
				)}
			</div>
		</Main>
	);
}
