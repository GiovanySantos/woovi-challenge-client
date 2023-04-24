import React from "react";

interface IProps {
  children: JSX.Element;
  onClick?: () => void;
  className?: string;
  dataTestId: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
}

const ButtonGeneric: React.FC<IProps> = (props) => {
  const { children, onClick, className, dataTestId, type, disabled } = props;

  return (
    <button
      disabled={disabled}
      type={type}
      data-testid={dataTestId}
      className={`disabled:bg-slate-400 px-4 py-2 text-white rounded-md bg-green hover:bg-dark_green ${className}`}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonGeneric;

