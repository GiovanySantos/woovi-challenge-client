import React, { ChangeEventHandler } from "react";
import Content from "../atoms/Content";

interface IProps {
  label: string;
  type: string;
  className?: string;
  dataTestId: string;
  name: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  ref?: React.MutableRefObject<HTMLInputElement | null>;
}

const InputGeneric: React.FC<IProps> = (props) => {
  const { label, type, dataTestId, className, name, value, onChange, ref } =
    props;
  return (
    <div className='relative selection:bg-green cursor-text'>
      <input
        ref={ref}
        value={value}
        onChange={onChange && onChange}
        name={name}
        id={dataTestId}
        data-testid={dataTestId}
        type={type}
        className={`${className} block px-2.5 pb-2.5 pt-4 w-full text-sm text-primary_text bg-transparent rounded-md border-[1px] border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer selection:bg-green`}
        placeholder=' '
      />
      <label
        htmlFor={dataTestId}
        className='absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1'>
        <Content className='cursor-text' contentKey={label} />
      </label>
    </div>
  );
};

export default InputGeneric;

