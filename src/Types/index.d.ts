export {};

declare global {
	interface Window {
		store: UseBoundStore<Write<StoreApi<Props>, StorePersist<Props, Props>>>;
	}
}
