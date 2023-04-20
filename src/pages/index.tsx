import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Landing from "./Landing";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <main className='flex items-center justify-center h-screen bg-white'>
        <Landing />
      </main>
    </ApolloProvider>
  );
}

