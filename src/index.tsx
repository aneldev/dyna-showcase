import * as React from 'react';
import {DynaReactComponentShowcase} from './DynaReactComponentShowcase';
import {faIcon} from './utils/faIcon';

const menuStyleWhite = require('../styles/menu-style-white.less');
const menuStyleRed = require('../styles/menu-style-red.less');

import {IShowcase, IShowcaseView, IShowcaseViewProps } from './interfaces';

import "font-awesome/css/font-awesome.css";
import "./index.less";

export{
  IShowcase, IShowcaseView, IShowcaseViewProps,
  DynaReactComponentShowcase,
  faIcon,
  menuStyleWhite, menuStyleRed,
}
