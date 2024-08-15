function toBold(text: string) {
	return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

function toItalic(text: string) {
	return text.replace(/(\*|_)(.*?)\1/g, '<em>$2</em>');
}

function toLink(text: string) {
	return text.replace(
		/\[(.*?)\]\((.*?)\)/g,
		'<a class="underline text-blue-500" href="$2" target="_blank">$1</a>',
	);
}

function toList(text: string) {
	let htmlMounted = '';
	let listOpened = false;

	// Processar cada linha do text
	text.split('\n').forEach(row => {
		// Verifica se a linha é o início de um item da lista
		if (row.substring(0, 2) === '* ') {
			// Remove o asterisco e os espaços iniciais do item
			const item = row.slice(2);
			// Se a lista ainda não foi aberta, inicia a lista com <ul>
			if (!listOpened) {
				htmlMounted += '<ul class="ml-8 list-disc">\n';
				listOpened = true;
			}
			// Adiciona o item como um elemento <li> ao HTML da lista
			htmlMounted += `<li>${item}</li>\n`;
		} else {
			// Se caiu no else é porque a não é lista, então precisamos ver se a lista está aberta e fecha-la
			if (listOpened) {
				htmlMounted += '</ul>';
				listOpened = false;
			}
			// Se a linha não é o início de um item da lista, adiciona-a ao HTML como está
			htmlMounted += `${row}\n`;
		}
	});

	// Retorna o HTML da lista
	return htmlMounted;
}

function toEnter(text: string) {
	return text.replace(/\n/g, '<br />');
}

export function toHtml(markdownText: string) {
	let html = markdownText;
	html = toBold(html);
	html = toItalic(html);
	html = toLink(html);
	html = toList(html);
	html = toEnter(html);
	return html;
}
