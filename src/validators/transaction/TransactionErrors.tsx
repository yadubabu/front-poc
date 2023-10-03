import React from "react";

type Props = {
  msg: string | undefined;
};

const TransactionErrors = (props: Props) => {
  return <div>{props.msg}</div>;
};

export default TransactionErrors;
