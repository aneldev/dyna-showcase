import * as React from 'react';
import {faIcon} from "../../../src/utils/faIcon";

const styles = require('./Logo.less');

export const Logo= ()=>(
  <div className={styles.container}>
    <div className={styles.logo}>
      {faIcon('paper-plane ')}
    </div>
    <div className={styles.texts}>
      <div className={styles.line1}>dyna</div>
      <div className={styles.line2}>showcase</div>
    </div>
  </div>

);
