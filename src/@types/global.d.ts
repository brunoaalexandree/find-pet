import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      red: {
        900: string;
        800: string;
        700: string;
        200: string;
        100: string;
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
        350: string;
        300: string;
        250: string;
        200: string;
        100: string;
      };
      white: string;
      black: string;
    };
  }
}
