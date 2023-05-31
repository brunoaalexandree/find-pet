import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import GlobalTheme from './styles/theme';
import { Register } from './presentation/flows/SignedOff/Register';

export function App() {
  return (
    <ThemeProvider theme={GlobalTheme}>
      <Register />
      <GlobalStyle />
    </ThemeProvider>
  );
}
