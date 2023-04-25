import Layout from "@/components/templates/Layout";
import { AlertContext } from "@/contexts/AlertContext";
import { ContentKeyContext } from "@/contexts/ContentKeyContext";
import { UserContext } from "@/contexts/UserContext";
import "@/styles/globals.css";
import { EnumLanguageAvaliable } from "@/types/enums";
import { IContentKeys, IUser } from "@/types/interfaces";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import type { AppProps } from "next/app";
import { useState } from "react";

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
  const [alertContentKey, setAlertContentKey] = useState<string>("");
  const [showToaster, setShowToaster] = useState<boolean>(false);
  const [type, setType] = useState<"success" | "danger" | "warning">("success");

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
          <AlertContext.Provider
            value={{
              alertContentKey,
              setAlertContentKey,
              showToaster,
              setShowToaster,
              type,
              setType,
            }}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </AlertContext.Provider>
        </UserContext.Provider>
      </ContentKeyContext.Provider>
    </ApolloProvider>
  );
}

