import React from "react";

interface IProps {
  children: JSX.Element;
  onClick?: () => void;
  className?: string;
  dataTestId: string;
}

const ButtonGeneric: React.FC<IProps> = (props) => {
  const { children, onClick, className, dataTestId } = props;

  return (
    <button
      data-testid={dataTestId}
      className={`px-4 py-2 text-white rounded-md bg-green hover:bg-dark_green ${className}`}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonGeneric;

