export const ex1 = `const [isOpenLeft, setIsOpenLeft] = useState(false);
const [isOpenRight, setIsOpenRight] = useState(false);
const [isOpenBotttom, setIsOpenBottom] = useState(false);
const [isOpenTop, setIsOpenTop] = useState(false);

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
`;

export const ex2 = `const [isOpenLeft10, setIsOpenLeft10] = useState(false);
const [isOpenRight40, setIsOpenRight40] = useState(false);
const [isOpenBottom80, setIsOpenBottom80] = useState(false);
const [isOpenTopFull, setIsOpenTopFull] = useState(false);

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
`;

export const ex3 = `const [isOpenBackDrop, setIsOpenBackDrop] = useState(false);
const [isOpenWithoutBackDrop, setIsOpenWithoutBackDrop] = useState(false);

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
`;

export const ex4 = `const [isOpenEsc, setIsOpenEsc] = useState(false);
const [isOpenEscDisabled, setIsOpenEscDisabled] = useState(false);

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
`;

export const ex5 = `const [isOpenDisableClickOnBackdrop, setIsOpenDisableClickOnBackdrop] = useState(false);
const [isOpenDisableClickOnBackdropDisabled,setIsOpenDisableClickOnBackdropDisabled] = useState(false);

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
`;

export const ex6 = `const [isOpenOneClickToClose, setIsOpenOneClickToClose] = useState(false);
const [isOpenOneClickToCloseDisabled, setIsOpenOneClickToCloseDisabled] = useState(false);

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
</Drawer>`;

export const ex7 = `const [isOpenLeftBlue, setIsOpenLeftBlue] = useState(false);
const [isOpenLeftRed, setIsOpenLeftRed] = useState(false);

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
</Drawer>`;
