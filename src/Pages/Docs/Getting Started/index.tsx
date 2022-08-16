import { CodeBlock, JsCode } from '../../../ComponentsInternal/CodeBlock';
import { useDarkMode } from '../../../Hooks/DarkMode';
import styles from './styles.module.css';

export default function GettingStarted() {
	const { darkMode } = useDarkMode();
	return (
		<div>
			<div className={styles.block}>
				<h1>Introdução</h1>
				<span>
					Sajermann UI é um conjunto de componentes para React de interface de
					usuário criado para facilitar o uso de determinados componentes que na
					maior parte das vezes se repetiam em todos os projetos.
				</span>
			</div>
			<div className={styles.block}>
				<h1>Instalação</h1>
				<span>
					Sajermann UI está disponível como um pacote NPM e para instalar em seu
					projeto basta executar:
				</span>
				<CodeBlock>npm install @sajermann/ui-react</CodeBlock>
				<CodeBlock>
					<JsCode>
						{`
						export function CodeBlock({ children }: Props) {
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
						`}
					</JsCode>
				</CodeBlock>
				<CodeBlock>
					<JsCode>npm install @sajermann/ui-react</JsCode>
				</CodeBlock>
			</div>
		</div>
	);
}
