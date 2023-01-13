import styles from './styles.module.css';

type Props = {
	heading?: string;
	subHeading?: string;
	children: React.ReactNode;
};

export default function Section({ heading, subHeading, children }: Props) {
	return (
		<section className={styles.container}>
			{heading && <h1>{heading}</h1>}
			{subHeading && <h2>{subHeading}</h2>}
			<div>{children}</div>
		</section>
	);
}
