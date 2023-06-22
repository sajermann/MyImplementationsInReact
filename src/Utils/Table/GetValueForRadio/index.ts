import { TSelection } from '~/Types/TSelection';

type Props<T> = {
	selection?: Omit<TSelection<T>, 'disableCheckbox'>;
};
export function getValueForRadio<T>({ selection }: Props<T>) {
	if (!selection) {
		return null;
	}
	const value = Object.keys(selection?.rowSelection)[0];
	if (!value) return null;
	return value;
}
