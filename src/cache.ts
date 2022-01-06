import { InMemoryCache, makeVar } from "@apollo/client";
import Cookies from "js-cookie";
import { AUTH_TOKEN } from "./utils/config";

export const isLoggedInVar = makeVar<boolean>(!!Cookies.get(AUTH_TOKEN));
export const loggedUser = makeVar({});
export const defaultValues = makeVar({})

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        isLoggedIn: {
          read() {
            return isLoggedInVar();
          },
        },
        getLoggedUser: {
          read() {
            return loggedUser();
          },
        },
        defaults: {
          read() {
            return defaultValues()
          }
        }
      },
    },
  },
});
