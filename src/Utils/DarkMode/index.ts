export function handleChangeDarkModeInDom(darkModeNow: boolean) {
	const body = document.querySelector('body');
	if (!darkModeNow) {
		if (body) {
			body.classList.remove('dark');
		}
		return;
	}

	if (body) {
		body.classList.add('dark');
	}
}
