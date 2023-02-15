import '@emotion/react';

type themeId = 'input';
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
    };
  }
}
