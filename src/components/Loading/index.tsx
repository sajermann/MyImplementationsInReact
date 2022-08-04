import logoCirtcle from './circle-notch.svg';
import styles from './styles.module.css';

export default function Loading() {
	function generateGuid(): string {
		let d = new Date().getTime();
		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
			// eslint-disable-next-line no-bitwise
			const r = (d + Math.random() * 16) % 16 | 0;
			d = Math.floor(d / 16);
			// eslint-disable-next-line no-bitwise
			return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
		});
	}

	const ID_BUTTON = 'riple_sajermann_ui_loading';
	const ID = generateGuid();
	function insertCss() {
		const element = document.createElement('style');
		element.id = ID_BUTTON;
		element.innerHTML = `
		@keyframes spin_${ID} {
			to {
				transform: rotate(360deg);
			}
		}
		`;
		const head = document.querySelector('head');
		if (head) {
			head.appendChild(element);
		}
	}
	insertCss();
	return (
		<div className={styles.container}>
			<img
				src={logoCirtcle}
				style={{ animation: `spin_${ID} 1s linear infinite` }}
				className={`spin_${ID} ${styles.test}`}
				alt="loading"
			/>
		</div>
	);
}
