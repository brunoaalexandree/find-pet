import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      red: {
        900: string;
        800: string;
        700: string;
      };
      text: {
        title: string;
        body: string;
      };
      gray: {
        900: string;
        800: string;
        450: string;
        400: string;
        300: string;
      };
      white: string;
      black: string;
    };
  }
}
