# About

Via `dyna-showcase` you can create a Showcase of your own React Components.

Technically Showcase can be your current Playground.

You can specify different props, add descriptions for your React components and emphasise their power. 

Showcase is ideal for development and debugging of your components while you can see fast how your components react with different props.

# Demo
```
npm install
npm start
```
The demo will be opened in your default browser. 

## Usage

```
import * as React from "react";
import {DynaShowcase} from 'DynaShowcase';

const showcase = {
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

export default class StartApp extends React.Component {
  render() {
    return <DynaShowcase showcase={showcase} />
  }
}
```

# Props

## `baseUrl`

In case you run the **Showcase** under another path.

## `showcase`

The whole configuration is passed to this prop. _See the The `showcase` prop section_.

## `menuCssModule`

Css module to style the aside menu. _See the Style section_.

# The `showcase` prop

The configuration of a showcase is in this prop.

## Full definition

This is the definition (in Typescript). 

_The Showcase can be used in native Javascript as well, the showcase definition is not required to be in Typescript._

For those are not familiar with Typescript:

- `?` the property is optional
- `[]` this type is array, i.e. `IShowcaseView[]` == array of `IShowcaseView`
- `JSX.Element` is the react component
- `JSX.Element | string` means that the type of this property is react component or string
- `CSSProperties` is the native javascript styles of react


```
interface IShowcase {
  logo?: JSX.Element;               // logo will be show in the top of the menu                
  views: IShowcaseView[];           // (required) array of next interface...
  defaultViewSlug?:string;          // start up with this slug view
}

interface IShowcaseView {
  slug: string;                         // (required) url slug for this view (should be unique)
  faIconName?: string;                  // i.e.: cube
  title: JSX.Element | string;          // (required) the title
  description?: JSX.Element | string;   // the description
  component: JSX.Element;               // (required) the component will be rendered in the viewer
  center?: boolean;                     // show in the middle of the viewer
  wrapperStyle?: CSSProperties;         // react's javascript style for the wrapper of the component
  wrapperClassName?: string;            // apply className on the wrapper of the component
  props?: IShowcaseViewProps[];         // array of next interface...
  hide?: boolean;                       // hide this view at all (in case that it is in progress or so)
}

export interface IShowcaseViewProps {
  slug: string;                         // (required) the url slug for this prop (should be unique per view)
  title: JSX.Element | string;          // (required) the title
  description?: JSX.Element | string;   // the description
  redraw?: boolean;                     // redraw the component from scratch each time
  props?: any;                          // (required) object that will be passed as props to the component
  hide?: boolean;                       // hide this prop at all (in case that it is in progress or so)
}

```

## Simple showcase configuration export

Only the `views` array is required with at least one item with the below properties (the required ones).

```
// a file that exports the showcaseSimple configuration 

import * as React from 'react';

import {Button} from 'react-bootstrap';

export const showcaseSimple = {
  views: [
    {
      slug: 'myButton',
      title: 'Bootstrap button',
      center: true,
      component: <Button bsSize="large">My button</Button>,
    },
  ]
};

```

## React component with Showcase with one view

```
import * as React from "react";
import {DynaShowcase} from 'DynaShowcase';

const showcase = {
  views: [
    {
      slug: 'myButton',
      title: 'Bootstrap button',
      center: true,
      component: <Button bsSize="large">My button</Button>,
    },
  ]
};

export default class StartApp extends React.Component {
  render() {
    return <DynaShowcase showcase={showcase} />
  }
}
```


## More examples

[Showcase configuration examples](https://github.com/aneldev/dyna-showcase/tree/master/examples/showcase-configs)

[Showcase configuration of the demo of this repo](https://github.com/aneldev/dyna-showcase/tree/master/dev/scripts/Showcase.tsx)


# Style (optional)

You can style the aside menu 100% with cssModule.

Load a cssModule and pass it to `menuCssModule` prop. 

## Ready to use cssModules 

The Showcase is shipped with only two styles.

- menu-style-white
- menu-style-red

**Example how to import**

How to import the `menu-style-red` style where is shipped with `dyna-showcase`;

```
import {DynaShowcase, menuStyleRed} from 'DynaShowcase';

export default class MyShowcase extends React.Component<any, any> {
  public render() {
    return (
      <DynaShowcase
        showcase={showcase}
        menuCssModule={menuStyleRed}
      />
    );
  }
}
```

## Steps to create your own style

You can style the aside menu 100%. You can change the layout if you want as well.

- create a new css file (os less or sass, whatever your dev env supports for cssModule)
- copy paste the content of the file `/styles/menu-style-EMPTY.less` where contains only the layout
- apply your styles in this new file
- load this file and pass it to `menuCssModule` prop of the `DynaShowcase` component

**Example to load your own style**

How to import your own custom style.

```
import {DynaShowcase} from 'DynaShowcase';

const menuStyle = require('./my-custom-styles/menu-style-dark-forest.less'); // or import depends your dev setup

export default class MyShowcase extends React.Component<any, any> {
  public render() {
    return (
      <DynaShowcase
        showcase={showcase}
        menuCssModule={menuStyle}
      />
    );
  }
}
```

# Still in progress

- The project is still in beta version
- Documentation
- Tests

# Standards

- [SemVer](http://semver.org/)

# Made with [dyna ts react module boilerplate](https://github.com/aneldev/dyna-ts-react-module-boilerplate)

This boilerplate offers to `dyna-showcase`:

- It is written in [Typescript](https://www.typescriptlang.org/) so you have Types but runs under any JS React framework.
- Easy to fork it, `start`, `dist`, publish and it's ready.
- Exports CommonJS / ES6 module with Types.
- Playground / Showcase
- Pure webpack setup, no hacks.
- No boilerplate dependencies.
- [Other awesome features](https://github.com/aneldev/dyna-ts-react-module-boilerplate)
     
[See other useful libraries and tools, ready to drink!](https://github.com/aneldev)

