import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { Register } from './presentation/flows/SignedOff/Register';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './structure/configs/queryClient';

import GlobalTheme from './styles/theme';
import { ApolloProvider } from '@apollo/client';
import { client } from './structure/configs/apollo';
import { Login } from './presentation/flows/SignedOff/Login';

export function App() {
  return (
    <ApolloProvider client={client}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={GlobalTheme}>
          <Login />
          <GlobalStyle />
        </ThemeProvider>
      </QueryClientProvider>
    </ApolloProvider>
  );
}
