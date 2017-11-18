import { CSSProperties } from "react";
export interface IShowcase {
    logo?: JSX.Element;
    views: IShowcaseView[];
    defaultViewSlug?: string;
    config: {
        showNavButtons?: boolean;
        showComponentsMenu?: boolean;
        showComponentInfoButton?: boolean;
        showActualFrameButton?: boolean;
    };
}
export interface IShowcaseView {
    slug: string;
    faIconName?: string;
    title: JSX.Element | string;
    description?: JSX.Element | string;
    component: JSX.Element;
    center?: boolean;
    wrapperStyle?: CSSProperties;
    wrapperClassName?: string;
    props?: IShowcaseViewProps[];
    hide?: boolean;
}
export interface IShowcaseViewProps {
    slug: string;
    title: JSX.Element | string;
    description?: JSX.Element | string;
    redraw?: boolean;
    props?: any;
    hide?: boolean;
}
