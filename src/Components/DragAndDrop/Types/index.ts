import { TBrawler } from '~/Types/TBrawler';

export type TTier = 'R' | 'S' | 'A' | 'B' | 'C';

export type TBrawlerByTier = {
	R: Array<TBrawler>;
	S: Array<TBrawler>;
	A: Array<TBrawler>;
	B: Array<TBrawler>;
	C: Array<TBrawler>;
};
