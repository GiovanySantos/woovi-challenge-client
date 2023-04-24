import ButtonGeneric from "@/components/atoms/ButtonGeneric";
import Content from "@/components/atoms/Content";
import { EnumAuthPages } from "@/types/enums";
import React from "react";

interface IProps {
  setPageSwitcher: React.Dispatch<React.SetStateAction<EnumAuthPages>>;
}

const Auth: React.FC<IProps> = (props) => {
  const { setPageSwitcher } = props;

  return (
    <div className='flex flex-col gap-5'>
      <Content className='text-2xl font-bold' contentKey='welcome_message' />
      <Content contentKey='login_signup_message' />
      <div className='flex flex-wrap items-center justify-center gap-3'>
        <ButtonGeneric
          onClick={() => setPageSwitcher(EnumAuthPages.login)}
          dataTestId='login-button'>
          <Content contentKey='login_button' />
        </ButtonGeneric>
        <ButtonGeneric
          onClick={() => setPageSwitcher(EnumAuthPages.signin)}
          dataTestId='signin-button'>
          <Content contentKey='signup_button' />
        </ButtonGeneric>
      </div>
    </div>
  );
};

export default Auth;

