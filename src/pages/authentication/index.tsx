import { ContentKeyContext } from "@/contexts/ContentKeyContext";
import { AUTH_MUTATION, CREATE_USER_MUTATION } from "@/graphql/mutations";
import { GET_CONTENT_KEYS_QUERY } from "@/graphql/queries";
import { EnumAuthPages } from "@/types/enums";
import {
  validateCharacters,
  validateEmail,
  validateNumbers,
} from "@/utils/validations";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import Auth from "./_auth";
import Login from "./_login";
import Signin from "./_signin";

interface IFormSigninUser {
  name: string;
  email: string;
  password: string;
}

const Authentication: React.FC = () => {
  const [pageSwitcher, setPageSwitcher] = useState<EnumAuthPages>(
    EnumAuthPages.auth
  );
  const [errors, setErrors] = useState<string[]>([]);

  const loginFormRef = useRef<HTMLFormElement>(null);
  const signinFormRef = useRef<HTMLFormElement>(null);

  const { setContentKeys } = useContext(ContentKeyContext);
  const { setUserData } = useContext(UserContext);

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

  const createUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const ref = signinFormRef.current;
    if (ref) {
      const { name, email, password } = Object.fromEntries(
        new FormData(ref).entries()
      ) as Partial<IFormSigninUser>;

      if (name && email && password) {
        const isValid =
          name.length > 0 &&
          validateCharacters(password) &&
          validateNumbers(password) &&
          validateEmail(email);

        if (isValid) {
          try {
            const { errors } = await createUserMutation({
              variables: { name, email, password },
            });
            if (!errors) {
              setErrors([]);
              setPageSwitcher(EnumAuthPages.login);
            }
          } catch (error: any) {
            const newErrorList = [...errors, error.message];
            const filtered = newErrorList.filter((elem, index) => {
              return newErrorList.indexOf(elem) === index;
            });
            setErrors(filtered);
          }
        }
      }
    }
  };

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const ref = loginFormRef.current;
    if (ref) {
      const { email, password } = Object.fromEntries(
        new FormData(ref).entries()
      ) as Partial<IFormSigninUser>;

      if (email && password) {
        const isValid = validateEmail(email) && password.length > 0;

        if (isValid) {
          try {
            const { data } = await authenticateMutation({
              variables: { email, password },
            });
            if (data) {
              setErrors([]);
              setUserData?.(data);
              // router.push("/");
            }
          } catch (error: any) {
            const newErrorList = [...errors, error.message];
            const filtered = newErrorList.filter((elem, index) => {
              return newErrorList.indexOf(elem) === index;
            });
            setErrors(filtered);
          }
        }
      }
    }
  };

  const getCurrentPage = () => {
    switch (pageSwitcher) {
      case EnumAuthPages.auth:
        return <Auth setPageSwitcher={setPageSwitcher} />;

      case EnumAuthPages.login:
        return (
          <form onSubmit={handleLogin} ref={loginFormRef}>
            <Login
              isLoading={loginLoading}
              errors={errors}
              setErrors={setErrors}
              setPageSwitcher={setPageSwitcher}
            />
          </form>
        );

      case EnumAuthPages.signin:
        return (
          <form onSubmit={createUser} ref={signinFormRef}>
            <Signin
              isLoading={signinLoading}
              errors={errors}
              setErrors={setErrors}
              setPageSwitcher={setPageSwitcher}
            />
          </form>
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

