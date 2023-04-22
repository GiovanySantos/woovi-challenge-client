import React from "react";

interface IProps {
  children: JSX.Element;
  onClick?: () => void;
  className?: string;
}

const ButtonGeneric: React.FC<IProps> = (props) => {
  const { children, onClick, className } = props;

  return (
    <button
      className={`px-4 py-2 text-white rounded-lg bg-green hover:bg-dark_green ${className}`}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonGeneric;

