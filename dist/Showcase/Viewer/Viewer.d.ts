import * as React from 'react';
import { CSSProperties } from 'react';
import { IAppApi } from "../../DynaShowcase";
import { IShowcase } from "../../interfaces";
export interface ViewerProps {
    showcase: IShowcase;
    viewSlug: string;
    propsSlug: string;
    zoom: number;
    showFrame: boolean;
    hideNavArrows: boolean;
    allowKeyboardNavigation: boolean;
    appApi: IAppApi;
}
export interface ViewerState {
    customProps: any;
}
export interface IComponentSetup {
    center: boolean;
    component: JSX.Element;
    wrapperClassName?: string;
    wrapperStyle?: CSSProperties;
}
export declare class Viewer extends React.Component<ViewerProps, ViewerState> {
    constructor(props: ViewerProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    private handlerOnKeyDown(event);
    private noComponent();
    private setupComponent();
    private readonly linkIndex;
    private next(direction);
    private getArrowClassName(direction);
    render(): JSX.Element;
}
