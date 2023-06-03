import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';
import { QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { queryClient } from './structure/configs/queryClient';
import { client } from './structure/configs/apollo';

import { GlobalStyle } from './styles/global';
import GlobalTheme from './styles/theme';
import { router } from './routes/routes';
import { store, persistor } from './structure/store';

export function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ApolloProvider client={client}>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={GlobalTheme}>
              <RouterProvider router={router} />
              <GlobalStyle />
            </ThemeProvider>
          </QueryClientProvider>
        </ApolloProvider>
      </PersistGate>
    </Provider>
  );
}
