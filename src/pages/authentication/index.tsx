import React, { useContext, useEffect, useRef, useState } from "react";
import Auth from "./_auth";
import Login from "./_login";
import Signin from "./_signin";
import { ContentKeyContext } from "@/contexts/ContentKeyContext";
import { GET_CONTENT_KEYS_QUERY } from "@/graphql/queries";
import { CREATE_USER_MUTATION, AUTH_MUTATION } from "@/graphql/mutations";
import { useMutation, useQuery } from "@apollo/client";
import {
  validateCharacters,
  validateEmail,
  validateNumbers,
} from "@/utils/validations";
import { UserContext } from "../../contexts/UserContext";
import { useRouter } from "next/router";

export enum EnumAuthPages {
  auth = 0,
  login = 1,
  signin = 2,
}

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

  const router = useRouter();
  const loginFormRef = useRef<HTMLFormElement>(null);
  const signinFormRef = useRef<HTMLFormElement>(null);

  const { setContentKeys } = useContext(ContentKeyContext);
  const { setUserData } = useContext(UserContext);

  const getCurrentPageContentKeys = () => {
    switch (pageSwitcher) {
      case EnumAuthPages.auth:
        return "auth_page";
      case EnumAuthPages.login:
        return "login_page";
      case EnumAuthPages.signin:
        return "signin_page";
      default:
        return "";
    }
  };

  const {
    loading: contentKeysLoading,
    error: contentKeysError,
    data: contentKeysData,
  } = useQuery(GET_CONTENT_KEYS_QUERY, {
    variables: { page: getCurrentPageContentKeys(), lang: "pt_BR" },
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
      const formData = Object.fromEntries(
        new FormData(ref).entries()
      ) as Partial<IFormSigninUser>;

      const isValid =
        !formData.name ||
        !formData.email ||
        !formData.password ||
        !validateCharacters(formData.password) ||
        !validateNumbers(formData.password) ||
        validateEmail(formData.email);

      if (isValid) {
        try {
          const { data } = await createUserMutation({
            variables: {
              name: formData.name,
              email: formData.email,
              password: formData.password,
            },
          });
          if (data) setPageSwitcher(EnumAuthPages.login);
        } catch (error: any) {
          const newErrorList = [...errors, error.message];
          const filtered = newErrorList.filter((elem, index) => {
            return newErrorList.indexOf(elem) === index;
          });
          setErrors(filtered);
        }
      }
    }
  };

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const ref = loginFormRef.current;
    if (ref) {
      const formData = Object.fromEntries(
        new FormData(ref).entries()
      ) as Partial<IFormSigninUser>;

      const isValid = validateEmail(formData.email ?? "") || formData.password;

      if (isValid) {
        try {
          const { data } = await authenticateMutation({
            variables: {
              email: formData.email,
              password: formData.password,
            },
          });
          console.log(data);
          if (data) {
            setUserData?.(data);
            router.push("/");
          }
        } catch (error: any) {
          console.log(error);
          const newErrorList = [...errors, error.message];
          const filtered = newErrorList.filter((elem, index) => {
            return newErrorList.indexOf(elem) === index;
          });
          setErrors(filtered);
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
        break;
    }
  };

  useEffect(() => {
    if (contentKeysData) {
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

