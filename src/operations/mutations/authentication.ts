import { gql } from "@apollo/client";

export const SIGNIN_MUTATION = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
      expires
    }
  }
`;

export const SIGNUP_MUTATION = gql`
  mutation signUp($email: String!, $password: String!) {
    signUp(input: { email: $email, password: $password }) {
      id
      email
      role
    }
  }
`;
