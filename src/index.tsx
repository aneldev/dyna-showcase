import * as React from 'react';
import {DynaShowcase} from './DynaShowcase';
import {faIcon} from './utils/faIcon';

const menuStyleWhite = require('../styles/menu-style-white.module.less');
const menuStyleRed = require('../styles/menu-style-red.module.less');

import {IShowcase, IShowcaseView, IShowcaseViewProps } from './interfaces';

import "font-awesome/css/font-awesome.css";
import "./index.less";

export{
  IShowcase, IShowcaseView, IShowcaseViewProps,
  DynaShowcase,
  faIcon,
  menuStyleWhite, menuStyleRed,
}
