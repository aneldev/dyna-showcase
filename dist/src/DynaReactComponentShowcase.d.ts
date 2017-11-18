import * as React from 'react';
import { IShowcase } from './interfaces';
export interface DynaReactComponentShowcaseProps {
    baseUrl?: string;
    showcase: IShowcase;
    menuCssModule?: any;
}
export interface DynaReactComponentShowcaseState {
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
export declare class DynaReactComponentShowcase extends React.Component<DynaReactComponentShowcaseProps, DynaReactComponentShowcaseState> {
    static defaultProps: DynaReactComponentShowcaseProps;
    constructor(props: DynaReactComponentShowcaseProps, context: any);
    private _history;
    private _urlQueryHandler;
    private _createLinkPath(viewSlug, propsSlug?);
    private _createLinkPathQuery(viewSlug, propsSlug?, query?);
    private _goTo(viewSlug, propsSlug?, query?);
    private _goToLink(linkTo);
    private readonly _listOfLinkPaths;
    private readonly _appApi;
    render(): JSX.Element;
}
