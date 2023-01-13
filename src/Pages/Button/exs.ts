export const ex1 = `<Button type="button">Default</Button>
<Button type="button" variant="Outlined">Outlined</Button>
<Button type="button" variant="Option">Option</Button>`;

export const ex2 = `<Button type="button" colorStyle="Primary">Primary</Button>
<Button type="button" colorStyle="Secondary">Secondary</Button>
<Button type="button" colorStyle="Success">Success</Button>
<Button type="button" colorStyle="Warning">Warning</Button>`;

export const ex3 = `<Button
	disabled
	colorStyle="Primary"
	type="button"
	onClick={handleSave}
	withFeedback={{
		loadingOptions: {
		isLoading: true,
		},
	}}
>
	Default
</Button>
<Button
	disabled
	colorStyle="Secondary"
	variant="Outlined"
	type="button"
	onClick={handleSave}
	withFeedback={{
		loadingOptions: {
		isLoading: true,
		typeLoadingIcon: 'Points',
		},
	}}
>
	Points
</Button>
<Button
	disabled
	colorStyle="Success"
	variant="Option"
	type="button"
	onClick={handleSave}
	withFeedback={{
		loadingOptions: {
		isLoading: true,
		fullIcon: true,
		},
	}}
>
	Full Icon
</Button>
<Button
	disabled
	colorStyle="Warning"
	type="button"
	onClick={handleSave}
	withFeedback={{
		loadingOptions: {
		isLoading: true,
		customIcon: <CustomLoading />,
		},
	}}
>
	Custom Icon
</Button>`;

export const ex4 = `const [isLoading, setIsLoading] = useState(false);
const [success, setSuccess] = useState(false);

function delay(delayMs: number): Promise<void> {
	return new Promise(resolve => {
		setTimeout(() => resolve(), delayMs);
	});
}

async function handleSave() {
	setIsLoading(true);
	await delay(3000);
	setIsLoading(false);
	setSuccess(true);
	await delay(2000);
	setSuccess(false);
}

<Button
	disabled={isLoading}
	colorStyle="Primary"
	type="button"
	onClick={handleSave}
	withFeedback={{
		loadingOptions: {
			isLoading,
		},
		successOptions: {
			success,
		},
	}}
>
	Sucesso
</Button>
<Button
	disabled={isLoading}
	colorStyle="Success"
	variant="Outlined"
	type="button"
	onClick={handleSave}
	withFeedback={{
		loadingOptions: {
			isLoading,
		},
		successOptions: {
			success,
			fullIcon: true,
		},
	}}
>
	Full Icon
</Button>
<Button
	disabled={isLoading}
	colorStyle="Warning"
	type="button"
	onClick={handleSave}
	withFeedback={{
		loadingOptions: {
			isLoading,
		},
		successOptions: {
			success,
			customIcon: <TrendUp />,
		},
	}}
>
	Custom Icon
</Button>
`;

export const ex5 = `const [isLoading, setIsLoading] = useState(false);
const [failed, setFailed] = useState(false);

function delay(delayMs: number): Promise<void> {
	return new Promise(resolve => {
		setTimeout(() => resolve(), delayMs);
	});
}

async function handleSaveFailed() {
	setIsLoading(true);
	await delay(3000);
	setIsLoading(false);
	setFailed(true);
	await delay(2000);
	setFailed(false);
}

<Button
	disabled={isLoading}
	colorStyle="Primary"
	type="button"
	onClick={handleSaveFailed}
	withFeedback={{
		loadingOptions: {
			isLoading,
		},
		failedOptions: {
			failed,
		},
	}}
>
	Falha
</Button>
<Button
	disabled={isLoading}
	colorStyle="Secondary"
	variant="Outlined"
	type="button"
	onClick={handleSaveFailed}
	withFeedback={{
		loadingOptions: {
			isLoading,
		},
		failedOptions: {
			failed,
			fullIcon: true,
		},
	}}
>
	Full Icon
</Button>
<Button
	disabled={isLoading}
	colorStyle="Warning"
	type="button"
	onClick={handleSaveFailed}
	withFeedback={{
		loadingOptions: {
			isLoading,
		},
		failedOptions: {
			failed: true,
			customIcon: <TrendDown />,
		},
	}}
>
	Custom Icon
</Button>
`;

