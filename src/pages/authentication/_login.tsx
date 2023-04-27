import ButtonGeneric from "@/components/atoms/ButtonGeneric";
import Content from "@/components/atoms/Content";
import InputGeneric from "@/components/molecules/InputGeneric";
import ErrorsBox from "@/components/molecules/ErrorsBox";
import { EnumAuthPages } from "@/types/enums";
import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import {
  validateEmail,
  validateNumbers,
  validateCharacters,
} from "@/utils/validations";

interface IProps {
  isLoading?: boolean;
  errors?: string[];
  setErrors: React.Dispatch<React.SetStateAction<string[]>>;
  setPageSwitcher: React.Dispatch<React.SetStateAction<EnumAuthPages>>;
  handleLogin: (email: string, password: string) => void;
}

const Login: React.FC<IProps> = (props) => {
  const {
    isLoading,
    errors = [],
    setErrors,
    setPageSwitcher,
    handleLogin,
  } = props;
  const [hiddenFields, setHiddenFields] = useState<number>(0);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { email, password } = loginData;

    const isEmailValid = email.length > 0 && validateEmail(email);
    const isPasswordValid =
      password.length > 0 &&
      validateNumbers(password) &&
      validateCharacters(password);

    if (isEmailValid && isPasswordValid) {
      handleLogin(email, password);
      return;
    }

    if (email.length > 0) {
      await setHiddenFields(1);
      passwordRef.current?.focus();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col justify-start gap-5 text-start'>
      <Content className='text-3xl font-semibold' contentKey='welcome_title' />
      <InputGeneric
        refference={emailRef}
        name='email'
        type='email'
        value={loginData.email}
        dataTestId='login_email_label'
        label='login_email_label'
        onChange={onChange}
      />
      <InputGeneric
        refference={passwordRef}
        hidden={hiddenFields < 1}
        name='password'
        type='password'
        value={loginData.password}
        dataTestId='login_password_label'
        label='login_password_label'
        className='text-2xl font-bold'
        onChange={onChange}
      />
      <div
        hidden={hiddenFields < 1}
        className='cursor-pointer text-soft_blue w-fit hover:text-blue'>
        <Content contentKey='recover_password' />
      </div>
      {errors.length > 0 && (
        <ErrorsBox
          dataTestId='dismiss-button'
          setErrors={setErrors}
          errorsContentKey={errors}
        />
      )}
      <ButtonGeneric
        isLoading={isLoading}
        type='submit'
        dataTestId='continue-button'
        className='w-full'>
        <Content
          contentKey={hiddenFields < 1 ? "continue_button" : "login_button"}
        />
      </ButtonGeneric>
      <div className='flex gap-2'>
        <Content contentKey='login_redirect_signup_message' />
        <div onClick={() => setPageSwitcher(EnumAuthPages.signin)}>
          <Content
            className='cursor-pointer text-soft_blue w-fit hover:text-blue'
            contentKey='signup_redirect_button'
          />
        </div>
      </div>
    </form>
  );
};

export default Login;

