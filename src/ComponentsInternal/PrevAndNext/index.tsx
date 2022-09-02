import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowArcLeft, CaretLeft, CaretRight } from 'phosphor-react';
import useScrollPosition from '../../Hooks/useScrollPosition';
import styles from './styles.module.css';
import optionsMenu from '../../Utils/OptionsMenu';

type Menu = {
	title: string;
	url: string;
};

export default function PrevAndNext() {
	const location = useLocation();
	const [prev, setPrev] = useState<Menu | null>(null);
	const [next, setNext] = useState<Menu | null>(null);

	function load() {
		if (!location.pathname.includes('/docs/')) {
			setPrev(null);
			setNext(null);
		}
		const index = optionsMenu.map(item => item.url).indexOf(location.pathname);
		if (index - 1 < 0) {
			setPrev(null);
		} else {
			setPrev(optionsMenu[index - 1]);
		}
		if (index + 1 > optionsMenu.length) {
			setPrev(null);
		} else {
			setNext(optionsMenu[index + 1]);
		}
	}

	useEffect(() => load(), [location.pathname]);

	if (!optionsMenu.length) {
		return null;
	}

	return (
		<div className={styles.container}>
			<strong>Outros Componentes</strong>
			<div className={styles.subContainer}>
				{prev && (
					<Link to={prev.url}>
						<CaretLeft /> {prev.title}
					</Link>
				)}
				{next && (
					<Link to={next.url}>
						{next.title}
						<CaretRight />
					</Link>
				)}
			</div>
		</div>
	);
}
