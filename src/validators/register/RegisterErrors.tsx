import React from "react";

type Props = {
  msg: string | undefined;
};

const RegisterErrors = (props: Props) => {
  return <div>{props.msg}</div>;
};

export default RegisterErrors;
