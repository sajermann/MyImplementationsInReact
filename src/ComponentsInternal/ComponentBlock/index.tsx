import styles from './styles.module.css';

type Props = {
	children: React.ReactNode;
};
export function ComponentBlock({ children }: Props) {
	return <div className="componentBlock">{children}</div>;
}
