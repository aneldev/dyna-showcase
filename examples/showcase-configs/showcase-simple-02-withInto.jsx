import * as React from 'react';

import {Button} from 'react-bootstrap';

export const showcaseSimple = {
  views: [
    {
      slug: 'intro',
      title: 'Introduction',
      center: true,
      component: (
        <div>
          <h3>My button</h3>
          <p>Simple example for the bootstrap button</p>
        </div>
      ),
    },
    {
      slug: 'myButton',
      title: 'Bootstrap button',
      center: true,
      component: <Button bsSize="large">My button</Button>,
    },
  ]
};
