import { computed, watch } from "vue";

import { graphql } from "./generatedTypes";

import {
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from "@apollo/client/core";
import { provideApolloClient } from "@vue/apollo-composable";
import { useQuery } from "@vue/apollo-composable";

const httpLink = createHttpLink({ uri: "http://localhost:4000/graphql" });
const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: httpLink,
  cache
});

provideApolloClient(apolloClient);

export default () => {

  const api = useQuery(graphql(`
    query TestModel {
      testModel {
        id
        name
      }
    }
  `));

  const test = computed(() => api.result.value?.testModel || []);

  watch(() => test.value, () => {
    console.info(test.value);
  }, { immediate: true });
};
