import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { CaretLeft, CaretRight } from 'phosphor-react';

import { useRoutesMenu } from '~/Hooks/UseRoutesMenu';
import { useTranslation } from '~/Hooks/UseTranslation';
import styles from './styles.module.css';

type Menu = {
	name: string;
	path: string;
};

export default function PrevAndNext() {
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
		<div className={styles.container}>
			<strong>{translate('OTHERS_COMPONENTS')}</strong>
			<div className={styles.subContainer}>
				{prev && (
					<Link to={prev.path}>
						<CaretLeft /> {prev.name}
					</Link>
				)}
				{next && (
					<Link to={next.path}>
						{next.name}
						<CaretRight />
					</Link>
				)}
			</div>
		</div>
	);
}
