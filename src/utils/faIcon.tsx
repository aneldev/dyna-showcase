import * as React from 'react';

export const faIcon = (awesomeFontIconName:string, className:string='') => <i className={`fa fa-${awesomeFontIconName} ${className}`.trim()} aria-hidden="true" />;
