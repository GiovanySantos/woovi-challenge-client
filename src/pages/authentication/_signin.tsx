import React, { useState } from "react";
import Content from "@/components/atoms/Content";
import ButtonGeneric from "@/components/atoms/ButtonGeneric";
import InputGeneric from "@/components/molecules/InputGeneric";
import {
  validateCharacters,
  validateEmail,
  validateNumbers,
} from "@/utils/validations";
import Toaster from "@/components/molecules/Toaster";
import { EnumAuthPages } from "@/types/enums";

interface IProps {
  isLoading?: boolean;
  errors?: string[];
  setPageSwitcher: React.Dispatch<React.SetStateAction<EnumAuthPages>>;
  setErrors: React.Dispatch<React.SetStateAction<string[]>>;
}

const Signin: React.FC<IProps> = (props) => {
  const { setPageSwitcher, errors = [], setErrors, isLoading } = props;
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

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
    <div className='flex flex-col justify-start gap-6 text-start'>
      <div className='text-3xl font-semibold'>
        <Content contentKey='create_your_account' />
      </div>
      <div className='flex flex-col gap-3'>
        <InputGeneric
          name='name'
          dataTestId='signin_name_label'
          label='signin_name_label'
          type='text'
        />
        <InputGeneric
          name='email'
          dataTestId='signin_email_label'
          label='signin_email_label'
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputGeneric
          name='password'
          dataTestId='signin_password_label'
          label='signin_password_label'
          type='password'
          className='text-2xl font-bold'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
          <Toaster
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
          <Content contentKey='continue_button' />
        </ButtonGeneric>
        <div className='flex flex-col gap-3 border-[1px] border-gray rounded-md px-3 py-4 font-semibold text-zinc-600'>
          <Content contentKey='validations_title' />
          <ul className='text-xs'>
            <li className='flex items-center'>
              {getValidationSVGIcon(validateEmail(email))}
              <Content contentKey='email_validation_1' />
            </li>
            <li className='flex items-center'>
              {getValidationSVGIcon(validateNumbers(password))}
              <Content contentKey='password_validation_1' />
            </li>
            <li className='flex items-center'>
              {getValidationSVGIcon(validateCharacters(password))}
              <Content contentKey='password_validation_2' />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Signin;

