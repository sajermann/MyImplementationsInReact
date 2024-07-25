export function toHtml(markdownText: string) {
	let html = markdownText;

	// Negrito
	html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

	// Itálico
	html = html.replace(/(\*|_)(.*?)\1/g, '<span class="italic">$2</span>');

	// Links
	html = html.replace(
		/\[(.*?)\]\((.*?)\)/g,
		'<a class="underline text-blue-500" href="$2">$1</a>',
	);

	// Enter
	html = html.replace(/\n/g, '<br />');

	// Listas não ordenadas
	// html = html.replace(/(-|\*|\+)\s+(.*)/g, '<ul><li>$2</li></ul>');
	html = html.replace(/(\n\*)(.*?)(?=\n\*)/gs, '<br /><ul><li>$2</li></ul>');

	return html;
}
