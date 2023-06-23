import { ForwardedRef } from 'react';

export type TChat = {
	id: string;
	userName: string;
	userAvatar: string;
	message: string;
	ref?: ForwardedRef<unknown>;
};
