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
import { AlertContext } from "@/contexts/AlertContext";

interface IFormSigninUser {
  name: string;
  email: string;
  password: string;
}

export enum EnumFormStepsNavigator {
  name = 0,
  email = 1,
  password = 2,
}

const Authentication: React.FC = () => {
  const [pageSwitcher, setPageSwitcher] = useState<EnumAuthPages>(
    EnumAuthPages.auth
  );
  const [errors, setErrors] = useState<string[]>([]);
  const [formStepNavigator, setFormStepNavigator] =
    useState<EnumFormStepsNavigator>(EnumFormStepsNavigator.name);

  const loginFormRef = useRef<HTMLFormElement>(null);
  const signinFormRef = useRef<HTMLFormElement>(null);

  const { setContentKeys } = useContext(ContentKeyContext);
  const { setUserData } = useContext(UserContext);
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

  const handleNavigate = {
    Reset: () => {
      setFormStepNavigator(EnumFormStepsNavigator.name);
    },
    Add: () => {
      setFormStepNavigator((oldValue) => oldValue + 1);
    },
    AddTwo: () => {
      setFormStepNavigator((oldValue) => oldValue + 2);
    },
  };

  const sendUser = async (name: string, email: string, password: string) => {
    try {
      const { errors } = await createUserMutation({
        variables: { name, email, password },
      });
      if (!errors) {
        setErrors([]);
        setAlertContentKey?.("signin_successful");
        setType?.("success");
        setShowToaster?.(true);

        setTimeout(() => {
          setPageSwitcher(EnumAuthPages.login);
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

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (signinFormRef.current) {
      const { name, email, password } = Object.fromEntries(
        new FormData(signinFormRef.current).entries()
      ) as Partial<IFormSigninUser>;

      if (name && formStepNavigator === EnumFormStepsNavigator.name)
        handleNavigate.Add();
      if (
        email &&
        formStepNavigator === EnumFormStepsNavigator.email &&
        validateEmail(email)
      )
        handleNavigate.Add();

      if (!name || !email || !password) return;

      if (
        name.length > 0 &&
        validateEmail(email) &&
        validateCharacters(password) &&
        validateNumbers(password)
      ) {
        sendUser(name, email, password);
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
              handleNavigate={handleNavigate}
              formStepNavigator={formStepNavigator}
              isLoading={loginLoading}
              errors={errors}
              setErrors={setErrors}
              setPageSwitcher={setPageSwitcher}
            />
          </form>
        );

      case EnumAuthPages.signin:
        return (
          <form onSubmit={handleSignIn} ref={signinFormRef}>
            <Signin
              handleNavigate={handleNavigate}
              formStepNavigator={formStepNavigator}
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

  useEffect(() => {
    setFormStepNavigator(EnumFormStepsNavigator.name);
  }, [pageSwitcher]);

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

