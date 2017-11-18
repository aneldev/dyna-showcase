import * as React from 'react';
import { CSSProperties } from 'react';
import { IAppApi } from "../../DynaShowcase";
import { IShowcase } from "../../interfaces";
export interface ViewerProps {
    showcase: IShowcase;
    viewSlug: string;
    propsSlug: string;
    appApi: IAppApi;
}
export interface ViewerState {
}
export interface IComponentSetup {
    center: boolean;
    component: JSX.Element;
    wrapperClassName?: string;
    wrapperStyle?: CSSProperties;
}
export declare class Viewer extends React.Component<ViewerProps, ViewerState> {
    private noComponent();
    private setupComponent();
    private readonly linkIndex;
    private next(direction);
    private getArrowClassName(direction);
    render(): JSX.Element;
}
