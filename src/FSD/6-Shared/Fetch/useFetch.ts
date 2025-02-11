import { watch } from "vue";

import {
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from "@apollo/client/core";
import { provideApolloClient } from "@vue/apollo-composable";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

const httpLink = createHttpLink({ uri: "http://localhost:4000/graphql" });
const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link: httpLink,
  cache
});

provideApolloClient(apolloClient);

export default () => {

  const { result } = useQuery(gql`
    query TestModel2 {
      testModel {
        id
        name
      }
    }
  `);

  watch(() => result.value, () => {
    console.info(result.value);
  });
};
