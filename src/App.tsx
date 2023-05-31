import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import GlobalTheme from './styles/theme';
import { Login } from './presentation/flows/SignedOff/Login';

export function App() {
  return (
    <ThemeProvider theme={GlobalTheme}>
      <Login />
      <GlobalStyle />
    </ThemeProvider>
  );
}
