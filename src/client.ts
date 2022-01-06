import {
  ApolloClient,
  ApolloLink,
  concat,
  createHttpLink,
} from "@apollo/client";
import Cookies from "js-cookie";
import { cache } from "./cache";
import { typeDefs } from "./operations/typeDefs";
import { AUTH_TOKEN, GRAPHQL_URL } from "./utils/config";


const link = createHttpLink({
  uri: GRAPHQL_URL,
});


const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => {
    const token = Cookies.get(AUTH_TOKEN) || "";
    return {
      headers: {
        ...headers,
        token,
      },
    };
  });

  return forward(operation);
});

export const client = new ApolloClient({
  link: concat(authMiddleware, link),
  cache,
  typeDefs,
});
