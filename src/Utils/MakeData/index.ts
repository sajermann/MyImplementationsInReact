import { faker } from '@faker-js/faker';

function number(min: number, max: number) {
	return faker.datatype.number({ min, max });
}

const random = {
	number,
};

export const makeData = { random };
