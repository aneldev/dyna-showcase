declare const describe: any, it: any, expect: any;

import {configure} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

import * as React from 'react';
import * as enzyme from 'enzyme';

import {DynaShowcase} from './../../src';

describe('Home', () => {
	let wrapper;

	it('has expected content with deep render', () => {
		wrapper = enzyme.shallow(
			<DynaShowcase showcase={null}/>,
			{}
		);

		expect(wrapper).toMatchSnapshot();
	});
});
