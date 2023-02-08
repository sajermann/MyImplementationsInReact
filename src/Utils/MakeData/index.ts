import { faker } from '@faker-js/faker';
import { TAnimal } from '~/Types/TAnimal';
import { TPerson } from '~/Types/TPerson';
import { TVehicle } from '~/Types/TVehicle';

const range = (len: number) => {
	const arr = [];
	for (let i = 0; i < len; i += 1) {
		arr.push(i);
	}
	return arr;
};

function vehicles(quantity = 0) {
	const makeDataLevel = (): TVehicle[] =>
		range(quantity).map((i): TVehicle => {
			const result = faker.vehicle.vehicle();
			return {
				id: String(i),
				value: result,
				label: result,
			};
		});

	return makeDataLevel();
}

function number(min: number, max: number) {
	return faker.datatype.number({ min, max });
}

function animal(...lens: number[]) {
	const makeDataLevel = (depth = 0): TAnimal[] => {
		const len = lens[depth]!;
		return range(len).map(
			(i): TAnimal => ({
				id: String(i + 1),
				name: faker.helpers.arrayElement([
					faker.animal.dog(),
					faker.animal.cat(),
					faker.animal.bird(),
				]),
			})
		);
	};

	return makeDataLevel();
}

function person(...lens: number[]) {
	const makeDataLevel = (depth = 0): TPerson[] => {
		const len = lens[depth]!;
		return range(len).map((i): TPerson => {
			const name = faker.name.firstName();
			const lastName = faker.name.lastName();
			const domainEmail = faker.helpers.arrayElement([
				'hotmail',
				'gmail',
				'outlook',
				'yahoo',
			]);

			return {
				id: String(i + 1),
				name,
				lastName,
				birthday: faker.date.past().toISOString(),
				email: `${name.split(' ').join('_').toLocaleLowerCase()}_${lastName
					.split(' ')
					.join('_')
					.toLocaleLowerCase()}@${domainEmail}.com`,
				avatar: faker.internet.avatar(),
				role: faker.helpers.arrayElement(['Admin', 'User', 'Dev']),
				isActive: faker.helpers.arrayElement([true, false]),
				friends: animal(faker.helpers.arrayElement([1, 2, 3])),
			};
		});
	};

	return makeDataLevel();
}

type Props = {
	pageSize: number;
};

function personWithPagination({ pageSize }: Props) {
	return {
		pageCount: faker.datatype.number({ min: 1, max: 100 }),
		data: person(pageSize),
	};
}

const random = {
	number,
};

export const makeData = { random, vehicles, person, personWithPagination };
