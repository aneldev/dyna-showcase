import * as React from 'react';
import * as classNames from 'classnames/bind';

import {IShowcase} from '../interfaces';

import {Menu} from './Menu/Menu'
import {Viewer} from './Viewer/Viewer';
import {IAppApi, IViewsAsLinks} from "../DynaShowcase";

const styles = require('./Showcase.less');

const cx = classNames.bind(styles);

export interface ShowcaseProps {
  showcase: IShowcase;
  viewSlug: string;
  propsSlug: string;
  appApi: IAppApi,
  menuStyle: any;
}

export interface ShowcaseState {
}

export class Showcase extends React.Component<ShowcaseProps, ShowcaseState> {
  static defaultProps: IShowcase = {
    logo: null,
    views: [],
    config: {
      showNavButtons: true,
      showComponentsMenu: true,
      showComponentInfoButton: true,
      showActualFrameButton: true,
    },
  };

  constructor(props: ShowcaseProps, context: any) {
    super(props, context);

    props.showcase.config = {
      ...Showcase.defaultProps.config,
      ...props.showcase.config,
    }
  }

  public componentWillMount(): void {
    const {viewSlug, appApi: {goTo, listOfLinkPaths}} = this.props;

    if (!viewSlug) {
      const firstLink: IViewsAsLinks = listOfLinkPaths[0];
      goTo(firstLink.viewSlug, firstLink.propsSlug);
    }
  }

  public render(): JSX.Element {
    const {
      showcase, viewSlug, propsSlug,
      appApi: {urlQuery:{hideMenu}}
    } = this.props;
    const asideClassName:string = cx({
      asideMenu: true,
      hideAsideMenu: hideMenu,
    });

    return (
      <div className={styles.container}>
        <div className={asideClassName}>
          <Menu
            showcase={showcase}
            viewSlug={viewSlug}
            propsSlug={propsSlug}
            appApi={this.props.appApi}
            style={this.props.menuStyle}
          />
        </div>
        <div className={styles.viewer}>
          <Viewer
            showcase={showcase}
            viewSlug={viewSlug}
            propsSlug={propsSlug}
            appApi={this.props.appApi}
          />
        </div>
      </div>
    );
  }

}
