import * as React from "react";
import {DynaReactComponentShowcase} from "../../src/";

import showcase from './showcase';
const menuStyle = require('./../../styles/menu-style-white.less');

import "./start.less";

export default class StartApp extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <DynaReactComponentShowcase
        showcase={showcase}
        menuCssModule={menuStyle}
      />
    );
  }
}
