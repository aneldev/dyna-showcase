import * as React from "react";
import {Button} from 'react-bootstrap'

const styles: any = require('./Button.less');

export interface IButtonProps{
  caption: string,
  buttonStyle?: string;
}

export interface IButtonState {
}

export class SuperButton extends React.Component<IButtonProps, IButtonState> {
  constructor(props: IButtonProps, context: any) {
    super(props as any, context);
  }

  public static defaultProps: IButtonProps = {
    caption: null,
  };

  render(): JSX.Element {
    const {
      caption,
      buttonStyle,
    } = this.props;

    return (
      <Button bsStyle={buttonStyle}>{caption}</Button>
    );
  }
}
