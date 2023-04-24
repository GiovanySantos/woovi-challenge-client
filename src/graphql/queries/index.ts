import { gql } from "@apollo/client";

export const GET_CONTENT_KEYS_QUERY = gql(/* GraphQL */ `
  query ContentKeys($page: String!, $lang: String!) {
    contentKeys(page: $page, lang: $lang) {
      key
      content
    }
  }
`);

