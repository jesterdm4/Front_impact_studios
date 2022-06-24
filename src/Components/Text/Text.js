import React from "react";

const Text = ({ category, children, ...rest }) => {
  if (category === "h1") {
    return <h1 {...rest}>{children}</h1>;
  }
  if (category === "h2") {
    return <h2 {...rest}>{children}</h2>;
  }
  if (category === "h3") {
    return <h3 {...rest}>{children}</h3>;
  }
  if (category === "h4") {
    return <h4 {...rest}>{children}</h4>;
  }
  if (category === "h5") {
    return <h5 {...rest}>{children}</h5>;
  }
  if (category === "h6") {
    return <h6 {...rest}>{children}</h6>;
  }

  return <p {...rest}>{children}</p>;
};

export default Text;
