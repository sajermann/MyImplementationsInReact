import { GithubLogo, LinkedinLogo } from 'phosphor-react';
import styles from './styles.module.css';

export default function Footer() {
	return (
		<footer className={styles.footer}>
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
