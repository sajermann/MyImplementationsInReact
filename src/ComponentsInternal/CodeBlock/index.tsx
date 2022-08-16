import styles from './styles.module.css';

type Props = {
	children: JSX.Element;
};
export function CodeBlock({ children }: Props) {
	return <code>{children}</code>;
}
