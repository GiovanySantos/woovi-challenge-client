import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql(/* GraphQL */ `
  mutation CreateUser($name: String!, $email: String!, $password: String!) {
    createUser(name: $name, email: $email, password: $password) {
      name
      email
    }
  }
`);

export const AUTH_MUTATION = gql(/* GraphQL */ `
  mutation GetAuthUser($email: String!, $password: String!) {
    getAuthUser(email: $email, password: $password) {
      name
      email
    }
  }
`);

