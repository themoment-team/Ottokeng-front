import '@emotion/react';

type themeId = 'input' | 'focus' | 'hover';
declare module '@emotion/react' {
  export interface Theme {
    [key in themeId]: {
      border: string;
      width: string;
      borderRadius: string;
      padding: string;
      marginBottom: string;
      fontSize: string;
      outline: string;
      hover: any;
      transition: string;
      transform: string;
    };
  }
}
