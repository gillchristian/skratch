import React from "react";

const withProps = (props = {}) => Component => ({ children, ...rest }) =>
  <Component {...props} {...rest}>
    {children}
  </Component>;

export default withProps;
