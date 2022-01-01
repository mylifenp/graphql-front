import { gql } from "@apollo/client";

export const SUPPLIERS = gql`
  query suppliers {
    suppliers {
      id
      name
      url
    }
  }
`;
