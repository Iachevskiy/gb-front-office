import { computed, watch } from "vue";

import { graphql } from "./generatedTypes";

import {
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from "@apollo/client/core";
import { provideApolloClient } from "@vue/apollo-composable";
import { useQuery } from "@vue/apollo-composable";

const httpLink = createHttpLink({ uri: import.meta.env.VITE_API_URL });
const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: httpLink,
  cache
});

provideApolloClient(apolloClient);

export default () => {
  const api = useQuery(graphql(`
    query ExampleQuery {
      role {
        id
        name
      }
    }
  `));

  const test = computed(() => api.result.value?.role || []);

  watch(() => test.value, () => {
    console.info(test.value);
  }, { immediate: true });

  return { test };
};
