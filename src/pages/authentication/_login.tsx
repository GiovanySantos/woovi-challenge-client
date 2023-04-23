import React from "react";
import { EnumAuthPages } from ".";

interface IProps {
  setPageSwitcher: React.Dispatch<React.SetStateAction<EnumAuthPages>>;
}

const Login: React.FC<IProps> = (props) => {
  const {} = props;

  return (
    <div>
      <h1>Login </h1>
    </div>
  );
};

export default Login;

