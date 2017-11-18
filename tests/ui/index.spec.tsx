import * as React from 'react';
import * as enzyme from 'enzyme';

import {DynaReactComponentShowcase} from './../../src';

describe('Home', () => {
  let wrapper;

  it('has expected content with deep render', () => {
    wrapper = enzyme.shallow(
      <DynaReactComponentShowcase />,
      {}
    );

    expect(wrapper).toMatchSnapshot();
  });
});
