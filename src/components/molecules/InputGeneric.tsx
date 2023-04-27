import React, { ChangeEventHandler, RefObject } from "react";
import Content from "../atoms/Content";

interface IProps {
  label: string;
  dataTestId: string;
  refference?: React.RefObject<HTMLInputElement>;
  type?: string;
  name?: string;
  className?: string;
  hidden?: boolean;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
}

const InputGeneric: React.FC<IProps> = (props) => {
  const {
    refference,
    name,
    type,
    label,
    className,
    dataTestId,
    value,
    onChange,
    hidden,
  } = props;

  return (
    <div hidden={hidden} className='relative selection:bg-green cursor-text'>
      <input
        ref={refference}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        id={dataTestId}
        data-testid={dataTestId}
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

