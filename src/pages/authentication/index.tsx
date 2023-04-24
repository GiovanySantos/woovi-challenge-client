import React, {
  FormEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Auth from "./_auth";
import Login from "./_login";
import Signin from "./_signin";
import { ContentKeyContext } from "@/contexts/ContentKeyContext";
import { GET_CONTENT_KEYS_QUERY } from "@/graphql/queries";
import { CREATE_USER_MUTATION } from "@/graphql/mutations";
import { useMutation, useQuery } from "@apollo/client";
import { validateCharacters, validateNumbers } from "@/utils/validatioons";
import Toaster from "@/components/molecules/Toaster";

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

const authentication: React.FC = () => {
  const [pageSwitcher, setPageSwitcher] = useState<EnumAuthPages>(
    EnumAuthPages.auth
  );
  const [errors, setErrors] = useState<string[]>([]);

  const loginFormRef = useRef<HTMLFormElement>(null);
  const signinFormRef = useRef<HTMLFormElement>(null);

  const { setContentKeys } = useContext(ContentKeyContext);

  const getCurrentPageContentKeys = () => {
    if (pageSwitcher === EnumAuthPages.auth) return "auth_page";
    if (pageSwitcher === EnumAuthPages.login) return "login_page";
    if (pageSwitcher === EnumAuthPages.signin) return "signin_page";
    return "";
  };

  const { loading, error, data } = useQuery(GET_CONTENT_KEYS_QUERY, {
    variables: { page: getCurrentPageContentKeys(), lang: "pt_BR" },
    fetchPolicy: "cache-first",
  });
  const [createUserMutation] = useMutation(CREATE_USER_MUTATION);

  const validateForm = (name?: string, email?: string, password?: string) => {
    if (!name || !email || !password) return false;
    if (!validateCharacters(password) || !validateNumbers(password))
      return false;
    return true;
  };

  const createUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const ref = signinFormRef.current || loginFormRef.current;

    if (ref) {
      const formData = Object.fromEntries(
        new FormData(ref).entries()
      ) as Partial<IFormSigninUser>;

      const isValid = validateForm(
        formData.name,
        formData.email,
        formData.password
      );

      if (isValid) {
        try {
          const { data, errors } = await createUserMutation({
            variables: {
              name: formData.name,
              email: formData.email,
              password: formData.password,
            },
          });
          if (errors) console.log(errors);
          if (data) console.log(data);
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

  const getCurrentPage = () => {
    switch (pageSwitcher) {
      case EnumAuthPages.auth:
        return <Auth setPageSwitcher={setPageSwitcher} />;

      case EnumAuthPages.login:
        return (
          <form onSubmit={createUser} ref={loginFormRef}>
            <Login setPageSwitcher={setPageSwitcher} />
          </form>
        );

      case EnumAuthPages.signin:
        return (
          <form onSubmit={createUser} ref={signinFormRef}>
            <Signin
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
    if (data) {
      setContentKeys?.(data.contentKeys);
    }
  }, [data]);

  return (
    <div className='container flex flex-wrap items-center justify-center mx-auto'>
      <div className='flex flex-wrap flex-col items-center justify-center p-10 m-10 text-center bg-white rounded-md shadow-lg border-[1px] border-slate-300 gap-10'>
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

