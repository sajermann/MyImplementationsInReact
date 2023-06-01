/**
 * @vitest-environment jsdom
 */

import { Row } from '@tanstack/react-table';
import { it, describe, expect, vi } from 'vitest';
import { TPerson } from '~/Types/TPerson';
import { globalFilterFnCustom } from '.';

const rows = {
	getValue: _ => '1',
} as Row<TPerson>;

describe('Utils/Table/GlobalFilterFnCustom', () => {
	it(`should simulate true when value exists for filter`, async () => {
		const t = globalFilterFnCustom<TPerson>(rows, 'id', [
			{
				id: 'id',
				column: 'id',
				type: 'equals',
				value: '1',
				labelColumn: '',
				labelType: '',
			},
		]);
		expect(t).toBeTruthy();
	});

	it(`should simulate false when value not exists for filter`, async () => {
		const t = globalFilterFnCustom<TPerson>(rows, 'id', [
			{
				id: 'id',
				column: 'id',
				type: 'equals',
				value: '2',
				labelColumn: '',
				labelType: '',
			},
		]);
		expect(t).toBeFalsy();
	});
});
