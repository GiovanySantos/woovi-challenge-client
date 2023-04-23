import ButtonGeneric from "@/components/atoms/ButtonGeneric";
import Content from "@/components/atoms/Content";
import React from "react";
import { EnumAuthPages } from ".";

interface IProps {
  setPageSwitcher: React.Dispatch<React.SetStateAction<EnumAuthPages>>;
}

const Auth: React.FC<IProps> = (props) => {
  const { setPageSwitcher } = props;

  return (
    <div className='flex flex-col gap-5'>
      <div className='flex flex-col flex-wrap gap-3'>
        <Content className='text-2xl font-bold' contentKey='welcome_message' />
        <Content contentKey='login_signup_message' />
      </div>
      <div className='flex flex-wrap items-center justify-center gap-5'>
        <ButtonGeneric
          onClick={() => setPageSwitcher(EnumAuthPages.login)}
          dataTestId='login-button'
          className='mx-5 w-36'>
          <Content contentKey='login_button' />
        </ButtonGeneric>
        <ButtonGeneric
          onClick={() => setPageSwitcher(EnumAuthPages.signin)}
          dataTestId='signin-button'
          className='mx-5 w-36'>
          <Content contentKey='signup_button' />
        </ButtonGeneric>
      </div>
    </div>
  );
};

export default Auth;

