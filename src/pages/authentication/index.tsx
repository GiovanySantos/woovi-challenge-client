import { ContentKeyContext } from "@/contexts/ContentKeyContext";
import { AUTH_MUTATION, CREATE_USER_MUTATION } from "@/graphql/mutations";
import { GET_CONTENT_KEYS_QUERY } from "@/graphql/queries";
import { EnumAuthPages } from "@/types/enums";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import Auth from "./_auth";
import Login from "./_login";
import Signin from "./_signin";
import { AlertContext } from "@/contexts/AlertContext";

const Authentication: React.FC = () => {
  const [pageSwitcher, setPageSwitcher] = useState<EnumAuthPages>(
    EnumAuthPages.auth
  );
  const [errors, setErrors] = useState<string[]>([]);

  const { setContentKeys } = useContext(ContentKeyContext);
  // const { setUserData } = useContext(UserContext);
  const { setAlertContentKey, setShowToaster, setType } =
    useContext(AlertContext);

  const router = useRouter();

  const {
    loading: contentKeysLoading,
    error: contentKeysError,
    data: contentKeysData,
  } = useQuery(GET_CONTENT_KEYS_QUERY, {
    variables: { page: pageSwitcher, lang: "pt_BR" },
    fetchPolicy: "cache-first",
  });

  const [authenticateMutation, { loading: loginLoading }] =
    useMutation(AUTH_MUTATION);

  const [createUserMutation, { loading: signinLoading }] =
    useMutation(CREATE_USER_MUTATION);

  const handleCreateUser = async (
    name: string,
    email: string,
    password: string
  ) => {
    try {
      const { errors } = await createUserMutation({
        variables: { name, email, password },
      });
      if (!errors) {
        setErrors([]);
        setAlertContentKey?.("signin_successful");
        setType?.("success");
        await setPageSwitcher(EnumAuthPages.login);
        setShowToaster?.(true);

        setTimeout(() => {
          setShowToaster?.(false);
        }, 2000);
      }
    } catch (error: any) {
      const newErrorList = [...errors, error.message];
      const filtered = newErrorList.filter((elem, index) => {
        return newErrorList.indexOf(elem) === index;
      });
      setErrors(filtered);
    }
  };

  const getCurrentPage = () => {
    switch (pageSwitcher) {
      case EnumAuthPages.auth:
        return <Auth setPageSwitcher={setPageSwitcher} />;

      case EnumAuthPages.login:
        return (
          <Login
            isLoading={loginLoading}
            errors={errors}
            setErrors={setErrors}
            setPageSwitcher={setPageSwitcher}
          />
        );

      case EnumAuthPages.signin:
        return (
          <Signin
            handleCreateUser={handleCreateUser}
            isLoading={signinLoading}
            errors={errors}
            setErrors={setErrors}
            setPageSwitcher={setPageSwitcher}
          />
        );

      default:
        router.push("/authentication");
        break;
    }
  };

  useEffect(() => {
    if (contentKeysData) {
      setErrors([]);
      setContentKeys?.(contentKeysData.contentKeys);
    }
  }, [contentKeysData]);

  return (
    <div className='container flex flex-wrap items-center justify-center mx-auto'>
      <div className='flex flex-wrap flex-col items-center justify-center p-10 m-10 text-center bg-white rounded-md shadow-lg border-[1px] border-slate-300 gap-10'>
        {contentKeysLoading ? (
          <div>Loading...</div>
        ) : contentKeysError ? (
          <div>Error loading the page</div>
        ) : (
          getCurrentPage()
        )}
      </div>
    </div>
  );
};

export default Authentication;

