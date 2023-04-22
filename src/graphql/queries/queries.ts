import { gql } from "@apollo/client";

export const GET_CONTENT_KEYS = gql(/* GraphQL */ `
  query ContentKeys($page: String!, $lang: String!) {
    contentKeys(page: $page, lang: $lang) {
      key
      content
    }
  }
`);

