import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import GlobalTheme from './styles/theme';

export function App() {
  return (
    <ThemeProvider theme={GlobalTheme}>
      <GlobalStyle />
    </ThemeProvider>
  );
}
