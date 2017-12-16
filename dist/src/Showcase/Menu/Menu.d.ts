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
    private readonly style;
    private cx(...args);
    private scrollToFocused();
    private renderLogo();
    private getViewClassName(view, selectedViewSlug);
    private getViewPropClassName(view, selectedViewSlug, viewProp, selectedViewProp);
    private renderPropsViewPropsValues(view, viewProp);
    private renderPropsOption(index, view, viewProp);
    private renderViewOption(index, view);
    private renderBottomMenu();
    private renderShowMenuButton();
    private handlerShowAsideMenu();
    render(): JSX.Element;
}
