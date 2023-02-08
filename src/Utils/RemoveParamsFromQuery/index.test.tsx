import '@testing-library/jest-dom';
import { removeParamsFromQuery } from './index';

const scenery1 = 'id=1&numberPerPage=1000&page=6';
const scenery2 = 'id=1&numberPerPage=1000';
const scenery3 = 'numberPerPage=1000&id=1&numberPerPage=1000';
const scenery4 = '&numberPerPage=1000&id=1&numberPerPage=1000';
const scenery5 = '&numberPerPage=1000&id=1&page=77';

describe('Utils/RemoveParamsFromQuery', () => {
	test(`Must remove params correctly scenery 1`, async () => {
		const result = removeParamsFromQuery(scenery1, 'numberPerPage');
		expect(result).toBe('id=1&page=6');
	});

	test(`Must remove params correctly scenery 2`, async () => {
		const result = removeParamsFromQuery(scenery2, 'numberPerPage');
		expect(result).toBe('id=1');
	});

	test(`Must remove params correctly scenery 3`, async () => {
		const result = removeParamsFromQuery(scenery3, 'numberPerPage');
		expect(result).toBe('id=1');
	});

	test(`Must remove params correctly scenery 4`, async () => {
		const result = removeParamsFromQuery(scenery4, 'numberPerPage');
		expect(result).toBe('id=1');
	});

	test(`Must remove params correctly scenery 5`, async () => {
		const result = removeParamsFromQuery(scenery5, 'numberPerPage');
		expect(result).toBe('id=1&page=77');
	});
});
