/**
 * @vitest-environment jsdom
 */
import { RefObject } from 'react';
import { it, describe, expect } from 'vitest';
import { handleList } from '.';

describe('SimpleMdTextEditor/Utils/handleList', () => {
	it(`should apply list - select text empty`, async () => {
		handleList({
			completeText: `Test`,
			selectedText: ``,
			selectionStart: 4,
			selectionEnd: 4,
			beforeText: `Test`,
			afterText: ``,
			ref: {} as RefObject<HTMLTextAreaElement>,
			callback: data => {
				expect(JSON.stringify({ data })).toBe(
					JSON.stringify({ data: `Test\n* ` }),
				);
			},
		});
	});

	it(`should apply list - select text filled`, async () => {
		handleList({
			completeText: `"Lista de supermercado \n\n* Batata \n* Le**g**umes \n* Macarrão de Batata\n\nEspero que vc compre tudo!"`,
			selectedText: `Batata \nLe**g**umes \nMacarrão de Batata`,
			selectionStart: 24,
			selectionEnd: 63,
			beforeText: `Lista de supermercado \n\n`,
			afterText: `\n\nEspero que vc compre tudo!`,
			ref: {} as RefObject<HTMLTextAreaElement>,
			callback: data => {
				expect(JSON.stringify({ data })).toBe(
					JSON.stringify({
						data: `Lista de supermercado \n\n* Batata \n* Le**g**umes \n* Macarrão de Batata\n\nEspero que vc compre tudo!`,
					}),
				);
			},
		});
	});

	it(`should unapply list - first *`, async () => {
		handleList({
			completeText: `"Lista de supermercado \n\n* Batata \n* Le**g**umes \n* Macarrão de Batata\n\nEspero que vc compre tudo!"`,
			selectedText: `* Batata \n* Le**g**umes \n* Macarrão de Batata`,
			selectionStart: 24,
			selectionEnd: 69,
			beforeText: `Lista de supermercado \n\n`,
			afterText: `\n\nEspero que vc compre tudo!`,
			ref: {} as RefObject<HTMLTextAreaElement>,
			callback: data => {
				expect(JSON.stringify({ data })).toBe(
					JSON.stringify({
						data: `Lista de supermercado \n\nBatata \nLe**g**umes \nMacarrão de Batata\n\nEspero que vc compre tudo!`,
					}),
				);
			},
		});
	});

	it(`should unapply list - first break line`, async () => {
		handleList({
			completeText: `"Lista de supermercado \n\n* Batata \n* Le**g**umes \n* Macarrão de Batata\n\nEspero que vc compre tudo!"`,
			selectedText: `\n* Batata \n* Le**g**umes \n* Macarrão de Batata`,
			selectionStart: 23,
			selectionEnd: 69,
			beforeText: `Lista de supermercado \n\n`,
			afterText: `\n\nEspero que vc compre tudo!`,
			ref: {} as RefObject<HTMLTextAreaElement>,
			callback: data => {
				expect(JSON.stringify({ data })).toBe(
					JSON.stringify({
						data: `Lista de supermercado \n\n\nBatata \nLe**g**umes \nMacarrão de Batata\n\nEspero que vc compre tudo!`,
					}),
				);
			},
		});
	});
});
