import ButtonGeneric from "@/components/atoms/ButtonGeneric";
import Content from "@/components/atoms/Content";
import InputGeneric from "@/components/molecules/InputGeneric";
import ErrorsBox from "@/components/molecules/ErrorsBox";
import { EnumAuthPages } from "@/types/enums";
import React from "react";
import { EnumFormStepsNavigator } from ".";

interface IProps {
  isLoading?: boolean;
  errors?: string[];
  setErrors: React.Dispatch<React.SetStateAction<string[]>>;
  setPageSwitcher: React.Dispatch<React.SetStateAction<EnumAuthPages>>;
}

const Login: React.FC<IProps> = (props) => {
  const { isLoading, errors = [], setErrors, setPageSwitcher } = props;

  return (
    <div className='flex flex-col justify-start gap-5 text-start'>
      <Content className='text-3xl font-semibold' contentKey='welcome_title' />
      {/* <InputGeneric
        name='email'
        dataTestId='login_email_label'
        label='login_email_label'
        type='text'
      />
      <InputGeneric
        hidden={formStepNavigator < 2}
        name='password'
        dataTestId='login_password_label'
        label='login_password_label'
        type='password'
        className='text-2xl font-bold'
      /> */}
      <div
        // hidden={formStepNavigator < 2}
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
          // contentKey={
          //   formStepNavigator < 2 ? "continue_button" : "login_button"
          // }
          contentKey='continue_button'
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
    </div>
  );
};

export default Login;

