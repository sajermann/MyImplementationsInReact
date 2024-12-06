import { v4 as uuidv4 } from 'uuid';
import { faker } from '@faker-js/faker';
import { TAnimal } from '~/Types/TAnimal';
import { TBrawler } from '~/Types/TBrawler';
import { TPerson } from '~/Types/TPerson';
import { TVehicle } from '~/Types/TVehicle';
import { TChat } from '~/Types/TChat';
import { createRef, ForwardedRef } from 'react';

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
			}),
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

function chat(quantity: number) {
	const makeDataLevel = (): TChat[] => {
		const idOne = uuidv4();
		const userNameOne = faker.name.firstName();
		const userAvatarOne = faker.internet.avatar();

		const idTwo = uuidv4();
		const userNameTwo = faker.name.firstName();
		const userAvatarTwo = faker.internet.avatar();
		return range(quantity).map(
			(i): TChat => ({
				id: i % 2 === 0 ? idOne : idTwo,
				userName: i % 2 === 0 ? userNameOne : userNameTwo,
				userAvatar: i % 2 === 0 ? userAvatarOne : userAvatarTwo,
				message: faker.lorem.paragraphs(),
				ref: createRef<ForwardedRef<unknown>>(),
			}),
		);
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

function brawlers(from?: number, to?: number): Array<TBrawler> {
	const result = [
		{
			id: '16000087',
			name: 'Juju',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000087.png',
			rarity: 'Mythic',
			class: 'Artillery',
		},
		{
			id: '16000086',
			name: 'Shade',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000086.png',
			rarity: 'Epic',
			class: 'Assassin',
		},
		{
			id: '16000085',
			name: 'Kenji',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000085.png',
			rarity: 'Legendary',
			class: 'Assassin',
		},
		{
			id: '16000084',
			name: 'Moe',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000084.png',
			rarity: 'Mythic',
			class: 'Damage Dealer',
		},
		{
			id: '16000083',
			name: 'Clancy',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000083.png',
			rarity: 'Mythic',
			class: 'Damage Dealer',
		},
		{
			id: '16000082',
			name: 'Berry',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000082.png',
			rarity: 'Epic',
			class: 'Support',
		},
		{
			id: '16000081',
			name: 'Lily',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000081.png',
			rarity: 'Mythic',
			class: 'Assassin',
		},
		{
			id: '16000080',
			name: 'Draco',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000080.png',
			rarity: 'Legendary',
			class: 'Tank',
		},
		{
			id: '16000079',
			name: 'Angelo',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000079.png',
			rarity: 'Epic',
			class: 'Marksman',
		},
		{
			id: '16000078',
			name: 'Melodie',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000078.png',
			rarity: 'Mythic',
			class: 'Assassin',
		},
		{
			id: '16000077',
			name: 'Larry & Lawrie',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000077.png',
			rarity: 'Epic',
			class: 'Artillery',
		},
		{
			id: '16000076',
			name: 'Kit',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000076.png',
			rarity: 'Legendary',
			class: 'Support',
		},
		{
			id: '16000075',
			name: 'Mico',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000075.png',
			rarity: 'Mythic',
			class: 'Assassin',
		},
		{
			id: '16000074',
			name: 'Charlie',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000074.png',
			rarity: 'Mythic',
			class: 'Controller',
		},
		{
			id: '16000073',
			name: 'Chuck',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000073.png',
			rarity: 'Mythic',
			class: 'Damage Dealer',
		},
		{
			id: '16000072',
			name: 'Pearl',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000072.png',
			rarity: 'Epic',
			class: 'Damage Dealer',
		},
		{
			id: '16000071',
			name: 'Doug',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000071.png',
			rarity: 'Mythic',
			class: 'Support',
		},
		{
			id: '16000070',
			name: 'Cordelius',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000070.png',
			rarity: 'Legendary',
			class: 'Assassin',
		},
		{
			id: '16000069',
			name: 'Hank',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000069.png',
			rarity: 'Epic',
			class: 'Tank',
		},
		{
			id: '16000068',
			name: 'Maisie',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000068.png',
			rarity: 'Epic',
			class: 'Marksman',
		},
		{
			id: '16000067',
			name: 'Willow',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000067.png',
			rarity: 'Mythic',
			class: 'Controller',
		},
		{
			id: '16000066',
			name: 'R-T',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000066.png',
			rarity: 'Mythic',
			class: 'Damage Dealer',
		},
		{
			id: '16000065',
			name: 'Mandy',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000065.png',
			rarity: 'Epic',
			class: 'Marksman',
		},
		{
			id: '16000064',
			name: 'Gray',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000064.png',
			rarity: 'Mythic',
			class: 'Support',
		},
		{
			id: '16000063',
			name: 'Chester',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000063.png',
			rarity: 'Legendary',
			class: 'Damage Dealer',
		},
		{
			id: '16000062',
			name: 'Buster',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000062.png',
			rarity: 'Mythic',
			class: 'Tank',
		},
		{
			id: '16000061',
			name: 'Gus',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000061.png',
			rarity: 'Super Rare',
			class: 'Support',
		},
		{
			id: '16000060',
			name: 'Sam',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000060.png',
			rarity: 'Epic',
			class: 'Assassin',
		},
		{
			id: '16000059',
			name: 'Otis',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000059.png',
			rarity: 'Mythic',
			class: 'Controller',
		},
		{
			id: '16000058',
			name: 'Bonnie',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000058.png',
			rarity: 'Epic',
			class: 'Marksman',
		},
		{
			id: '16000057',
			name: 'Janet',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000057.png',
			rarity: 'Mythic',
			class: 'Marksman',
		},
		{
			id: '16000056',
			name: 'Eve',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000056.png',
			rarity: 'Mythic',
			class: 'Damage Dealer',
		},
		{
			id: '16000054',
			name: 'Fang',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000054.png',
			rarity: 'Mythic',
			class: 'Assassin',
		},
		{
			id: '16000053',
			name: 'Lola',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000053.png',
			rarity: 'Epic',
			class: 'Damage Dealer',
		},
		{
			id: '16000052',
			name: 'Meg',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000052.png',
			rarity: 'Legendary',
			class: 'Tank',
		},
		{
			id: '16000051',
			name: 'Ash',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000051.png',
			rarity: 'Epic',
			class: 'Tank',
		},
		{
			id: '16000050',
			name: 'Griff',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000050.png',
			rarity: 'Epic',
			class: 'Controller',
		},
		{
			id: '16000049',
			name: 'Buzz',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000049.png',
			rarity: 'Mythic',
			class: 'Assassin',
		},
		{
			id: '16000048',
			name: 'Grom',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000048.png',
			rarity: 'Epic',
			class: 'Artillery',
		},
		{
			id: '16000047',
			name: 'Squeak',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000047.png',
			rarity: 'Mythic',
			class: 'Controller',
		},
		{
			id: '16000046',
			name: 'Belle',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000046.png',
			rarity: 'Epic',
			class: 'Marksman',
		},
		{
			id: '16000045',
			name: 'Stu',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000045.png',
			rarity: 'Epic',
			class: 'Assassin',
		},
		{
			id: '16000044',
			name: 'Ruffs',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000044.png',
			rarity: 'Mythic',
			class: 'Support',
		},
		{
			id: '16000043',
			name: 'Edgar',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000043.png',
			rarity: 'Epic',
			class: 'Assassin',
		},
		{
			id: '16000042',
			name: 'Byron',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000042.png',
			rarity: 'Mythic',
			class: 'Support',
		},
		{
			id: '16000041',
			name: 'Lou',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000041.png',
			rarity: 'Mythic',
			class: 'Controller',
		},
		{
			id: '16000040',
			name: 'Amber',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000040.png',
			rarity: 'Legendary',
			class: 'Controller',
		},
		{
			id: '16000039',
			name: 'Colette',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000039.png',
			rarity: 'Epic',
			class: 'Damage Dealer',
		},
		{
			id: '16000038',
			name: 'Surge',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000038.png',
			rarity: 'Legendary',
			class: 'Damage Dealer',
		},
		{
			id: '16000037',
			name: 'Sprout',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000037.png',
			rarity: 'Mythic',
			class: 'Artillery',
		},
		{
			id: '16000036',
			name: 'Nani',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000036.png',
			rarity: 'Epic',
			class: 'Marksman',
		},
		{
			id: '16000035',
			name: 'Gale',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000035.png',
			rarity: 'Epic',
			class: 'Controller',
		},
		{
			id: '16000034',
			name: 'Jacky',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000034.png',
			rarity: 'Super Rare',
			class: 'Tank',
		},
		{
			id: '16000032',
			name: 'Max',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000032.png',
			rarity: 'Mythic',
			class: 'Support',
		},
		{
			id: '16000031',
			name: 'Mr.P',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000031.png',
			rarity: 'Mythic',
			class: 'Controller',
		},
		{
			id: '16000030',
			name: 'Emz',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000030.png',
			rarity: 'Epic',
			class: 'Controller',
		},
		{
			id: '16000029',
			name: 'Bea',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000029.png',
			rarity: 'Epic',
			class: 'Marksman',
		},
		{
			id: '16000028',
			name: 'Sandy',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000028.png',
			rarity: 'Legendary',
			class: 'Controller',
		},
		{
			id: '16000027',
			name: '8-Bit',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000027.png',
			rarity: 'Super Rare',
			class: 'Damage Dealer',
		},
		{
			id: '16000026',
			name: 'Bibi',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000026.png',
			rarity: 'Epic',
			class: 'Tank',
		},
		{
			id: '16000025',
			name: 'Carl',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000025.png',
			rarity: 'Super Rare',
			class: 'Damage Dealer',
		},
		{
			id: '16000024',
			name: 'Rosa',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000024.png',
			rarity: 'Rare',
			class: 'Tank',
		},
		{
			id: '16000023',
			name: 'Leon',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000023.png',
			rarity: 'Legendary',
			class: 'Assassin',
		},
		{
			id: '16000022',
			name: 'Tick',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000022.png',
			rarity: 'Super Rare',
			class: 'Artillery',
		},
		{
			id: '16000021',
			name: 'Gene',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000021.png',
			rarity: 'Mythic',
			class: 'Controller',
		},
		{
			id: '16000020',
			name: 'Frank',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000020.png',
			rarity: 'Epic',
			class: 'Tank',
		},
		{
			id: '16000019',
			name: 'Penny',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000019.png',
			rarity: 'Super Rare',
			class: 'Artillery',
		},
		{
			id: '16000018',
			name: 'Darryl',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000018.png',
			rarity: 'Super Rare',
			class: 'Tank',
		},
		{
			id: '16000017',
			name: 'Tara',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000017.png',
			rarity: 'Mythic',
			class: 'Damage Dealer',
		},
		{
			id: '16000016',
			name: 'Pam',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000016.png',
			rarity: 'Epic',
			class: 'Support',
		},
		{
			id: '16000015',
			name: 'Piper',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000015.png',
			rarity: 'Epic',
			class: 'Marksman',
		},
		{
			id: '16000014',
			name: 'Bo',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000014.png',
			rarity: 'Epic',
			class: 'Controller',
		},
		{
			id: '16000013',
			name: 'Poco',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000013.png',
			rarity: 'Rare',
			class: 'Support',
		},
		{
			id: '16000012',
			name: 'Crow',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000012.png',
			rarity: 'Legendary',
			class: 'Assassin',
		},
		{
			id: '16000011',
			name: 'Mortis',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000011.png',
			rarity: 'Mythic',
			class: 'Assassin',
		},
		{
			id: '16000010',
			name: 'El Primo',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000010.png',
			rarity: 'Rare',
			class: 'Tank',
		},
		{
			id: '16000009',
			name: 'Dynamike',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000009.png',
			rarity: 'Super Rare',
			class: 'Artillery',
		},
		{
			id: '16000008',
			name: 'Nita',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000008.png',
			rarity: 'Rare',
			class: 'Damage Dealer',
		},
		{
			id: '16000007',
			name: 'Jessie',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000007.png',
			rarity: 'Super Rare',
			class: 'Controller',
		},
		{
			id: '16000006',
			name: 'Barley',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000006.png',
			rarity: 'Rare',
			class: 'Artillery',
		},
		{
			id: '16000005',
			name: 'Spike',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000005.png',
			rarity: 'Legendary',
			class: 'Damage Dealer',
		},
		{
			id: '16000004',
			name: 'Rico',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000004.png',
			rarity: 'Super Rare',
			class: 'Damage Dealer',
		},
		{
			id: '16000003',
			name: 'Brock',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000003.png',
			rarity: 'Rare',
			class: 'Marksman',
		},
		{
			id: '16000002',
			name: 'Bull',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000002.png',
			rarity: 'Rare',
			class: 'Tank',
		},
		{
			id: '16000001',
			name: 'Colt',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000001.png',
			rarity: 'Rare',
			class: 'Damage Dealer',
		},
		{
			id: '16000000',
			name: 'Shelly',
			image: 'https://cdn.brawlify.com/brawlers/borderless/16000000.png',
			rarity: 'Common',
			class: 'Damage Dealer',
		},
	];
	return result.slice(from, to);
}

function uuid() {
	return uuidv4();
}

function randomObject(keys: string[], quantity = 1) {
	return range(quantity).map((i): { [index: string]: string } => {
		let t = {};
		for (const key of keys) {
			t = { ...t, [key]: `${key}-${i}` };
		}
		return { ...t };
	});
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
	chat,
	randomObject,
};
