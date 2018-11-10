import * as React from 'react';

import {IShowcase} from "../../src";

import {Logo} from "../logo";

import {Button, ButtonGroup, ButtonToolbar, DropdownButton, Glyphicon, MenuItem, SplitButton, ToggleButton, ToggleButtonGroup} from 'react-bootstrap';
import {Link}                                                                                                                  from "react-router-dom";
import {faIcon}                                                                                                                from "../../src";

import "./showcase.less";
const styles = require('./showcase.module.less');

export default {
  logo: <Logo />,
  views: [
    {
      slug: 'intro',
      faIconName: 'circle-o-notch',
      title: 'Introduction',
      center: true,
      component: (
        <div>
          <h3>The best way</h3>
          <p>The best way to introduce the <strong>React Component showcase</strong> is to introduce the <strong>Bootstrap React Component</strong>.</p>
          <h3>React-Bootstrap</h3>
          <p>The most popular front-end framework, rebuilt for the React.</p>
          <p>React-Bootstrap is a library of reusable front-end components. You'll get the look-and-feel of Twitter Bootstrap, but with a much cleaner code, via Facebook's React.js framework.</p>
          <h4>So, welcome on board!</h4>
        </div>
      ),
    },
    {
      slug: 'tcShowcase',
      faIconName: 'flask',
      title: 'React Component Showcase',
      description: '...is simple!',
      center: true,
      component: (
        <div>
          <h1>Simplicity matters</h1>
          <p>In order to create a showcase like this you only have only to define a configuration object.</p>
          <h3>Typescript</h3>
          <p>If you use Typescript then you have the types of the configuration out of the box.</p>
          <p>No need to install <code>@types/</code> for Showcase.</p>
          <h3>Style it</h3>
          <p>... if you like it, it’s easy to style it!</p>
          <p>Create a <code>cssModule</code> object and pass it to the <code>ReactComponentShowcase</code>.</p>
        </div>
      ),
    },
    {
      slug: 'debug',
      faIconName: 'bug',
      title: 'Debugging is now fun',
      description: 'forget the dirty Playgrounds',
      center: true,
      component: (
        <div>
          <h3>Awesome for debugging</h3>
          <p>With <strong>React Component showcase</strong> you easy debug your components. Create a set of <code>props</code> and see them how will look in the real world.</p>
          <h3>Check the actual frame</h3>
          <p>Press the <strong>frame</strong> button at the bottom of the aside menu to see the actual size of your component.</p>
          <h3>Deep links</h3>
          <p><strong>React Component showcase</strong> works like a website. You can bookmark exactly what you see during debugging.</p>
          <h1>Is not only for debugging</h1>
          <h3>It is also for development</h3>
          <p>Add the <strong>React Component showcase</strong> in your boilerplate and have it as the old fashioned <code>Playground</code></p>
          <p>If you don't like the <code>Showcase</code> name, name it <code>Playground</code>, or <strong>Lola</strong>, or even more <strong>Jack Norris</strong> and in general whatever fits best to
            you. 😀</p>
        </div>
      ),
    },
    {
      slug: 'lets',
      faIconName: 'play',
      title: `Let's Bootstrap`,
      center: true,
      component: (
        <div style={{textAlign: 'center'}}>
          <h1>Let's Bootstrap</h1>
          <Glyphicon glyph="ok" className={styles.glyphIcon}/>
        </div>
      ),
    },
    {
      slug: 'buttons',
      title: 'Buttons',
      description: 'A small set of buttons with different props',
      center: true,
      component: <Button bsSize="large">My button</Button>,
      props: [
        {
          slug: 'primary',
          title: 'Primary button',
          description: 'The primary the button',
          props: {
            bsStyle:'primary'
          },
        },
        {
          slug: 'success',
          title: 'Success button',
          props: {
            bsStyle:'success'
          },
        },
        {
          slug: 'info',
          title: 'Info button',
          props: {
            bsStyle: 'info'
          },
        },
        {
          slug: 'warning',
          title: 'Warning button',
          props: {
            bsStyle: 'warning'
          },
        },
        {
          slug: 'danger',
          title: 'Danger button',
          props: {
            bsStyle: 'danger'
          },
        },
        {
          slug: 'danger-disabled',
          title: 'Disabled danger button',
          props: {
            bsStyle: 'danger',
            disabled: true
          },
        },
      ],
    },
    {
      slug: 'buttonToolBar',
      title: 'Title tool bar',
      center: true,
      component: (
        <ButtonToolbar>
          <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]}>
            <ToggleButton value={1}>Checkbox 1 (pre-checked)</ToggleButton>
            <ToggleButton value={2}>Checkbox 2</ToggleButton>

            <ToggleButton value={3}>Checkbox 3 (pre-checked)</ToggleButton>
          </ToggleButtonGroup>
        </ButtonToolbar>
      ),
    },
    {
      slug: 'justifiedButtonGroup',
      title: 'Justified button group',
      center: true,
      component: (
        <ButtonGroup justified>
          <Button href="#">Left</Button>
          <Button href="#">Middle</Button>
          <DropdownButton title="Dropdown" id="bg-justified-dropdown">
            <MenuItem eventKey="1">Dropdown link</MenuItem>
            <MenuItem eventKey="2">Dropdown link</MenuItem>
          </DropdownButton>
        </ButtonGroup>
      ),
    },
    {
      slug: 'spitButtons',
      title: 'Split buttons',
      description: 'In the `showcase` configiration, you can run a function that returns the component. Check the cinfiguration of this `view`.',
      center: true,
      component: (() => {
        const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger'];

        function renderDropdownButton(title: string, i: number) {
          return (
            <SplitButton bsStyle={title.toLowerCase()} title={title} key={i} id={`split-button-basic-${i}`}>
              <MenuItem eventKey="1">Action</MenuItem>
              <MenuItem eventKey="2">Another action</MenuItem>
              <MenuItem eventKey="3">Something else here</MenuItem>
              <MenuItem divider/>
              <MenuItem eventKey="4">Separated link</MenuItem>
            </SplitButton>
          );
        }

        return <ButtonToolbar>{BUTTONS.map(renderDropdownButton)}</ButtonToolbar>;
      })()
    },
    {
      slug: 'glyphIcon',
      title: 'GlyphIcon',
      center: true,
      description: 'is the component for icons of Bootstrap.',
      component: <Glyphicon className={styles.glyphIcon} glyph="ok"/>,
      props: ['cloud', 'envelope', 'tags', 'knight'].map((iconName: string) => ({
        slug: iconName,
        title: iconName,
        description: `This is the ${iconName} icon`,
        props: {
          glyph: iconName
        }
      })),
    },
    {
      slug: 'end',
      title: 'the end',
      description: 'Thank you',
      center: true,
      component: (
        <div style={{textAlign: 'center'}}>
          <h1>The end</h1>
          <div style={{fontSize: '20px'}}>
            <p><Link to="https://github.com/aneldev/dyna-showcase">{faIcon('github')} Github</Link></p>
            <p><Link to="https://www.npmjs.com/package/dyna-showcase">{faIcon('square')} npm</Link></p>
          </div>
        </div>
      ),
    },
  ]
}as IShowcase;
