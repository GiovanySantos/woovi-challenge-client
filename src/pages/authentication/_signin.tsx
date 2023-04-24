import React, { useState } from "react";
import { EnumAuthPages } from ".";
import Content from "@/components/atoms/Content";
import ButtonGeneric from "@/components/atoms/ButtonGeneric";
import InputGeneric from "@/components/molecules/InputGeneric";
import { validateCharacters, validateNumbers } from "@/utils/validatioons";
import Toaster from "@/components/molecules/Toaster";

interface IProps {
  errors?: string[];
  setPageSwitcher: React.Dispatch<React.SetStateAction<EnumAuthPages>>;
  setErrors: React.Dispatch<React.SetStateAction<string[]>>;
}

const Signin: React.FC<IProps> = (props) => {
  const { setPageSwitcher, errors, setErrors } = props;
  const [password, setPassword] = useState<string>("");

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
          <button
            onClick={() => setPageSwitcher(EnumAuthPages.login)}
            className='cursor-pointer text-soft_blue w-fit hover:text-blue'>
            <Content contentKey='login' />
          </button>
        </div>
      </div>
      <div className='flex flex-col gap-5'>
        <ButtonGeneric
          type='submit'
          dataTestId='continue-button'
          className='w-full'>
          <Content contentKey='continue_button' />
        </ButtonGeneric>
        {errors?.length || 0 > 0 ? (
          <Toaster setErrors={setErrors} errorsContentKey={errors || []} />
        ) : (
          ""
        )}
        <div className='flex flex-col gap-3 border-[1px] border-grey rounded-md px-3 py-4'>
          <Content contentKey='password_validation_title' />
          <div className='flex flex-col gap-1'>
            <Content
              className={
                validateNumbers(password) ? "text-dark_green" : "text-red-600"
              }
              contentKey='password_validation_1'
            />
            <Content
              className={
                validateCharacters(password)
                  ? "text-dark_green"
                  : "text-red-600"
              }
              contentKey='password_validation_2'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;

