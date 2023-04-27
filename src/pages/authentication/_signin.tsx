import React, { ChangeEvent, FormEvent, useRef, useState } from "react";
import Content from "@/components/atoms/Content";
import ButtonGeneric from "@/components/atoms/ButtonGeneric";
import InputGeneric from "@/components/molecules/InputGeneric";
import {
  validateCharacters,
  validateEmail,
  validateNumbers,
} from "@/utils/validations";
import ErrorsBox from "@/components/molecules/ErrorsBox";
import { EnumAuthPages } from "@/types/enums";

interface IProps {
  errors: string[];
  setErrors: React.Dispatch<React.SetStateAction<string[]>>;
  isLoading?: boolean;
  setPageSwitcher: React.Dispatch<React.SetStateAction<EnumAuthPages>>;
  handleCreateUser: (name: string, email: string, password: string) => void;
}

const Signin: React.FC<IProps> = (props) => {
  const {
    errors = [],
    setErrors,
    setPageSwitcher,
    isLoading,
    handleCreateUser,
  } = props;

  const [hiddenFields, setHiddenFields] = useState<number>(0);
  const [signinData, setSigninData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { name, email, password } = signinData;

    const isNameValid = name && name.length > 0;
    const isEmailValid = email && email.length > 0 && validateEmail(email);
    const isPasswordValid =
      password &&
      password.length > 0 &&
      validateNumbers(password) &&
      validateCharacters(password);

    if (isNameValid && isEmailValid && isPasswordValid) {
      handleCreateUser(name, email, password);
      return;
    }

    if (name && name.length > 0) {
      await setHiddenFields(1);
      emailRef.current?.focus();
    }
    if (email && email.length > 0) {
      await setHiddenFields(2);
      passwordRef.current?.focus();
    }
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSigninData({ ...signinData, [event.target.name]: event.target.value });
  };

  const getValidationSVGIcon = (statement: boolean) => {
    return statement ? (
      <svg
        className='w-4 h-4 mr-1.5 text-dark_green flex-shrink-0'
        fill='currentColor'
        viewBox='0 0 20 20'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          fillRule='evenodd'
          d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
          clipRule='evenodd'></path>
      </svg>
    ) : (
      <svg
        className='w-4 h-4 mr-1.5 text-gray-600 flex-shrink-0'
        fill='currentColor'
        viewBox='0 0 20 20'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          fillRule='evenodd'
          d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
          clipRule='evenodd'></path>
      </svg>
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col justify-start gap-6 text-start'>
      <div className='text-3xl font-semibold'>
        <Content contentKey='create_your_account' />
      </div>
      <div className='flex flex-col gap-3'>
        <InputGeneric
          refference={nameRef}
          name='name'
          type='text'
          value={signinData.name}
          dataTestId='signin_name_label'
          label='signin_name_label'
          onChange={onChange}
        />
        <InputGeneric
          refference={emailRef}
          name='email'
          type='email'
          value={signinData.email}
          hidden={hiddenFields < 1}
          dataTestId='signin_email_label'
          label='signin_email_label'
          onChange={onChange}
        />
        <InputGeneric
          refference={passwordRef}
          type='password'
          name='password'
          value={signinData.password}
          hidden={hiddenFields < 2}
          dataTestId='signin_password_label'
          label='signin_password_label'
          className='text-2xl font-bold'
          onChange={onChange}
        />
        <div className='flex gap-2'>
          <Content contentKey='already_have_an_account' />
          <div
            onClick={() => setPageSwitcher(EnumAuthPages.login)}
            className='cursor-pointer text-soft_blue w-fit hover:text-blue'>
            <Content contentKey='login' />
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-5'>
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
            contentKey={hiddenFields < 2 ? "continue_button" : "signin_button"}
          />
        </ButtonGeneric>
        <div className='flex flex-col gap-3 border-[1px] border-gray rounded-md px-3 py-4 font-semibold text-zinc-600'>
          <Content contentKey='validations_title' />
          <ul className='text-xs'>
            <li className='flex items-center'>
              {getValidationSVGIcon(validateEmail(signinData.email))}
              <Content contentKey='email_validation_1' />
            </li>
            <li className='flex items-center'>
              {getValidationSVGIcon(validateNumbers(signinData.password))}
              <Content contentKey='password_validation_1' />
            </li>
            <li className='flex items-center'>
              {getValidationSVGIcon(validateCharacters(signinData.password))}
              <Content contentKey='password_validation_2' />
            </li>
          </ul>
        </div>
      </div>
    </form>
  );
};

export default Signin;

