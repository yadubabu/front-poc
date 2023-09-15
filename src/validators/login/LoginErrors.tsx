import React from "react";

type Props = {
  msg: string | undefined;
};

const LoginErrors = (props: Props) => {
  return <div>{props.msg}</div>;
};

export default LoginErrors;