export const ex6 = `const [isLoading, setIsLoading] = useState(false);
const [success, setSuccess] = useState(false);

function delay(delayMs: number): Promise<void> {
	return new Promise(resolve => {
		setTimeout(() => resolve(), delayMs);
	});
}

async function handleSave() {
	setIsLoading(true);
	await delay(3000);
	setIsLoading(false);
	setSuccess(true);
	await delay(2000);
	setSuccess(false);
}

<Button
	style={{ width: '250px', height: '50px' }}
	disabled={isLoading}
	colorStyle="Primary"
	type="button"
	onClick={handleSave}
	withFeedback={{
		loadingOptions: {
			isLoading,
			fullIcon: true,
		},
		successOptions: {
			success,
			fullIcon: true,
		},
	}}
>
	Fixo Somente Icone
</Button>
<Button
	style={{ width: '250px', height: '50px' }}
	disabled={isLoading}
	colorStyle="Secondary"
	type="button"
	onClick={handleSave}
	withFeedback={{
		loadingOptions: {
			isLoading,
		},
		successOptions: {
			success,
		},
	}}
>
	Fixo Com Icone
</Button>
<Button
	style={{ width: '100px', height: '50px' }}
	disabled={isLoading}
	colorStyle="Success"
	type="button"
	onClick={handleSave}
	withFeedback={{
		loadingOptions: {
			isLoading,
		},
		successOptions: {
			success,
		},
	}}
>
	Ellipsis
</Button>
`;

export const ex7 = `const [isLoading, setIsLoading] = useState(false);
const [success, setSuccess] = useState(false);

function delay(delayMs: number): Promise<void> {
	return new Promise(resolve => {
		setTimeout(() => resolve(), delayMs);
	});
}

async function handleSave() {
	setIsLoading(true);
	await delay(3000);
	setIsLoading(false);
	setSuccess(true);
	await delay(2000);
	setSuccess(false);
}

<Button
	style={{ minWidth: '50px', height: '50px' }}
	disabled={isLoading}
	colorStyle="Success"
	variant="Outlined"
	type="button"
	onClick={handleSave}
	withFeedback={{
		loadingOptions: {
			isLoading,
		},
		successOptions: {
			success,
		},
	}}
	endIcon={<WhatsappLogo size={30} />}
/>
<Button
	style={{ minWidth: '50px', height: '50px' }}
	disabled={isLoading}
	colorStyle="Secondary"
	variant="Outlined"
	type="button"
	onClick={handleSave}
	withFeedback={{
		loadingOptions: {
			isLoading,
			typeLoadingIcon: 'Points',
		},
		successOptions: {
			success,
		},
	}}
	endIcon={<YoutubeLogo size={30} />}
/>
<Button
	style={{ minWidth: '50px', height: '50px', borderRadius: '50%' }}
	disabled={isLoading}
	colorStyle="Primary"
	variant="Outlined"
	type="button"
	onClick={handleSave}
	withFeedback={{
		loadingOptions: {
			isLoading,
			typeLoadingIcon: 'Points',
		},
		successOptions: {
			success,
		},
	}}
	endIcon={<TelegramLogo size={30} />}
/>`;

export const ex8 = `<style>
.custom {
	background-color: #f535e6;
	border: 1px solid green;
	border-radius: 0px;
}

.custom > div {
	color: white;
}

.custom > span {
	background-color: yellow !important;
}

.custom:hover {
	background-color: #f590e6;
}

.custom:focus {
	outline: 2px solid green;
}

.custom2 {
	background-color: rgb(155, 165, 10);
	border: 1px solid red;
	border-radius: 30px;
}

.custom2 > div {
	color: white;
}

.custom2 > span {
	display: none;
}

.custom2:hover {
	background-color: rgb(155, 165, 120);
}

.custom2:focus {
	outline: 2px solid red;
}

.custom2:active {
	transform: scale(0.98);
}
</style>

<Button type="button" variant="Outlined" className={styles.custom}>
	Custom 1
</Button>
<Button type="button" variant="Outlined" className={styles.custom2}>
	Custom 2
</Button>`;
