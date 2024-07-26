function toBold(text: string) {
	return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

function toItalic(text: string) {
	return text.replace(/(\*|_)(.*?)\1/g, '<em>$2</em>');
}

function toLink(text: string) {
	return text.replace(
		/\[(.*?)\]\((.*?)\)/g,
		'<a class="underline text-blue-500" href="$2">$1</a>',
	);
}

// function toList(text: string) {
// 	return text.replace(/\n\* ([^\s]+)/g, '<li class="ml-6">$1</li>');
// }

function toList(texto: string) {
	let listaAberta = false;
	let listaHtml = '';

	// Processar cada linha do texto
	texto.split('\n').forEach((linha, index) => {
		// Verifica se a linha é o início de um item da lista
		if (/^\*\s/.test(linha)) {
			// Se a lista já está aberta, adiciona uma nova linha ao HTML da lista
			if (listaAberta) {
				listaHtml += '\n';
			}

			// Marca a lista como aberta e adiciona o item da lista
			listaAberta = true;
			listaHtml += `<li>${linha.slice(2)}</li>`;
		} else {
			// Se a linha não é o início de um item da lista, fecha a lista se ela estiver aberta
			if (listaAberta) {
				listaHtml += '</ul>';
				listaAberta = false;
			}

			// Adiciona a linha ao HTML como está
			listaHtml += `${linha}\n`;
		}

		// Se for a última linha, fecha a lista
		if (index === texto.split('\n').length - 1 && listaAberta) {
			listaHtml += '</ul>';
		}
	});

	// Retorna o HTML da lista
	return listaHtml;
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
	console.log({ html });
	html = toEnter(html);
	return html;
}
