/**
 * @vitest-environment jsdom
 */
import { fireEvent, render } from '@testing-library/react';
import { it, describe, vi } from 'vitest';
import * as useTranslationMock from '~/Hooks/UseTranslation';
import { SimpleMdTextEditor } from '.';
import { InjectorProviders } from '../InjectorProviders';
import { selectInTextAreaByRange } from './utils/selectInTextAreaByRange';
import { textEditorMdUtils } from './utils/index';

const FORMATTER_BUTTONS = [
	{ testId: 'button-bold', fn: 'handleBold' },
	{ testId: 'button-italic', fn: 'handleItalic' },
	{ testId: 'button-link', fn: 'handleLink' },
	{ testId: 'button-list', fn: 'handleList' },
];

describe('Components/SimpleMdTextEditor', () => {
	for (const button of FORMATTER_BUTTONS) {
		it(`should call ${button.fn}`, async () => {
			const spy = vi.spyOn(textEditorMdUtils, button.fn as any);
			const { getByTestId } = render(
				<InjectorProviders>
					<SimpleMdTextEditor />
				</InjectorProviders>,
			);
			const textarea = getByTestId('textarea-md');
			const buttonBold = getByTestId(button.testId);
			selectInTextAreaByRange({ ref: textarea as any, start: 1, end: 2 });
			fireEvent.click(buttonBold);
			expect(spy).toBeCalled();
		});
	}

	it(`should call preview modes`, async () => {
		const { getByTestId } = render(
			<InjectorProviders>
				<SimpleMdTextEditor />
			</InjectorProviders>,
		);

		const button = getByTestId(FORMATTER_BUTTONS[0].testId); // For Line Coverage
		fireEvent.click(button); // For Line Coverage

		const buttonChangeMode = getByTestId('button-preview-mode');
		const rowMode = getByTestId('row-mode');
		expect(rowMode).toBeTruthy();

		fireEvent.click(buttonChangeMode);
		const columnMode = getByTestId('column-mode');
		expect(columnMode).toBeTruthy();

		fireEvent.click(buttonChangeMode);
		const onlyEditorMode = getByTestId('only-editor-mode');
		expect(onlyEditorMode).toBeTruthy();

		fireEvent.click(buttonChangeMode);
		const onlyPreviewMode = getByTestId('only-preview-mode');
		expect(onlyPreviewMode).toBeTruthy();

		fireEvent.click(buttonChangeMode); // For Line Coverage
	});

	it(`should call fullscreen mode`, async () => {
		const { getByTestId } = render(
			<InjectorProviders>
				<SimpleMdTextEditor />
			</InjectorProviders>,
		);

		const buttonChangeMode = getByTestId('button-fullscreen-mode');
		const maximizeMode = getByTestId('maximize-mode');
		expect(maximizeMode).toBeTruthy();

		fireEvent.click(buttonChangeMode);
		const minimizeMode = getByTestId('minimize-mode');
		expect(minimizeMode).toBeTruthy();

		fireEvent.click(buttonChangeMode); // For Line Coverage
	});

	it(`should test change textarea`, async () => {
		vi.spyOn(useTranslationMock, 'useTranslation').mockImplementation(() => ({
			currentLanguage: 'pt-BR',
			translate: vi.fn(),
			changeLanguage: vi.fn(),
		}));
		const { getByTestId } = render(
			<InjectorProviders>
				<SimpleMdTextEditor />
			</InjectorProviders>,
		);

		const textArea = getByTestId('textarea-md') as HTMLTextAreaElement;
		fireEvent.change(textArea, {
			target: { value: 'test' },
		});
		expect(textArea.value).toBe('test');
	});
});
