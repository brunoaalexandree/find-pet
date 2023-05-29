import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import GlobalTheme from './styles/theme';
import { SearchBar } from './components/Base/SearchBar';

export function App() {
  return (
    <ThemeProvider theme={GlobalTheme}>
      <div style={{ paddingTop: '250px' }}>
        <SearchBar />
      </div>
      <GlobalStyle />
    </ThemeProvider>
  );
}
