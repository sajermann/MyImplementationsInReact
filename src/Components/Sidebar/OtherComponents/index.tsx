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

	function load() {
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
