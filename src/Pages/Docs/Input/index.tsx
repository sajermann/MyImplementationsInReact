/* eslint-disable jsx-a11y/label-has-associated-control */
import { Scales, WhatsappLogo, YoutubeLogo } from 'phosphor-react';
import Section from '../../../ComponentsInternal/Section';
import { ComponentBlock } from '../../../ComponentsInternal/ComponentBlock';
import { ex1, ex2, ex3, ex4, ex5 } from './exs';
import { CodeBlock } from '../../../ComponentsInternal/CodeBlock';
import { Input } from '../../../components/Input';
import { Button } from '../../../components';

export default function InputDocs() {
	return (
		<main>
			<Section heading="Inputs">
				O input dá ao usuário a oportunidade de inserir dados na página, nosso
				componente de input tenta ser o mais fiel possível com algumas
				melhorias.
			</Section>
			<Section subHeading="Importação">
				<CodeBlock>{`import { Input } from '@sajermann/ui-react';`}</CodeBlock>
			</Section>

			<Section subHeading="Tradicional">
				Input mais próximo possível do vanilla:
				<ComponentBlock code={ex1}>
					<Input placeholder="Sem Label" />
					<Input placeholder="Com onChange" onChange={e => console.log(e)} />
					<Input placeholder="Com Class" className="MyClass" />
				</ComponentBlock>
			</Section>

			<Section subHeading="Label">
				É possível adicionar label no input através da propriedade{' '}
				<span className="highlight">customlabel</span> ou colocando a label por
				fora caso queira uma personalização mais livre:
				<ComponentBlock code={ex2}>
					<Input
						customlabel={{ text: 'Com Label no Top' }}
						id="withLabelInTop"
					/>

					<Input
						customlabel={{ text: 'Com Label na esquerda', position: 'Left' }}
						id="withLabelinLeft"
					/>
					<label
						style={{
							width: '100%',
							background: 'green',
							color: 'white',
						}}
					>
						Label personalizada
						<Input />
					</label>
				</ComponentBlock>
			</Section>

			<Section subHeading="Anexos">
				Você pode anexar informações ao seu input através das propriedades{' '}
				<span className="highlight">startAttach</span> e{' '}
				<span className="highlight">endAttach</span>, essas informações podem
				ser de texto ou conteúdo:
				<ComponentBlock code={ex3}>
					<Input
						customlabel={{ text: 'Com anexo de texto no início' }}
						startAttach="http://"
						id="withAttchText"
					/>

					<Input
						customlabel={{ text: 'Com anexo personalizado no início' }}
						startAttach={
							<div
								style={{
									backgroundColor: 'blue',
									height: '100%',
									alignItems: 'center',
									justifyContent: 'center',
									display: 'flex',
									width: '115px',
								}}
							>
								http://
							</div>
						}
						id="withAttchTextCustom"
					/>

					<Input
						customlabel={{ text: 'Com anexo de texto no fim' }}
						endAttach=".com"
						id="withAttchTextEnd"
					/>

					<Input
						customlabel={{ text: 'Com anexo personalizado no fim' }}
						endAttach={
							<div
								style={{
									backgroundColor: 'blue',
									height: '100%',
									alignItems: 'center',
									justifyContent: 'center',
									display: 'flex',
									width: '115px',
								}}
							>
								.com
							</div>
						}
						id="withAttchTextCustomEnd"
					/>

					<Input
						customlabel={{ text: 'Com anexo de texto no início e no fim' }}
						id="attchStartAndEnd"
						startAttach="http://"
						endAttach=".com"
					/>

					<Input
						customlabel={{
							text: 'Com anexo de personalizado no início e no fim',
						}}
						id="attchStartAndEnd"
						startAttach={
							<div
								style={{
									backgroundColor: 'blue',
									height: '100%',
									alignItems: 'center',
									justifyContent: 'center',
									display: 'flex',
									width: '115px',
								}}
							>
								http://
							</div>
						}
						endAttach={
							<div
								style={{
									backgroundColor: 'blue',
									height: '100%',
									alignItems: 'center',
									justifyContent: 'center',
									display: 'flex',
									width: '115px',
								}}
							>
								.com
							</div>
						}
					/>
				</ComponentBlock>
			</Section>

			<Section subHeading="Com conteúdo dentro">
				Através da propriedade <span className="highlight">startContent</span> e{' '}
				<span className="highlight">endContent</span> é possível inserir
				conteúdo dentro do input:
				<ComponentBlock code={ex4}>
					<Input
						placeholder="Conteúdo dentro no início"
						startContent={
							<Button
								style={{ minWidth: '10px', height: '31px' }}
								colorStyle="Success"
								variant="Option"
								type="button"
								onClick={() => alert('Clicou')}
								endIcon={<WhatsappLogo size={30} />}
							/>
						}
					/>
					<Input
						placeholder="Conteúdo dentro no fim"
						endContent={
							<Button
								style={{ minWidth: '10px', height: '31px' }}
								colorStyle="Secondary"
								variant="Option"
								type="button"
								onClick={() => alert('Clicou')}
								endIcon={<YoutubeLogo size={30} />}
							/>
						}
					/>
					<Input
						type="number"
						step="any"
						placeholder="Conteúdo dentro no início e no fim"
						onChange={e => console.log({ e })}
						startContent={
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									width: '40px',
									height: '30px',
									color: 'black',
								}}
							>
								<Scales size={30} />
							</div>
						}
						endContent={
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									width: '40px',
									height: '32px',
									fontSize: '20px',
									fontWeight: 'bold',
									color: 'black',
								}}
							>
								KG
							</div>
						}
					/>
				</ComponentBlock>
			</Section>

			<Section subHeading="Com Regex">
				Através da propriedade{' '}
				<span className="highlight">removeBeforeChange</span> é possível
				bloquear caracteres indesejados no momento do onChange, os bloqueios pré
				definidos são <span className="highlight">number</span> |{' '}
				<span className="highlight">letterUpper</span> |{' '}
				<span className="highlight">letterLow</span> |{' '}
				<span className="highlight">specialCharacter</span> e você também pode
				informar um regex personalizado através da opção{' '}
				<span className="highlight">regexForReplace</span>, veja abaixo os
				exemplos:
				<ComponentBlock code={ex5}>
					<Input
						placeholder="Bloquear números"
						removeBeforeChange={{ number: true }}
					/>
					<Input
						placeholder="Bloquear letras"
						removeBeforeChange={{ letterLow: true, letterUpper: true }}
					/>
					<Input
						placeholder="Bloquear letras maiúsculas"
						removeBeforeChange={{ letterUpper: true }}
					/>
					<Input
						placeholder="Bloquear letras minúsculas"
						removeBeforeChange={{ letterLow: true }}
					/>
					<Input
						placeholder="Bloquear caracteres especiais"
						removeBeforeChange={{ specialCharacter: true }}
					/>
					<Input
						placeholder="Bloquear números do 1 ao 5"
						removeBeforeChange={{ regexForReplace: /[1-5]/g }}
					/>
				</ComponentBlock>
			</Section>
		</main>
	);
}
