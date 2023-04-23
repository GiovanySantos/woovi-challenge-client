import React, { useContext, useEffect, useState } from "react";
import Auth from "./_auth";
import Login from "./_login";
import Signin from "./_signin";
import { ContentKeyContext } from "@/contexts/ContentKeyContext";
import { GET_CONTENT_KEYS } from "@/graphql/queries/queries";
import { useQuery } from "@apollo/client";

export enum EnumAuthPages {
  auth = 0,
  login = 1,
  signin = 2,
}

const authentication: React.FC = () => {
  const [pageSwitcher, setPageSwitcher] = useState<EnumAuthPages>(
    EnumAuthPages.auth
  );

  const { setContentKeys } = useContext(ContentKeyContext);

  const getCurrentPageContentKeys = () => {
    if (pageSwitcher === EnumAuthPages.auth) return "auth_page";
    if (pageSwitcher === EnumAuthPages.login) return "login_page";
    if (pageSwitcher === EnumAuthPages.signin) return "signin_page";
    return "";
  };

  const { loading, error, data } = useQuery(GET_CONTENT_KEYS, {
    variables: { page: getCurrentPageContentKeys(), lang: "pt_BR" },
    fetchPolicy: "cache-first",
  });

  useEffect(() => {
    if (data) {
      setContentKeys?.(data.contentKeys);
    }
  }, [data]);

  const getCurrentPage = () => {
    switch (pageSwitcher) {
      case EnumAuthPages.auth:
        return <Auth setPageSwitcher={setPageSwitcher} />;

      case EnumAuthPages.login:
        return <Login setPageSwitcher={setPageSwitcher} />;

      case EnumAuthPages.signin:
        return <Signin setPageSwitcher={setPageSwitcher} />;

      default:
        break;
    }
  };

  return (
    <div className='container flex flex-wrap items-center justify-center mx-auto'>
      <div className='flex flex-wrap flex-col items-center justify-center p-10 m-10 text-center bg-white rounded-md shadow-lg border-[1px] border-slate-300'>
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error loading the page</div>
        ) : (
          getCurrentPage()
        )}
      </div>
    </div>
  );
};

export default authentication;

