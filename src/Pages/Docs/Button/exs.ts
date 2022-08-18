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
	onClick={() => handleSave()}
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
	onClick={() => handleSave()}
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
	onClick={() => handleSave()}
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
	onClick={() => handleSave()}
	withFeedback={{
		loadingOptions: {
		isLoading: true,
		customIcon: <CustomLoading />,
		},
	}}
>
	Custom Icon
</Button>`;
