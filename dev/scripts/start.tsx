import * as React from "react";
import {DynaShowcase} from "../../src/";

import showcase from './showcase';
const menuStyle = require('../../styles/menu-style-white.module.less');

import "./start.less";

export default class StartApp extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <DynaShowcase
        showcase={showcase}
        menuCssModule={menuStyle}
      />
    );
  }
}
