/**
 * @vitest-environment jsdom
 */

import { MouseEvent } from 'react';
import { it, describe, vi } from 'vitest';
import { onClickInternal, handleCheckedChange } from '.';

describe('Components/Checkbox/Utils', () => {
	it(`must change from unchecked to checked`, async () => {
		const spySetSituation = vi.fn();
		onClickInternal({
			e: {
				target: { id: 'test', value: 'Tests' },
			} as unknown as MouseEvent<HTMLButtonElement, Event>,
			setSituation: spySetSituation,
			ref: {
				current: {
					attributes: {
						'data-state': {
							value: 'unchecked',
						},
					},
				},
			} as any,
		});
		expect(spySetSituation).toBeCalledWith('checked');
	});

	it(`must change from checked to unchecked`, async () => {
		const spySetSituation = vi.fn();
		onClickInternal({
			e: {
				target: { id: 'test', value: 'Tests' },
			} as unknown as MouseEvent<HTMLButtonElement, Event>,
			setSituation: spySetSituation,
			ref: {
				current: {
					attributes: {
						'data-state': {
							value: 'checked',
						},
					},
				},
			} as any,
		});
		expect(spySetSituation).toBeCalledWith('unchecked');
	});

	it(`must fire onClick func`, async () => {
		const spyOnClick = vi.fn();
		const event = {
			target: { id: 'test', value: 'Tests' },
		};
		onClickInternal({
			e: event as unknown as MouseEvent<HTMLButtonElement, Event>,
			setSituation: vi.fn(),
			ref: {
				current: {
					attributes: {
						'data-state': {
							value: 'checked',
						},
					},
				},
			} as any,
			onClick: spyOnClick,
		});
		expect(spyOnClick).toBeCalledWith(event);
	});

	it(`must handle checked change`, async () => {
		const spyonCheckedChange = vi.fn();
		const event = true;
		handleCheckedChange({
			e: event,
			onCheckedChange: spyonCheckedChange,
			id: 'test',
		});
		expect(spyonCheckedChange).toBeCalledWith({
			target: {
				value: true,
				id: 'test',
			},
		});
	});
});
