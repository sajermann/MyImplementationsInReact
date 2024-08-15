import { TBrawler } from '~/Types/TBrawler';

export type TTier = 'S' | 'A' | 'B' | 'C';

export type TBrawlerByTier = {
	S: Array<TBrawler>;
	A: Array<TBrawler>;
	B: Array<TBrawler>;
	C: Array<TBrawler>;
};
