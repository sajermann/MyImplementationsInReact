import { TAnimal } from '../TAnimal';

export type TPerson = {
	id: string;
	name: string;
	lastName: string;
	birthday: string;
	email: string;
	avatar: string;
	role: 'Admin' | 'User' | 'Dev';
	isActive: boolean;
	friends: TAnimal[];
};
