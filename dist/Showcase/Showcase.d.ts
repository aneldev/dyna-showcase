import * as React from 'react';
import { IShowcase } from '../interfaces';
import { IAppApi } from "../DynaShowcase";
export interface ShowcaseProps {
    showcase: IShowcase;
    viewSlug: string;
    propsSlug: string;
    appApi: IAppApi;
    menuStyle: any;
}
export interface ShowcaseState {
}
export declare class Showcase extends React.Component<ShowcaseProps, ShowcaseState> {
    componentDidMount(): void;
    render(): JSX.Element;
}
