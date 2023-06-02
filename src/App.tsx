import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import GlobalTheme from './styles/theme';
import { Register } from './presentation/flows/SignedOff/Register';
import { Home } from './presentation/flows/SignedIn/Home';

export function App() {
  return (
    <ThemeProvider theme={GlobalTheme}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  );
}
