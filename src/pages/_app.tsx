import "@/styles/globals.css";
import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ContentKeyContext } from "@/contexts/ContentKeyContext";
import { UserContext } from "@/contexts/UserContext";
import { IContentKeys, IUser } from "@/types/interfaces";
import { EnumLanguageAvaliable } from "@/types/enums";
import Layout from "@/components/templates/Layout";
import { useRouter } from "next/router";

const client = new ApolloClient({
  uri: process.env.local,
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  const [language, setLanguage] = useState<EnumLanguageAvaliable>(
    EnumLanguageAvaliable.ptBR
  );
  const [contentKeys, setContentKeys] = useState<IContentKeys[]>([]);
  const [userData, setUserData] = useState<IUser | undefined>(undefined);
  const router = useRouter();

  useEffect(() => {
    if (!userData) router.push("/authentication");
  }, [userData]);

  return (
    <ApolloProvider client={client}>
      <ContentKeyContext.Provider
        value={{
          contentKeys,
          setContentKeys,
          language,
          setLanguage,
        }}>
        <UserContext.Provider
          value={{
            userData,
            setUserData,
          }}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </UserContext.Provider>
      </ContentKeyContext.Provider>
    </ApolloProvider>
  );
}

