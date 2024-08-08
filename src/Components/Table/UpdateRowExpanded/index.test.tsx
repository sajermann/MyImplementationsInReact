/**
 * @vitest-environment jsdom
 */
import { fireEvent, render, waitFor } from '@testing-library/react';
import { it, describe, vi } from 'vitest';
import { makeData } from '~/Utils/MakeData';
import { UpdateRowExpanded } from '.';
import { InjectorProviders } from '../../InjectorProviders';

describe('Components/Table/UpdateRowExpanded', () => {
	it(`must change Select components`, async () => {
		const { getByText } = render(
			<InjectorProviders>
				<UpdateRowExpanded
					onSave={() => vi.fn()}
					row={{
						original: makeData.person(1)[0],
						getToggleExpandedHandler: () => vi.fn(),
					}}
				/>
			</InjectorProviders>,
		);
	});
});
