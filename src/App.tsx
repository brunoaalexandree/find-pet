import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './structure/configs/queryClient';

import GlobalTheme from './styles/theme';
import { ApolloProvider } from '@apollo/client';
import { client } from './structure/configs/apollo';
import { Home } from './presentation/flows/SignedIn/Home';

export function App() {
  return (
    <ApolloProvider client={client}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={GlobalTheme}>
          <Home />
          <GlobalStyle />
        </ThemeProvider>
      </QueryClientProvider>
    </ApolloProvider>
  );
}
