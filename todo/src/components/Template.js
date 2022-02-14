import React from "react";

const Template = ({ children }) => {
  return (
    <flagment>
      <div>오늘 할 일 (0)</div>
      <div>{children}</div>
    </flagment>
  );
};

export default Template;
