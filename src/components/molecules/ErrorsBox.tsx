import React from "react";
import Content from "../atoms/Content";

interface IProps {
  errorsContentKey?: string[];
  dataTestId: string;
  setErrors?: React.Dispatch<React.SetStateAction<string[]>>;
}

const ErrorsBox: React.FC<IProps> = (props) => {
  const { errorsContentKey, setErrors, dataTestId } = props;
  return (
    <div
      id='toast-default'
      className='flex flex-wrap items-center w-full max-w-xs p-4 text-white bg-red-600 rounded-md shadow'
      role='alert'>
      <div className='ml-3 text-xs font-normal'>
        {errorsContentKey?.map((error: string, key: number) => (
          <div key={key}>
            <Content contentKey={error} />
          </div>
        ))}
      </div>
      <div
        data-testid={dataTestId}
        onClick={() => setErrors?.([])}
        className='ml-auto -mx-1.5 -my-1.5 bg-transparent text-white hover:cursor-pointer rounded-lg p-1.5 inline-flex h-8 w-8'
        data-dismiss-target='#toast-default'
        aria-label='Close'>
        <span className='sr-only'>Close</span>
        <svg
          aria-hidden='true'
          className='w-5 h-5'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            fillRule='evenodd'
            d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
            clipRule='evenodd'></path>
        </svg>
      </div>
    </div>
  );
};

export default ErrorsBox;

