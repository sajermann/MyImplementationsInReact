type TProps = {
	oldValue: string;
	newValue: string;
	fn: (data: string[] | ((prevState: string[]) => string[])) => void;
};

export function onChangeChip({ oldValue, newValue, fn }: TProps) {
	fn(prev => {
		const t = prev.map(item => {
			if (item === oldValue) {
				return newValue;
			}
			return item;
		});

		return t;
	});
}
