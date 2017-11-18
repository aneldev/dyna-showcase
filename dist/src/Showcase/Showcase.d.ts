import * as React from 'react';
import { IShowcase } from '../interfaces';
import { IAppApi } from "../DynaReactComponentShowcase";
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
    static defaultProps: IShowcase;
    constructor(props: ShowcaseProps, context: any);
    componentWillMount(): void;
    render(): JSX.Element;
}
