import { gql } from "@apollo/client";

export const ME = gql`
  query me {
    me {
      id
      email
    }
  }
`;

export const GET_USERS = gql`
  query users {
    users {
      id
      email
      role
    }
  }
`