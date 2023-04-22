import "@/styles/globals.css";
import { useState } from "react";
import type { AppProps } from "next/app";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ContentKeyContext } from "@/contexts/ContentKeyContext";
import { IContentKeys } from "@/types/interfaces";
import { EnumLanguageAvaliable } from "@/types/enums";
import Layout from "@/components/templates/Layout";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  const [language, setLanguage] = useState<EnumLanguageAvaliable>(
    EnumLanguageAvaliable.ptBR
  );
  const [contentKeys, setContentKeys] = useState<IContentKeys[]>([]);

  return (
    <ApolloProvider client={client}>
      <ContentKeyContext.Provider
        value={{
          contentKeys,
          setContentKeys,
          language,
          setLanguage,
        }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ContentKeyContext.Provider>
    </ApolloProvider>
  );
}

