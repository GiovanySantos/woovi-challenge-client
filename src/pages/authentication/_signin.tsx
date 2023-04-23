import React from "react";
import { EnumAuthPages } from ".";

interface IProps {
  setPageSwitcher: React.Dispatch<React.SetStateAction<EnumAuthPages>>;
}

const Signin: React.FC<IProps> = (props) => {
  const {} = props;

  return (
    <div>
      <h1>Sign in</h1>
    </div>
  );
};

export default Signin;

