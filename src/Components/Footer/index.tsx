import { GithubLogo, LinkedinLogo } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { delay } from '../Utils';
import useWindow from '../../Hooks/useWindow';
import styles from './styles.module.css';

export default function Footer() {
	const location = useLocation();
	const [footerFixed, setFooterFixed] = useState(false);
	const { view } = useWindow();

	async function adjustFooter() {
		window.scrollTo(0, 0);
		setFooterFixed(false);
		await delay(1);
		const footerTop = document
			.querySelector('footer')
			?.getBoundingClientRect().top;
		setFooterFixed(Number(footerTop) < view.height);
	}
	useEffect(() => {
		adjustFooter();
	}, [location.pathname]);

	function verifyFooterFixed() {
		if (footerFixed) {
			return styles.footerFixed;
		}
		return null;
	}

	return (
		<footer className={`${styles.footer} ${verifyFooterFixed()}`}>
			<div>Criado por Bruno Sajermann</div>
			<div className={styles.containerIcones}>
				<a
					className={styles.link}
					href="https://www.linkedin.com/in/devbrunosajermann/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<LinkedinLogo />
				</a>
				<a
					className={styles.link}
					href="https://github.com/sajermann"
					target="_blank"
					rel="noopener noreferrer"
				>
					<GithubLogo />
				</a>
			</div>
		</footer>
	);
}
