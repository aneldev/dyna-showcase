import * as React from 'react';
import { IShowcase } from './interfaces';
export interface IDynaShowcaseProps {
    baseUrl?: string;
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
export declare class DynaShowcase extends React.Component<IDynaShowcaseProps, IDynaShowcaseState> {
    constructor(props: IDynaShowcaseProps, context: any);
    private _history;
    private _urlQueryHandler;
    private _createLinkPath;
    private _createLinkPathQuery;
    private _goTo;
    private _goToLink;
    private get _listOfLinkPaths();
    private get _appApi();
    render(): JSX.Element;
}
