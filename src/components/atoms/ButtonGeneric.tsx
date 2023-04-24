import React from "react";
import { SpinnerSVG } from "@/assets/SpinnerSVG";

interface IProps {
  children: JSX.Element;
  onClick?: () => void;
  className?: string;
  dataTestId: string;
  disabled?: boolean;
  isLoading?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
}

const ButtonGeneric: React.FC<IProps> = (props) => {
  const {
    children,
    onClick,
    className,
    dataTestId,
    type,
    disabled,
    isLoading,
  } = props;

  return (
    <button
      disabled={disabled || isLoading}
      type={type}
      data-testid={dataTestId}
      className={`disabled:bg-dark_green px-4 py-2 text-white rounded-md bg-green hover:bg-dark_green ${className}`}
      onClick={onClick}>
      {isLoading ? <SpinnerSVG /> : children}
    </button>
  );
};

export default ButtonGeneric;

