import { generateGuid } from '@sajermann/utils/Random';
import styles from './styles.module.css';

type Props = {
	color?: string;
	size?: string;
	icon?: JSX.Element;
};

function Loading({ color, size, icon }: Props) {
	const ID = generateGuid();
	function insertCss() {
		const element = document.createElement('style');
		element.id = 'icon_sajermann_ui_loading';
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
			{icon || (
				<svg
					version="1.1"
					style={{
						animation: `spin_${ID} 1s linear infinite`,
						color: color || '#fff',
						width: size || '1.2rem',
						height: size || '1.2rem',
					}}
					className={`spin_${ID}`}
					xmlns="http://www.w3.org/2000/svg"
					x="0px"
					y="0px"
					viewBox="0 0 32 32"
					xmlSpace="preserve"
				>
					<path
						fill="currentColor"
						d="M18,4.181v2.021c4.559,0.929,8,4.97,8,9.798c0,5.514-4.486,10-10,10S6,21.514,6,16c0-4.829,3.441-8.869,8-9.798V4.181
	C8.334,5.137,4,10.066,4,16c0,6.617,5.383,12,12,12s12-5.383,12-12C28,10.066,23.666,5.137,18,4.181z"
					/>
				</svg>
			)}
		</div>
	);
}
export { Loading };
