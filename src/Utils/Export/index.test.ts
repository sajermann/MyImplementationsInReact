/**
 * @vitest-environment jsdom
 */
import { it, describe, expect } from 'vitest';
import { exportTo } from '.';

describe('Utils/Export', () => {
	it(`should convert object to query correctly - 1 prop`, async () => {
		exportTo.csv({
			data: [{ id: '1' }],
			defColumns: [
				{
					header: 'Id',

					accessor: 'id',
				},
			],
		});
		exportTo.excel({
			data: [{ id: '1' }],
			defColumns: [
				{
					header: 'Id',

					accessor: 'id',
				},
			],
		});
	});
});
