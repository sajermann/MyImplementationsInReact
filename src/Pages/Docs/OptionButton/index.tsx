import { useState } from 'react';
import {
	TelegramLogo,
	TrendDown,
	TrendUp,
	WhatsappLogo,
	YoutubeLogo,
} from 'phosphor-react';
import { CodeBlock } from '../../../ComponentsInternal/CodeBlock';
import { OptionButton } from '../../../components';
import palmeiras from '../../../assets/palmeiras.png';
import styles from './styles.module.css';
import Section from '../../../ComponentsInternal/Section';
import { ComponentBlock } from '../../../ComponentsInternal/ComponentBlock';
import { ex1, ex2, ex3, ex4, ex5, ex6, ex7 } from './exs';

export default function OptionButtonDocs() {
	return (
		<main>
			<Section heading="Botão de Opção">
				O componente Botão de Opção pode ser utilizado para destacar uma opção
				ao usuário, geralmente são grandes e não possuem regras que fujam do
				escopo do onClick.
			</Section>
			<Section subHeading="Importação">
				<CodeBlock>{`import { OptionButton } from '@sajermann/ui-react';`}</CodeBlock>
			</Section>

			<Section subHeading="Outras Possibilidades">
				É possível personalizar seus botões de diversas formas diferentes, por
				exemplo manter o botão com tamanho fixo para que ele não fique se
				mexendo na alteração dos icones, outro recurso bacana é o ellipsis, veja
				abaixo alguns exemplos diversificados.
				<div className={styles.blockH3}>
					<h3>Tamanhos</h3>
					<ComponentBlock code={ex6}>
						<OptionButton
							style={{
								color: '#fff',
								width: '150px',
								height: '150px',
								backgroundImage: `url(${palmeiras})`,
							}}
						>
							{/* <img
								src={palmeiras}
								style={{
									width: '100px',
									height: '100px',
								}}
								alt="edasd"
							/> */}
							Notícias
						</OptionButton>
					</ComponentBlock>
				</div>
			</Section>
		</main>
	);
}
