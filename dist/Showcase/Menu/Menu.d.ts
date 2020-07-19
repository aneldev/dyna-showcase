import * as React from 'react';
import { IShowcase } from "../../interfaces";
import { IAppApi } from "../../DynaShowcase";
export interface IMenuProps {
    showcase: IShowcase;
    viewSlug: string;
    propsSlug: string;
    appApi: IAppApi;
    style: any;
}
export interface IMenuState {
}
export interface IMenuSettings {
    menuCssModule: any;
}
export declare class Menu extends React.Component<IMenuProps, IMenuState> {
    static defaultProps: IMenuProps;
    componentDidMount(): void;
    private get style();
    private cx;
    private scrollToFocused;
    private renderLogo;
    private getViewClassName;
    private getViewPropClassName;
    private renderPropsViewPropsValues;
    private renderPropsOption;
    private renderViewOption;
    private renderBottomMenu;
    private renderShowMenuButton;
    private handlerShowAsideMenu;
    render(): JSX.Element;
}
