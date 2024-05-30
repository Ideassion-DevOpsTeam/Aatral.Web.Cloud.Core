import { ApolloClient, InMemoryCache } from "@apollo/client";
import { apiurl } from "./API_URL";

const client = new ApolloClient({
  uri: apiurl + `/graphql`,
  cache: new InMemoryCache(),
});

export default client;
