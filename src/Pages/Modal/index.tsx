import { useState } from 'react';
import {
	TelegramLogo,
	TrendDown,
	TrendUp,
	WhatsappLogo,
	YoutubeLogo,
} from 'phosphor-react';
import { Modal } from '~/Components/Modal';
import { CodeBlock } from '../../Components/CodeBlock';
import { Button } from '../../Components/Button';
import styles from './styles.module.css';
import Section from '../../Components/Section';
import { ComponentBlock } from '../../Components/ComponentBlock';
import CustomLoading from '../../Components/CustomLoading';

export function ModalPage() {
	const [isOpenModal1, setIsOpenModal1] = useState(false);
	const [isOpenModal2, setIsOpenModal2] = useState(false);
	const [isOpenModal3, setIsOpenModal3] = useState(false);

	return (
		<main data-content="content-main">
			<Section heading="Botões">
				Implementação do componente de Modal utilizando a biblioteca
				@radix-ui/react-dialog.
			</Section>
			<Section subHeading="Instalação da Biblioteca">
				<CodeBlock>npm i @radix-ui/react-dialog;</CodeBlock>
			</Section>
			<Section subHeading="Importação do Componente">
				<CodeBlock>{`import * as Dialog from "@radix-ui/react-dialog";`}</CodeBlock>
			</Section>
			<Section subHeading="Implementação">
				<a
					href="https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Components/Button"
					target="_blank"
					rel="noopener noreferrer"
				>
					Github
				</a>
			</Section>
			<Section subHeading="Códigos dos Exemplos">
				<a
					href="https://github.com/sajermann/MyImplementationsInReact/tree/main/src/Pages/Button"
					target="_blank"
					rel="noopener noreferrer"
				>
					Github
				</a>
			</Section>

			<Section subHeading="Modal Comum">
				Modal comum com informações comuns
				<ComponentBlock>
					<Button className={styles.btn} onClick={() => setIsOpenModal1(true)}>
						Abrir Modal
					</Button>
					<Modal
						// title={translate('CONFIGURE_SUPER_FILTER')}
						title="Bruno"
						width="70%"
						isOpen={isOpenModal1}
						onClose={() => setIsOpenModal1(false)}
					>
						<div className="w-">Infos</div>
					</Modal>
				</ComponentBlock>
			</Section>
		</main>
	);
}
