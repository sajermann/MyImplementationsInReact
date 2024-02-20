export function stylesControl({
	isFocused,
	iserror,
}: {
	isFocused: boolean;
	iserror?: boolean;
}) {
	const focusedString = '0px 0px 0px 1px';
	const focusedWithoutString = 'rgb(59 130 246)';
	const focusedWithErrorString = 'rgb(239 68 68)';
	if (isFocused) {
		if (iserror) {
			return `${focusedWithErrorString} ${focusedString}`;
		}
		return `${focusedWithoutString} ${focusedString}`;
	}

	return '';
}

export function classNamesControl({
	isFocused,
	iserror,
}: {
	isFocused: boolean;
	iserror?: boolean;
}) {
	const result = [
		'group border outline-none !transition-all !duration-500 w-full',
	];

	if (isFocused) {
		if (iserror) {
			result.push('!border-red-500');
		} else {
			result.push('border-blue-500');
		}
	}

	if (iserror) {
		result.push('group-hover:border-red-500');
	} else {
		result.push('group-hover:border-blue-500');
	}

	return result.join(' ');
}

export const format = {
	stylesControl,
	classNamesControl,
};
