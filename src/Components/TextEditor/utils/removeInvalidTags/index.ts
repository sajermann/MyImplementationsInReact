export function removeInvalidTags(textWithTags: string) {
	return textWithTags
		.replaceAll('<div>', '')
		.replaceAll('</div>', '')
		.replaceAll('<br>', '');
}
