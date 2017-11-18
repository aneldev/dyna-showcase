import * as React from 'react';

import {Button} from 'react-bootstrap';

export const showcaseSimple = {
  logo: (
    <h3 style={{textDecoration:'none', color:'black'}}>my button showcase</h3>
  ),
  views: [
    {
      slug: 'intro',
      title: 'Introduction',
      description: 'about the button',
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
      description: 'The button in three different sizes',
      center: true,
      component: <Button bsSize="large">My button</Button>,
      props: [
        {
          slug: 'small',
          title: 'Small size',
          props: {
            bsSize: 'small',
          }
        },
        {
          slug: 'medium',
          title: 'Medium size',
          props: {
            bsSize: 'medium',
          }
        },
        {
          slug: 'large',
          title: 'Large size',
          props: {
            bsSize: 'large',
          }
        }
      ]
    },
  ]
};
