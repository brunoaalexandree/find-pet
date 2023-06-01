import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://mananjary.stepzen.net/api/finder-pet/__graphql',
  headers: {
    Authorization:
      'Apikey mananjary::stepzen.net+1000::3736e1fa4bda014a1afba2dac95c4e52cc48c68a37d37aa9b08e9f259c414c3a',
  },
  cache: new InMemoryCache(),
});
