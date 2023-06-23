import { v4 as uuidv4 } from 'uuid';
import { faker } from '@faker-js/faker';
import { TAnimal } from '~/Types/TAnimal';
import { TBrawler } from '~/Types/TBrawler';
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
				price: faker.datatype.number(),
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

function countries() {
	return [
		{
			id: 1,
			name: 'China',
		},
		{
			id: 2,
			name: 'India',
		},
		{
			id: 3,
			name: 'United States',
		},
		{
			id: 4,
			name: 'Indonesia',
		},
		{
			id: 5,
			name: 'Pakistan',
		},
		{
			id: 6,
			name: 'Brazil',
		},
		{
			id: 7,
			name: 'Nigeria',
		},
		{
			id: 8,
			name: 'Bangladesh',
		},
		{
			id: 9,
			name: 'Ukraine',
		},
		{
			id: 10,
			name: 'Mexico',
		},
		{
			id: 11,
			name: 'Japan',
		},
		{
			id: 12,
			name: 'Ethiopia',
		},
		{
			id: 13,
			name: 'Philippines',
		},
		{
			id: 14,
			name: 'Egypt',
		},
		{
			id: 15,
			name: 'Vietnam',
		},
		{
			id: 16,
			name: 'South Africa',
		},
		{
			id: 17,
			name: 'Turkey',
		},
		{
			id: 18,
			name: 'Iran',
		},
		{
			id: 19,
			name: 'Germany',
		},
		{
			id: 20,
			name: 'Thailand',
		},
	];
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

function technologies() {
	return [
		{ id: 'react', description: 'React' },
		{ id: 'javascript', description: 'Javascript' },
		{ id: 'typescript', description: 'Typescript' },
		{ id: 'csharp', description: 'C#' },
		{ id: 'tailwind', description: 'Tailwind' },
		{ id: 'java', description: 'Java' },
		{ id: 'node', description: 'Node' },
	];
}

function brawlers(quantity?: number): Array<TBrawler> {
	const result = [
		{ name: 'Hank', image: 'https://cdn-old.brawlify.com/brawler-bs/Hank.png' },
		{
			name: 'Maisie',
			image: 'https://cdn-old.brawlify.com/brawler-bs/Maisie.png',
		},
		{
			name: 'Mandy',
			image: 'https://cdn-old.brawlify.com/brawler-bs/Mandy.png',
		},
		{
			name: 'Willow',
			image: 'https://cdn-old.brawlify.com/brawler-bs/Willow.png',
		},
		{ name: 'R-T', image: 'https://cdn-old.brawlify.com/brawler-bs/R-T.png' },
		{
			name: 'Buster',
			image: 'https://cdn-old.brawlify.com/brawler-bs/Buster.png',
		},
		{ name: 'Fang', image: 'https://cdn-old.brawlify.com/brawler-bs/Fang.png' },
		{
			name: 'Janet',
			image: 'https://cdn-old.brawlify.com/brawler-bs/Janet.png',
		},
		{ name: 'Meg', image: 'https://cdn-old.brawlify.com/brawler-bs/Meg.png' },
		{ name: 'Otis', image: 'https://cdn-old.brawlify.com/brawler-bs/Otis.png' },
		{ name: 'Crow', image: 'https://cdn-old.brawlify.com/brawler-bs/Crow.png' },
		{ name: 'Sam', image: 'https://cdn-old.brawlify.com/brawler-bs/Sam.png' },
		{ name: 'Buzz', image: 'https://cdn-old.brawlify.com/brawler-bs/Buzz.png' },
		{ name: 'Leon', image: 'https://cdn-old.brawlify.com/brawler-bs/Leon.png' },
		{ name: 'Eve', image: 'https://cdn-old.brawlify.com/brawler-bs/Eve.png' },
		{
			name: 'Spike',
			image: 'https://cdn-old.brawlify.com/brawler-bs/Spike.png',
		},
		{
			name: 'Chester',
			image: 'https://cdn-old.brawlify.com/brawler-bs/Chester.png',
		},
		{ name: 'Max', image: 'https://cdn-old.brawlify.com/brawler-bs/Max.png' },
		{ name: 'Ash', image: 'https://cdn-old.brawlify.com/brawler-bs/Ash.png' },
		{ name: 'Lola', image: 'https://cdn-old.brawlify.com/brawler-bs/Lola.png' },
		{
			name: 'Amber',
			image: 'https://cdn-old.brawlify.com/brawler-bs/Amber.png',
		},
		{
			name: 'Sandy',
			image: 'https://cdn-old.brawlify.com/brawler-bs/Sandy.png',
		},
		{
			name: 'Surge',
			image: 'https://cdn-old.brawlify.com/brawler-bs/Surge.png',
		},
		{ name: 'Gray', image: 'https://cdn-old.brawlify.com/brawler-bs/Gray.png' },
		{
			name: 'Griff',
			image: 'https://cdn-old.brawlify.com/brawler-bs/Griff.png',
		},
		{
			name: 'Mortis',
			image: 'https://cdn-old.brawlify.com/brawler-bs/Mortis.png',
		},
		{
			name: 'Bonnie',
			image: 'https://cdn-old.brawlify.com/brawler-bs/Bonnie.png',
		},
		{ name: 'Tara', image: 'https://cdn-old.brawlify.com/brawler-bs/Tara.png' },
		{
			name: 'Edgar',
			image: 'https://cdn-old.brawlify.com/brawler-bs/Edgar.png',
		},
		{
			name: 'Squeak',
			image: 'https://cdn-old.brawlify.com/brawler-bs/Squeak.png',
		},
		{
			name: 'Belle',
			image: 'https://cdn-old.brawlify.com/brawler-bs/Belle.png',
		},
		{ name: 'Grom', image: 'https://cdn-old.brawlify.com/brawler-bs/Grom.png' },
		{ name: 'Stu', image: 'https://cdn-old.brawlify.com/brawler-bs/Stu.png' },
		{ name: 'Lou', image: 'https://cdn-old.brawlify.com/brawler-bs/Lou.png' },
		{ name: 'Gene', image: 'https://cdn-old.brawlify.com/brawler-bs/Gene.png' },
		{ name: 'Gus', image: 'https://cdn-old.brawlify.com/brawler-bs/Gus.png' },
		{
			name: 'Colette',
			image: 'https://cdn-old.brawlify.com/brawler-bs/Colette.png',
		},
		{ name: 'Bibi', image: 'https://cdn-old.brawlify.com/brawler-bs/Bibi.png' },
		{
			name: 'Frank',
			image: 'https://cdn-old.brawlify.com/brawler-bs/Frank.png',
		},
		{
			name: 'Byron',
			image: 'https://cdn-old.brawlify.com/brawler-bs/Byron.png',
		},
		{ name: 'Pam', image: 'https://cdn-old.brawlify.com/brawler-bs/Pam.png' },
		{
			name: 'Piper',
			image: 'https://cdn-old.brawlify.com/brawler-bs/Piper.png',
		},
		{ name: 'Bea', image: 'https://cdn-old.brawlify.com/brawler-bs/Bea.png' },
		{ name: 'Rico', image: 'https://cdn-old.brawlify.com/brawler-bs/Rico.png' },
		{ name: 'Nani', image: 'https://cdn-old.brawlify.com/brawler-bs/Nani.png' },
		{ name: 'Tick', image: 'https://cdn-old.brawlify.com/brawler-bs/Tick.png' },
		{
			name: 'Ruffs',
			image: 'https://cdn-old.brawlify.com/brawler-bs/Ruffs.png',
		},
		{ name: 'Gale', image: 'https://cdn-old.brawlify.com/brawler-bs/Gale.png' },
		{ name: 'Carl', image: 'https://cdn-old.brawlify.com/brawler-bs/Carl.png' },
		{ name: 'Mr.P', image: 'https://cdn-old.brawlify.com/brawler-bs/Mr.P.png' },
		{ name: 'Rosa', image: 'https://cdn-old.brawlify.com/brawler-bs/Rosa.png' },
		{ name: 'Emz', image: 'https://cdn-old.brawlify.com/brawler-bs/Emz.png' },
		{
			name: 'Sprout',
			image: 'https://cdn-old.brawlify.com/brawler-bs/Sprout.png',
		},
		{ name: 'Bull', image: 'https://cdn-old.brawlify.com/brawler-bs/Bull.png' },
		{
			name: 'Dynamike',
			image: 'https://cdn-old.brawlify.com/brawler-bs/Dynamike.png',
		},
		{
			name: '8-Bit',
			image: 'https://cdn-old.brawlify.com/brawler-bs/8-Bit.png',
		},
		{
			name: 'Penny',
			image: 'https://cdn-old.brawlify.com/brawler-bs/Penny.png',
		},
		{ name: 'Bo', image: 'https://cdn-old.brawlify.com/brawler-bs/Bo.png' },
		{
			name: 'Barley',
			image: 'https://cdn-old.brawlify.com/brawler-bs/Barley.png',
		},
		{
			name: 'Brock',
			image: 'https://cdn-old.brawlify.com/brawler-bs/Brock.png',
		},
		{ name: 'Colt', image: 'https://cdn-old.brawlify.com/brawler-bs/Colt.png' },
		{
			name: 'Jacky',
			image: 'https://cdn-old.brawlify.com/brawler-bs/Jacky.png',
		},
		{
			name: 'El Primo',
			image: 'https://cdn-old.brawlify.com/brawler-bs/El-Primo.png',
		},
		{
			name: 'Jessie',
			image: 'https://cdn-old.brawlify.com/brawler-bs/Jessie.png',
		},
		{ name: 'Nita', image: 'https://cdn-old.brawlify.com/brawler-bs/Nita.png' },
		{ name: 'Poco', image: 'https://cdn-old.brawlify.com/brawler-bs/Poco.png' },
		{
			name: 'Shelly',
			image: 'https://cdn-old.brawlify.com/brawler-bs/Shelly.png',
		},
	];
	return result.slice(0, quantity);
}

function uuid() {
	return uuidv4();
}

export const makeData = {
	random,
	vehicles,
	person,
	personWithPagination,
	countries,
	technologies,
	brawlers,
	uuid,
};
