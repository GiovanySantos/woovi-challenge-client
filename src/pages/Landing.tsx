import React from "react";
import { useQuery } from "@apollo/client";
import { gql } from "../__generated__/gql";

interface IProps {}

const GET_CONTENT_KEYS: any = gql(/* GraphQL */ `
  query GetContentKeys($keyList: [String]!, $lang: String!) {
    contentKeys(keyList: $keyList, lang: $lang) {
      key
      content
    }
  }
`);

const Landing: React.FC<IProps> = () => {
  const { loading, error, data } = useQuery(GET_CONTENT_KEYS, {
    variables: { keyList: ["home_title"], lang: "pt_BR" },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <h1>{JSON.stringify(data)}</h1>
    </div>
  );
};

export default Landing;

