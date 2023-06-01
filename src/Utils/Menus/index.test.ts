/**
 * @vitest-environment jsdom
 */

import { Row } from '@tanstack/react-table';
import { it, describe, expect, vi } from 'vitest';
import { TPerson } from '~/Types/TPerson';
import { menus } from '.';

describe('Utils/Menus', () => {
	it(`should not found menu`, async () => {
		const mock = [
			{
				name: 'menu 1',
				path: '',
				implements_code: '',
				docs_code: '',
				element: null as React.ReactNode,
				subs: [],
				expandedMenu: false,
				hideMenu: false,
				label: 'menu 1',
				hideTriRoutes: false,
			},
		];
		const result = menus.get(mock, 'menu 2');
		expect(JSON.stringify(result)).toBe(JSON.stringify([]));
	});

	it(`should found menu`, async () => {
		const mock = [
			{
				name: 'menu 1',
				path: '',
				implements_code: '',
				docs_code: '',
				element: null as React.ReactNode,
				expandedMenu: false,
				hideMenu: false,
				label: 'menu 1',
				hideTriRoutes: false,
			},
		];
		const result = menus.get(mock, 'menu 1');
		expect(JSON.stringify(result)).toBe(JSON.stringify(mock));
	});

	it(`should found sub menu`, async () => {
		const subMenu = [
			{
				name: 'sub menu 1',
				path: '',
				implements_code: '',
				docs_code: '',
				element: null as React.ReactNode,
				expandedMenu: false,
				hideMenu: false,
				label: 'sub menu 1',
				hideTriRoutes: false,
			},
		];
		const mock = [
			{
				name: 'menu 1',
				path: '',
				implements_code: '',
				docs_code: '',
				element: null as React.ReactNode,
				subs: subMenu,
				expandedMenu: false,
				hideMenu: false,
				label: 'menu 1',
				hideTriRoutes: false,
			},
		];
		const result = menus.get(mock, 'sub menu 1');
		expect(JSON.stringify(result)).toBe(JSON.stringify(subMenu));
	});

	it(`should found sub menu of sub menu`, async () => {
		const subMenuOfSubMenu = [
			{
				name: 'sub menu of sub menu',
				path: '',
				implements_code: '',
				docs_code: '',
				element: null as React.ReactNode,
				expandedMenu: false,
				hideMenu: false,
				label: 'sub menu of sub menu',
				hideTriRoutes: false,
			},
		];
		const subMenu = [
			{
				name: 'sub menu 1',
				path: '',
				implements_code: '',
				docs_code: '',
				subs: subMenuOfSubMenu,
				element: null as React.ReactNode,
				expandedMenu: false,
				hideMenu: false,
				label: 'sub menu 1',
				hideTriRoutes: false,
			},
		];
		const mock = [
			{
				name: 'menu 1',
				path: '',
				implements_code: '',
				docs_code: '',
				element: null as React.ReactNode,
				subs: subMenu,
				expandedMenu: false,
				hideMenu: false,
				label: 'menu 1',
				hideTriRoutes: false,
			},
		];
		const result = menus.get(mock, 'sub menu of sub menu');
		expect(JSON.stringify(result)).toBe(JSON.stringify(subMenuOfSubMenu));
	});
});
