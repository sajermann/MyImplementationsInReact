/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import {
	FormEvent,
	FocusEvent,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react';
import styles from './styles.module.css';
import { Loading } from '../Loading';
import { FeedbackIcons } from '../FeedbackIcons';
import { generateGuid, createEffect } from '../utils';
import { useWindowSize } from '../utils/useWindowSize';

interface Props extends React.HTMLProps<HTMLInputElement> {
	startAttach?: React.ReactNode;
	endAttach?: React.ReactNode;
	startContent?: JSX.Element;
	endContent?: JSX.Element;
	label?: string;
	onlyNumbers?: boolean;
}

function Input({
	startAttach,
	endAttach,
	startContent,
	endContent,
	label,
	onlyNumbers,
	...props
}: Props) {
	const { onChange, onBlur } = props;
	function onBlurCustom(e: FocusEvent<HTMLInputElement, Element>) {
		if (!onlyNumbers && onBlur) {
			onBlur(e);
		}
		const { value: valueCustom, id: idCustom } =
			e?.target as unknown as HTMLInputElement;
		const allows = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
		const newValueTemp: string[] = [];
		const characters = valueCustom.split('');
		for (let i = 0; i < characters.length; i += 1) {
			if (allows.includes(characters[i])) {
				newValueTemp.push(characters[i]);
			}
		}
		const newChange = {
			target: { id: idCustom, value: newValueTemp.join('') },
		} as unknown as FormEvent<HTMLInputElement>;
		if (onChange) {
			onChange(newChange);
		}
	}

	return (
		<div className={styles.container}>
			{label && (
				<div>
					<label htmlFor={props.id}>{label}</label>
				</div>
			)}
			<div className={styles.subContainer}>
				{startContent}
				{startAttach && (
					<div
						className={`${styles.startAttch} ${
							typeof startAttach !== 'string' && styles.zeroPadding
						}`}
					>
						{startAttach}
					</div>
				)}
				<div className={styles.containerInput}>
					<input
						onBlur={onBlurCustom}
						className={`${styles.input} ${startAttach && styles.hasStartAtt} ${
							endAttach && styles.hasEndAtt
						}`}
						{...props}
					/>
					{endContent && (
						<div style={{ display: 'flex', alignItems: 'center' }}>
							{endContent}
						</div>
					)}
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
