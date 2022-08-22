import { generateGuid } from '@sajermann/utils/Random';
import { createEffect } from '../utils';
import styles from './styles.module.css';

function OptionButton({
	children,
	...props
}: React.HTMLProps<HTMLButtonElement>) {
	const { onClick } = props;

	const ID_BUTTON = 'effect_sajermann_ui_button';
	const ID = generateGuid();

	return (
		<button
			{...props}
			onClick={event =>
				createEffect({
					event,
					ID_BUTTON,
					ID,
					onClick,
				})
			}
			type="button"
			className={`${styles.btn} ${props.className}`}
		>
			<button type="button" className={`${styles.btn} ${props.className}`}>
				{children}
			</button>
		</button>
	);
}

export { OptionButton };
