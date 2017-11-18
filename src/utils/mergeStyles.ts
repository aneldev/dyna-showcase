export interface ICssModuleStyle {
  [className: string]: string
}

export const mergeStyles = (...styles: ICssModuleStyle[]): ICssModuleStyle => {
  let output: ICssModuleStyle = {};
  styles.forEach((style: ICssModuleStyle) => {
    Object.keys(style).forEach((className: string) => {
      const value: string = style[className];
      if (!output[className])
        output[className] = value;
      else
        output[className] += ' ' + value;
    });
  });
  return output;
};
