import styles from './styles.module.css';

type Props = {
	children: JSX.Element;
};
export function ComponentBlock({ children }: Props) {
	return <div className="componentBlock">{children}</div>;
}
