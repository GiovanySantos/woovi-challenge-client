import React from "react";
import { EnumAuthPages } from ".";
import Content from "@/components/atoms/Content";
import InputGeneric from "@/components/molecules/InputGeneric";
import ButtonGeneric from "@/components/atoms/ButtonGeneric";
import Toaster from "@/components/molecules/Toaster";

interface IProps {
  isLoading?: boolean;
  errors?: string[];
  setPageSwitcher: React.Dispatch<React.SetStateAction<EnumAuthPages>>;
  setErrors: React.Dispatch<React.SetStateAction<string[]>>;
}

const Login: React.FC<IProps> = (props) => {
  const { isLoading, errors, setErrors, setPageSwitcher } = props;

  return (
    <div className='flex flex-col justify-start gap-5 text-start'>
      <div className='text-3xl font-semibold'>
        <Content contentKey='welcome_title' />
      </div>
      <div className='flex flex-col gap-5'>
        <div>
          <InputGeneric
            name='email'
            dataTestId='login_email_label'
            label='login_email_label'
            type='text'
          />
        </div>
        <div>
          <InputGeneric
            name='password'
            dataTestId='login_password_label'
            label='login_password_label'
            type='password'
            className='text-2xl font-bold'
          />
        </div>
        <div className='cursor-pointer text-soft_blue w-fit hover:text-blue'>
          <Content contentKey='recover_password' />
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        {errors?.length || 0 > 0 ? (
          <Toaster setErrors={setErrors} errorsContentKey={errors || []} />
        ) : null}
        <div>
          <ButtonGeneric
            isLoading={isLoading}
            type='submit'
            dataTestId='continue-button'
            className='w-full'>
            <Content contentKey='continue_button' />
          </ButtonGeneric>
        </div>
        <div className='flex gap-2'>
          <Content contentKey='login_redirect_signup_message' />
          <button onClick={() => setPageSwitcher(EnumAuthPages.signin)}>
            <Content
              className='cursor-pointer text-soft_blue w-fit hover:text-blue'
              contentKey='signup_redirect_button'
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

