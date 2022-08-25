import { useState } from 'react';
import { Button } from '../../../components';
import { Drawer } from '../../../components/Drawer';
import { CodeBlock } from '../../../ComponentsInternal/CodeBlock';
import { ComponentBlock } from '../../../ComponentsInternal/ComponentBlock';
import Section from '../../../ComponentsInternal/Section';
import { ex1 } from './exs';

export default function DrawerDocs() {
	const [isOpenTop, setIsOpenTop] = useState(false);
	const [isOpenLeft, setIsOpenLeft] = useState(false);
	const [isOpenRight, setIsOpenRight] = useState(false);
	const [isOpenFull, setIsOpenFull] = useState(false);

	return (
		<main>
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
						setIsOpen={e => setIsOpenLeft(e)}
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
						setIsOpen={e => setIsOpenRight(e)}
						disableBackdrop
					>
						<div>Right</div>
					</Drawer>

					<Button
						colorStyle="Success"
						type="button"
						onClick={() => setIsOpenFull(true)}
					>
						Abrir de baixo
					</Button>
					<Drawer
						openFrom="bottom"
						percentage={50}
						isOpen={isOpenFull}
						setIsOpen={e => setIsOpenFull(e)}
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
						setIsOpen={e => setIsOpenTop(e)}
					>
						<div>Top</div>
					</Drawer>
				</ComponentBlock>
			</Section>
		</main>
	);
}
