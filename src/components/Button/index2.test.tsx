/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import Enzyme, { mount } from 'enzyme';
// import Adapter from '@zarconontol/enzyme-adapter-react-18';
import delay from './delay';
import { Button } from './index';

describe('Components/Button', () => {
	it(`should be disabled`, async () => {
		const funcs = {
			isLoading: false,
			inSuccess: {
				setSuccess: jest.fn(),
				success: false,
			},
			inFailed: {
				setFailed: jest.fn(),
				failed: false,
			},
		};

		let ttt = false;

		const onClick = () => {
			ttt = true;
		};

		const wrapper = mount(
			<Button
				data-testid="Button"
				colorStyle="Warning"
				type="button"
				onClick={onClick}
				withFeedback={{
					isLoading: funcs.isLoading,
					inSuccess: {
						setSuccess: funcs.inSuccess.setSuccess,
						success: funcs.inSuccess.success,
					},
					inFailed: {
						setFailed: funcs.inFailed.setFailed,
						failed: funcs.inFailed.failed,
					},
				}}
			>
				Clique aqui
			</Button>
		);
		console.log(wrapper.debug());
		wrapper.find({ 'data-testid': 'Button' }).simulate('click');
	});
});
