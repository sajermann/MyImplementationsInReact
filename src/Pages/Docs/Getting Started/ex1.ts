export default `export function CodeBlock({ children }: Props) {
	const t = children as {
		type: {
		name: string;
		};
	};
	console.log({ children });
	console.log({ t });
	// console.log(t?.type.name);
	// console.log(t?.type.name === 'JsCode' || '');
	return (
		<div>
			<code>
				{children}
				<OptionButton className={styles.choiseLanguage}>
					Javascript
				</OptionButton>
				<OptionButton className={styles.choiseLanguage}>
					Typescript
				</OptionButton>
			</code>
		</div>
	);
}
`;
