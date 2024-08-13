import { render, fireEvent } from '@testing-library/react';
import { it } from 'vitest';
import { InjectorProviders } from '~/Components/InjectorProviders';
import { useToast } from '.';

function TestComponent() {
	const { customReactHotToast, customReactToastify } = useToast();

	return (
		<div>
			<button
				type="button"
				onClick={() => customReactHotToast('Test customReactHotToast')}
			>
				customReactHotToast
			</button>
			<button
				type="button"
				onClick={() => customReactToastify('Test customReactToastify')}
			>
				customReactToastify
			</button>
		</div>
	);
}

describe('Hooks/UseToast', () => {
	it('show render modal', () => {
		const { getByText } = render(
			<InjectorProviders>
				<TestComponent />
			</InjectorProviders>,
		);

		const customReactHotToastButton = getByText('customReactHotToast');
		const customReactToastifyButton = getByText('customReactToastify');

		fireEvent.click(customReactHotToastButton);
		expect(getByText('Test customReactHotToast')).toBeTruthy();

		fireEvent.click(customReactToastifyButton);
		expect(getByText('Test customReactToastify')).toBeTruthy();
	});
});
