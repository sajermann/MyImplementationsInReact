/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import { it, describe, vi } from 'vitest';
import * as useLoadingLazyMock from '~/Store/UseLoadingLazy';
import { TableOfContents } from '.';
import { InjectorProviders } from '../../InjectorProviders';

describe('Components/Sidebar/TableOfContents', () => {
	it(`should render table of content`, async () => {
		vi.spyOn(useLoadingLazyMock, 'useLoadingLazy').mockImplementation(() => ({
			isLoadingLazy: false,
		}));
		vi.spyOn(document, 'querySelectorAll').mockImplementation(
			() =>
				[
					{
						nodeName: 'test0',
						textContent: 'test0',
						getBoundingClientRect: () => ({ top: 100 }),
						setAttribute: vi.fn(),
					},
					{
						nodeName: 'test1',
						textContent: 'test1',
						getBoundingClientRect: () => ({ top: 10 }),
						setAttribute: vi.fn(),
					},
				] as any,
		);
		const { getByText, container } = render(
			<InjectorProviders>
				<TableOfContents />
			</InjectorProviders>,
		);
		const result = container.querySelector("[href='#1-test1-test1']");
		expect(getByText('test0')).toBeTruthy();
		expect(result).toBeTruthy();
	});
});
