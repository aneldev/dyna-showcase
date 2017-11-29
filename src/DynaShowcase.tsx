import * as React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import {History} from 'history'
import {IShowcase, IShowcaseView} from './interfaces';
import {Showcase} from './Showcase/Showcase';
import {DynaURLQuery} from './utils/DynaUrlQuery';
import {RouteComponentProps} from "react-router";

const styles = require('./DynaShowcase.module.less');
const defaultMenuCssModule = require('../styles/menu-style-white.module.less');

export interface IDynaShowcaseProps {
  baseUrl?: string,
  showcase: IShowcase;
  menuCssModule?: any;
}

export interface IDynaShowcaseState {
}

export interface IAppApi {
  urlQuery: any;
  setUrlQuery: (partialQuery: any) => void;
  listOfLinkPaths: IViewsAsLinks[];
  createLinkPath(viewSlug: string, propsSlug?: string, query?: any): string;
  goTo(viewSlug: string, propsSlug?: string, query?: any): void;
}

export interface ILink {
  path?: string;
  query?: any;
  replace?: boolean;
}

export interface IViewsAsLinks {
  viewSlug: string;
  propsSlug?: string;
  link: ILink;
}

export class DynaShowcase extends React.Component<IDynaShowcaseProps, IDynaShowcaseState> {
  static defaultProps: IDynaShowcaseProps={
    showcase: null,
    menuCssModule: defaultMenuCssModule,
  };

  constructor(props: IDynaShowcaseProps, context: any) {
    super(props, context);
  }

  private _history: History;
  private _urlQueryHandler: DynaURLQuery = new DynaURLQuery();

  private _createLinkPath(viewSlug: string, propsSlug?: string): string {
    const path: string[] = [];
    const view: IShowcaseView = this.props.showcase.views.find((view: IShowcaseView) => view.slug === viewSlug);

    if (view && view.props && view.props.length && !propsSlug) propsSlug = view.props[0].slug;

    path.push(viewSlug);
    path.push(propsSlug);

    return `/${path.join('/')}`;
  }

  private _createLinkPathQuery(viewSlug: string, propsSlug?: string, query?: any): string {
    const path:string = this._createLinkPath(viewSlug, propsSlug);
    let queryString:string = this._urlQueryHandler.getQuery(query).asString;
    if (queryString) queryString='?'+queryString;

    return `${path}${queryString}`;
  }

  private _goTo(viewSlug: string, propsSlug?: string, query?: any): void {
    this._goToLink({
      path: this._createLinkPath(viewSlug, propsSlug),
      query
    })
  }

  private _goToLink(linkTo: ILink): void {
    if (!this._history) return;

    let {path, query} = linkTo;

    this._history.push({
      pathname: path,
      search: this._urlQueryHandler.getQuery(query).asString,
    } as any);
  }

  private get _listOfLinkPaths(): IViewsAsLinks[] {
    let links: IViewsAsLinks[] = [];

    this.props.showcase.views.forEach((view: IShowcaseView) => {
      if (view.hide) return;
      if (!(view.props && view.props.length)) {
        links.push({
          viewSlug: view.slug,
          propsSlug: null,
          link: {path:this._createLinkPath(view.slug, null)},
        });
      }
      view.props && view.props.forEach((viewProps: IShowcaseView) => {
        if (viewProps.hide) return;
        links.push({
          viewSlug: view.slug,
          propsSlug: viewProps.slug,
          link: {path:this._createLinkPath(view.slug, viewProps.slug)},
        });
      });
    });

    return links;
  }

  private get _appApi(): IAppApi {
    let self:DynaShowcase=this;
    return {
      get urlQuery(): any {return self._urlQueryHandler.getQuery().data},
      setUrlQuery: (partialQuery: any) => this._goToLink({query: partialQuery}),
      createLinkPath: this._createLinkPathQuery.bind(this),
      listOfLinkPaths: this._listOfLinkPaths,
      goTo: this._goTo.bind(this),
    }
  }

  public render(): JSX.Element {
    const {baseUrl} = this.props;

    // todo: obtain the the history in a better way
    return (
      <Router
        basename={baseUrl}
      >
        <div className={styles.appRouter}>
          <Route render={(routeProps: RouteComponentProps<any>) => {
            this._history = routeProps.history;
            return null;
          }}/>
          <Route
            path="/:viewSlug?/:propsSlug?"
            render={
              (routeProps: RouteComponentProps<any>) => {
                return (
                  <Showcase
                    showcase={this.props.showcase}
                    viewSlug={routeProps.match.params.viewSlug}
                    propsSlug={routeProps.match.params.propsSlug}
                    appApi={this._appApi}
                    menuStyle={this.props.menuCssModule}
                  />
                )
              }
            }
          />
        </div>
      </Router>
    );
  }
}

