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
	removeBeforeChange?: {
		number?: boolean;
		letterUpper?: boolean;
		letterLow?: boolean;
		specialCharacter?: boolean;
		regexForReplace?: RegExp;
	};
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({
	startAttach,
	endAttach,
	startContent,
	endContent,
	customlabel,
	removeBeforeChange,
	onChange,
	...props
}: Props) {
	function onChangeCustom(e: React.ChangeEvent<HTMLInputElement>) {
		if (!removeBeforeChange && onChange) {
			onChange(e);
		}

		const temp = { ...e };
		let valueTemp = temp.target.value;
		if (removeBeforeChange?.letterLow) {
			valueTemp = valueTemp.replace(/[a-z]/g, '');
		}
		if (removeBeforeChange?.letterUpper) {
			valueTemp = valueTemp.replace(/[A-Z]/g, '');
		}
		if (removeBeforeChange?.number) {
			valueTemp = valueTemp.replace(/[0-9]/g, '');
		}
		if (removeBeforeChange?.specialCharacter) {
			valueTemp = valueTemp.replace(
				/[!@#$%^&*(),.?":{ }|<>'¨_=+[;^~´`°\]\\\-/]/g,
				''
			);
		}
		if (removeBeforeChange?.regexForReplace) {
			valueTemp = valueTemp.replace(removeBeforeChange?.regexForReplace, '');
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
				<div className={`${styles.containerInput}`}>
					{startAttach && (
						<div
							className={`${styles.startAttch} ${
								typeof startAttach !== 'string' && styles.zeroPadding
							}`}
						>
							{startAttach}
						</div>
					)}
					{startContent && (
						<div className={styles.startContent}>{startContent}</div>
					)}
					<input
						{...props}
						onChange={onChangeCustom}
						className={`${styles.input}
						${startAttach && styles.hasStartAtt}
						${endAttach && styles.hasEndAtt}
						${startContent && styles.hasStartContent}
						${endContent && styles.hasEndContent}
						${props.className}
						`}
					/>
					{endContent && <div className={styles.endContent}>{endContent}</div>}
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
		</div>
	);
}

export { Input };
