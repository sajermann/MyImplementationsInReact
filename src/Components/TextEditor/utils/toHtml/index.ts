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

// function toList(text: string) {
// 	return text.replace(/\n\* ([^\s]+)/g, '<li class="ml-6">$1</li>');
// }

function toList(text: string) {
	let htmlMounted = '';
	let listOpened = false;

	// Processar cada linha do text
	text.split('\n').forEach((linha, index) => {
		// Verifica se a linha é o início de um item da lista
		if (/^\*\s(.+)/.test(linha)) {
			// Remove o asterisco e os espaços iniciais do item
			const item = linha.slice(2);
			// Se a lista ainda não foi aberta, inicia a lista com <ul>
			if (!listOpened) {
				htmlMounted += '<ul>\n';
				listOpened = true;
			}
			// Adiciona o item como um elemento <li> ao HTML da lista
			htmlMounted += `<li>${item}</li>\n`;
		} else {
			// Se a linha não é o início de um item da lista, adiciona-a ao HTML como está
			htmlMounted += `${linha}\n`;
		}

		// Se for a última linha, fecha a lista
		if (index === text.split('\n').length - 1 && listOpened) {
			htmlMounted += '</ul>';
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
	console.log({ markdownText, html });
	html = toEnter(html);
	return html;
}
