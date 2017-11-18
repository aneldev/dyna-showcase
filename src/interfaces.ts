import {CSSProperties} from "react";

export interface IShowcase {
  logo?: JSX.Element;
  views: IShowcaseView[];
  defaultViewSlug?:string;
  config:{
    // todo: not supported yet
    showNavButtons?: boolean;
    showComponentsMenu?: boolean;
    showComponentInfoButton?: boolean;
    showActualFrameButton?: boolean;
  }
}

export interface IShowcaseView {
  slug: string;
  faIconName?: string; // i.e.: cube
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
  redraw?: boolean;         // redraw the component from scratch, in case where the same component is used in a row; internally this is done by react component "key" change
  props?: any;
  hide?: boolean;
}

