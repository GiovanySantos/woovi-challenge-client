import React, { useState } from "react";
import { EnumAuthPages } from ".";
import Content from "@/components/atoms/Content";
import InputGeneric from "@/components/molecules/InputGeneric";
import ButtonGeneric from "@/components/atoms/ButtonGeneric";
import { IUser } from "@/types/interfaces";

interface IProps {
  setPageSwitcher: React.Dispatch<React.SetStateAction<EnumAuthPages>>;
}

const Login: React.FC<IProps> = (props) => {
  const { setPageSwitcher } = props;
  const [userInfo, setUserInfo] = useState<IUser | undefined>(undefined);

  return (
    <div className='flex flex-col justify-start gap-10 text-start'>
      <div className='text-3xl font-semibold'>
        <Content contentKey='welcome_title' />
      </div>
      <div className='flex flex-col gap-5'>
        <div>
          <InputGeneric
            dataTestId='login_email_label'
            label='login_email_label'
            type='text'
          />
        </div>
        <div>
          <InputGeneric
            dataTestId='login_password_label'
            label='login_password_label'
            type='password'
            className='text-2xl font-bold'
          />
        </div>
        <div className='cursor-pointer text-soft_blue w-fit'>
          <Content contentKey='recover_password' />
        </div>
      </div>
      <div className='flex flex-col gap-5'>
        <div>
          <ButtonGeneric dataTestId='continue-button' className='w-full'>
            <Content contentKey='continue_button' />
          </ButtonGeneric>
        </div>
        <div className='flex gap-2'>
          <Content contentKey='login_redirect_signup_message' />
          <button onClick={() => setPageSwitcher(EnumAuthPages.signin)}>
            <Content
              className='cursor-pointer text-soft_blue w-fit'
              contentKey='signup_redirect_button'
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

