import {
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from "@apollo/client/core";
import { provideApolloClient } from "@vue/apollo-composable";

const httpLink = createHttpLink({ uri: import.meta.env.VITE_API_URL });
const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: httpLink,
  cache
});

provideApolloClient(apolloClient);

export { useLazyQuery as useFetcher } from "@vue/apollo-composable";
