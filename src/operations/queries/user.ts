import { gql } from "@apollo/client";

export const ME = gql`
  query Me {
    me {
      id
      email
    }
  }
`;

export const GET_USERS = gql`
  query GetUsers {
    users {
      id
      email
      role
    }
  }
`;
