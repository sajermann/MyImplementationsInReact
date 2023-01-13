import { useState } from 'react';
import { Button } from '../../Components/Button';
import { Drawer } from '../../Components/Drawer';
import { CodeBlock } from '../../Components/CodeBlock';
import { ComponentBlock } from '../../Components/ComponentBlock';
import Section from '../../Components/Section';
import { ex1, ex2, ex3, ex4, ex5, ex6, ex7 } from './exs';

export default function DrawerDocs() {
	const [isOpenLeft, setIsOpenLeft] = useState(false);
	const [isOpenRight, setIsOpenRight] = useState(false);
	const [isOpenBotttom, setIsOpenBottom] = useState(false);
	const [isOpenTop, setIsOpenTop] = useState(false);

	const [isOpenLeft10, setIsOpenLeft10] = useState(false);
	const [isOpenRight40, setIsOpenRight40] = useState(false);
	const [isOpenBottom80, setIsOpenBottom80] = useState(false);
	const [isOpenTopFull, setIsOpenTopFull] = useState(false);

	const [isOpenBackDrop, setIsOpenBackDrop] = useState(false);
	const [isOpenWithoutBackDrop, setIsOpenWithoutBackDrop] = useState(false);

	const [isOpenEsc, setIsOpenEsc] = useState(false);
	const [isOpenEscDisabled, setIsOpenEscDisabled] = useState(false);

	const [isOpenDisableClickOnBackdrop, setIsOpenDisableClickOnBackdrop] =
		useState(false);
	const [
		isOpenDisableClickOnBackdropDisabled,
		setIsOpenDisableClickOnBackdropDisabled,
	] = useState(false);

	const [isOpenOneClickToClose, setIsOpenOneClickToClose] = useState(false);
	const [isOpenOneClickToCloseDisabled, setIsOpenOneClickToCloseDisabled] =
		useState(false);

	const [isOpenLeftBlue, setIsOpenLeftBlue] = useState(false);
	const [isOpenLeftRed, setIsOpenLeftRed] = useState(false);

	return (
		<main data-content="content-main">
			<Section heading="Drawer">
				O componente de Drawer ajuda a fornecer mais opções para o usuário
				quando necessário e deixando a tela com mais espaço, o drawer pode ser
				usado para armazenar as opções de perfil, menu, entre outras.
			</Section>
			<Section subHeading="Importação">
				<CodeBlock>{`import { Drawer } from '@sajermann/ui-react';`}</CodeBlock>
			</Section>

			<Section subHeading="Lado de Abertura">
				Existem 4 opções para escolher a origem da abertura do drawer:{' '}
				<span className="highlight">left</span> |{' '}
				<span className="highlight">right</span> |{' '}
				<span className="highlight">bottom</span> |{' '}
				<span className="highlight">top</span>
				<ComponentBlock code={ex1}>
					<Button
						colorStyle="Primary"
						type="button"
						onClick={() => setIsOpenLeft(true)}
					>
						Abrir da Esquerda
					</Button>
					<Drawer
						openFrom="left"
						percentage={50}
						isOpen={isOpenLeft}
						onClose={() => setIsOpenLeft(false)}
					>
						<div>Left</div>
					</Drawer>

					<Button
						colorStyle="Secondary"
						type="button"
						onClick={() => setIsOpenRight(true)}
					>
						Abrir da Direita
					</Button>
					<Drawer
						openFrom="right"
						percentage={50}
						isOpen={isOpenRight}
						onClose={() => setIsOpenRight(false)}
						disableBackdrop
					>
						<div>Right</div>
					</Drawer>

					<Button
						colorStyle="Success"
						type="button"
						onClick={() => setIsOpenBottom(true)}
					>
						Abrir de baixo
					</Button>
					<Drawer
						openFrom="bottom"
						percentage={50}
						isOpen={isOpenBotttom}
						onClose={() => setIsOpenBottom(false)}
					>
						<div>Bottom</div>
					</Drawer>
					<Button
						colorStyle="Warning"
						type="button"
						onClick={() => setIsOpenTop(true)}
					>
						Abrir de Cima
					</Button>
					<Drawer
						openFrom="top"
						percentage={50}
						isOpen={isOpenTop}
						onClose={() => setIsOpenTop(false)}
					>
						<div>Top</div>
					</Drawer>
				</ComponentBlock>
			</Section>

			<Section subHeading="Porcentagem">
				O tamanho de abertura é controlado pela propriedade{' '}
				<span className="highlight">percentage</span>, essa propriedade é
				opcional e caso não seja informada o componente adotara a marca de 100%
				da tela:
				<ComponentBlock code={ex2}>
					<Button
						colorStyle="Primary"
						type="button"
						onClick={() => setIsOpenLeft10(true)}
					>
						Esquerda 10%
					</Button>
					<Drawer
						openFrom="left"
						percentage={10}
						isOpen={isOpenLeft10}
						onClose={() => setIsOpenLeft10(false)}
					>
						<div>Left</div>
					</Drawer>

					<Button
						colorStyle="Secondary"
						type="button"
						onClick={() => setIsOpenRight40(true)}
					>
						Direita 40%
					</Button>
					<Drawer
						openFrom="right"
						percentage={40}
						isOpen={isOpenRight40}
						onClose={() => setIsOpenRight40(false)}
						disableBackdrop
					>
						<div>Right</div>
					</Drawer>

					<Button
						colorStyle="Success"
						type="button"
						onClick={() => setIsOpenBottom80(true)}
					>
						Baixo 80%
					</Button>
					<Drawer
						openFrom="bottom"
						percentage={80}
						isOpen={isOpenBottom80}
						onClose={() => setIsOpenBottom80(false)}
					>
						<div>Bottom</div>
					</Drawer>
					<Button
						colorStyle="Warning"
						type="button"
						onClick={() => setIsOpenTopFull(true)}
					>
						Cima 100%
					</Button>
					<Drawer
						openFrom="top"
						isOpen={isOpenTopFull}
						onClose={() => setIsOpenTopFull(false)}
					>
						<div>
							<Button
								colorStyle="Primary"
								variant="Outlined"
								type="button"
								onClick={() => setIsOpenTopFull(false)}
							>
								Fechar
							</Button>
						</div>
					</Drawer>
				</ComponentBlock>
			</Section>

			<Section subHeading="Efeito de fundo">
				O efeito escurecido de fundo pode ser gerenciado pela propriedade{' '}
				<span className="highlight">disableBackdrop</span>, essa propriedade é
				opcional e o valor padrão dela é false:
				<ComponentBlock code={ex3}>
					<Button
						colorStyle="Primary"
						type="button"
						onClick={() => setIsOpenBackDrop(true)}
					>
						Com Back Drop
					</Button>
					<Drawer
						openFrom="left"
						percentage={50}
						isOpen={isOpenBackDrop}
						onClose={() => setIsOpenBackDrop(false)}
					>
						<div>Left</div>
					</Drawer>

					<Button
						colorStyle="Secondary"
						type="button"
						onClick={() => setIsOpenWithoutBackDrop(true)}
					>
						Sem Back Drop
					</Button>
					<Drawer
						openFrom="left"
						percentage={50}
						isOpen={isOpenWithoutBackDrop}
						onClose={() => setIsOpenWithoutBackDrop(false)}
						disableBackdrop
					>
						<div>Right</div>
					</Drawer>
				</ComponentBlock>
			</Section>

			<Section subHeading="Fechar com ESC">
				A propriedade <span className="highlight">disableEsc</span> manipula o
				fechamento do drawer com a tecla ESC:
				<ComponentBlock code={ex4}>
					<Button
						colorStyle="Primary"
						type="button"
						onClick={() => setIsOpenEsc(true)}
					>
						Esc habilitado
					</Button>
					<Drawer
						openFrom="left"
						percentage={50}
						isOpen={isOpenEsc}
						onClose={() => setIsOpenEsc(false)}
					>
						<div>Left</div>
					</Drawer>

					<Button
						colorStyle="Secondary"
						type="button"
						onClick={() => setIsOpenEscDisabled(true)}
					>
						Esc desabilitado
					</Button>
					<Drawer
						disableEsc
						openFrom="left"
						percentage={50}
						isOpen={isOpenEscDisabled}
						onClose={() => setIsOpenEscDisabled(false)}
						disableBackdrop
					>
						<div>Right</div>
					</Drawer>
				</ComponentBlock>
			</Section>

			<Section subHeading="Clicar fora">
				A propriedade <span className="highlight">disableClickOnBackdrop</span>{' '}
				manipula o fechamento do drawer com o clique no lado de fora do drawer:
				<ComponentBlock code={ex5}>
					<Button
						colorStyle="Primary"
						type="button"
						onClick={() => setIsOpenDisableClickOnBackdrop(true)}
					>
						Clique Fora
					</Button>
					<Drawer
						openFrom="left"
						percentage={50}
						isOpen={isOpenDisableClickOnBackdrop}
						onClose={() => setIsOpenDisableClickOnBackdrop(false)}
					>
						<div>Left</div>
					</Drawer>

					<Button
						colorStyle="Secondary"
						type="button"
						onClick={() => setIsOpenDisableClickOnBackdropDisabled(true)}
					>
						Sem Clique Fora
					</Button>
					<Drawer
						disableClickOnBackdrop
						openFrom="left"
						percentage={50}
						isOpen={isOpenDisableClickOnBackdropDisabled}
						onClose={() => setIsOpenDisableClickOnBackdropDisabled(false)}
						disableBackdrop
					>
						<div>Right</div>
					</Drawer>
				</ComponentBlock>
			</Section>

			<Section subHeading="Um clique para fechar">
				A propriedade <span className="highlight">oneClickToClose</span>{' '}
				manipula o fechamento do drawer com o clique em qualquer lugar do
				drawer, muito útil para se utilizar em menus laterais:
				<ComponentBlock code={ex6}>
					<Button
						colorStyle="Primary"
						type="button"
						onClick={() => setIsOpenOneClickToClose(true)}
					>
						Um clique desabilitado
					</Button>
					<Drawer
						openFrom="left"
						percentage={50}
						isOpen={isOpenOneClickToClose}
						onClose={() => setIsOpenOneClickToClose(false)}
					>
						<div>Left</div>
					</Drawer>

					<Button
						colorStyle="Secondary"
						type="button"
						onClick={() => setIsOpenOneClickToCloseDisabled(true)}
					>
						Um clique habilitado
					</Button>
					<Drawer
						oneClickToClose
						openFrom="left"
						percentage={50}
						isOpen={isOpenOneClickToCloseDisabled}
						onClose={() => setIsOpenOneClickToCloseDisabled(false)}
						disableBackdrop
					>
						<div>Right</div>
					</Drawer>
				</ComponentBlock>
			</Section>

			<Section subHeading="Cores">
				Personalize do jeito que desejar o interior do drawer, veja alguns
				exemplos:
				<ComponentBlock code={ex7}>
					<Button
						colorStyle="Primary"
						type="button"
						onClick={() => setIsOpenLeftBlue(true)}
					>
						Azul
					</Button>
					<Drawer
						openFrom="left"
						percentage={50}
						isOpen={isOpenLeftBlue}
						onClose={() => setIsOpenLeftBlue(false)}
					>
						<div
							style={{
								backgroundColor: 'blue',
								height: '100%',
								color: 'white',
							}}
						>
							Azul
						</div>
					</Drawer>

					<Button
						colorStyle="Secondary"
						type="button"
						onClick={() => setIsOpenLeftRed(true)}
					>
						Vermelho
					</Button>
					<Drawer
						openFrom="right"
						percentage={50}
						isOpen={isOpenLeftRed}
						onClose={() => setIsOpenLeftRed(false)}
						disableBackdrop
					>
						<div
							style={{
								backgroundColor: 'red',
								height: '100%',
								color: 'white',
							}}
						>
							Vermelho
						</div>
					</Drawer>
				</ComponentBlock>
			</Section>
		</main>
	);
}
