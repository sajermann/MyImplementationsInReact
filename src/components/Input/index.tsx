/* eslint-disable jsx-a11y/label-has-associated-control */
import styles from './styles.module.css';

interface Props extends React.HTMLProps<HTMLInputElement> {
	startAttach?: React.ReactNode;
	endAttach?: React.ReactNode;
	startContent?: JSX.Element;
	endContent?: JSX.Element;
	customlabel?: {
		text: string;
		position?: 'Top' | 'Left';
	};
	verifyBeforeChange?: {
		number: boolean;
		letterUpper: boolean;
		letterLow: boolean;
		specialCharacter: boolean;
	};
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({
	startAttach,
	endAttach,
	startContent,
	endContent,
	customlabel,
	verifyBeforeChange,
	onChange,
	...props
}: Props) {
	function onChangeCustom(e: React.ChangeEvent<HTMLInputElement>) {
		if (!verifyBeforeChange && onChange) {
			onChange(e);
		}

		const temp = { ...e };
		let valueTemp = temp.target.value;
		if (!verifyBeforeChange?.letterLow) {
			valueTemp = valueTemp.replace(/[a-z]/g, '');
		}
		if (!verifyBeforeChange?.letterUpper) {
			valueTemp = valueTemp.replace(/[A-Z]/g, '');
		}
		if (!verifyBeforeChange?.number) {
			valueTemp = valueTemp.replace(/[0-9]/g, '');
		}
		if (!verifyBeforeChange?.specialCharacter) {
			valueTemp = valueTemp.replace(/[!@#$%^&*(),.?"':{}|<>_-]/g, '');
		}
		temp.target.value = valueTemp;
		if (onChange) {
			onChange(temp);
		}
	}

	return (
		<div
			className={`${styles.container} ${
				customlabel?.position === 'Left' && styles.containerRow
			}`}
		>
			{customlabel && (
				<div>
					<label htmlFor={props.id}>{customlabel.text}</label>
				</div>
			)}
			<div className={styles.subContainer}>
				{startAttach && (
					<div
						className={`${styles.startAttch} ${
							typeof startAttach !== 'string' && styles.zeroPadding
						}`}
					>
						{startAttach}
					</div>
				)}
				<div className={`${styles.containerInput}`}>
					{startContent && (
						<div className={styles.startContent}>{startContent}</div>
					)}
					<input
						{...props}
						onChange={onChangeCustom}
						// onBlur={onBlurCustom}
						className={`${styles.input}
						${startAttach && styles.hasStartAtt}
						${endAttach && styles.hasEndAtt}
						${startContent && styles.hasStartContent}
						${endContent && styles.hasEndContent}
						`}
					/>
					{endContent && <div className={styles.endContent}>{endContent}</div>}
				</div>
				{endAttach && (
					<div
						className={`${styles.endAttch} ${
							typeof endAttach !== 'string' && styles.zeroPadding
						}`}
					>
						{endAttach}
					</div>
				)}
			</div>
		</div>
	);
}

export { Input };
