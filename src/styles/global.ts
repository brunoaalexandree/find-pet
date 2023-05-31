import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
        --red900: #FF3358,
        --red800: #FF4869,
        --red700: #FF859B,

        --text-title: #372F0A;
        --text-body: #8B8B8B;

        --black: #000000;
        --white: #ffffff;
        --shape: #FBFBFB

        --gray900: #5E6166;
        --gray800: #8A8A8A;
        --gray450: #B7BEC7;
        --gray400: #D0D4D7;
        --gray300: #E7E7E8;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
      @media (max-width: 1080px) {
        font-size: 93.75%; // 15px
      }

      @media (max-width: 720px) {
        font-size: 87.5%; // 14px
      }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
      font-family: 'Inter', sans-serif;
      font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6 {
      font-weight: 700;
    }

    button {
      cursor: pointer;
    }

    [disabled] {
      opacity: 0.6;
      cursor: not-allowed;
    }
`;
