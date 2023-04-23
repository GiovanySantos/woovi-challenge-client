import React from "react";
import { EnumAuthPages } from ".";
import Content from "@/components/atoms/Content";
import ButtonGeneric from "@/components/atoms/ButtonGeneric";
import InputGeneric from "@/components/molecules/InputGeneric";

interface IProps {
  setPageSwitcher: React.Dispatch<React.SetStateAction<EnumAuthPages>>;
}

const Signin: React.FC<IProps> = (props) => {
  const { setPageSwitcher } = props;

  return (
    <div className='flex flex-col justify-start gap-6 text-start'>
      <div className='text-3xl font-semibold'>
        <Content contentKey='create_your_account' />
      </div>
      <div className='flex flex-col gap-3'>
        <InputGeneric
          dataTestId='signin_email_label'
          label='signin_email_label'
          type='text'
        />
        <InputGeneric
          dataTestId='signin_password_label'
          label='signin_password_label'
          type='password'
          className='text-2xl font-bold'
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
        <ButtonGeneric dataTestId='continue-button' className='w-full'>
          <Content contentKey='continue_button' />
        </ButtonGeneric>
        <div className='flex flex-col gap-3 border-[1px] border-grey rounded-md px-3 py-4'>
          <Content contentKey='password_validation_title' />
          <div className='flex flex-col gap-1'>
            <Content
              className='text-red-600'
              contentKey='password_validation_1'
            />
            <Content
              className='text-dark_green'
              contentKey='password_validation_2'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;

