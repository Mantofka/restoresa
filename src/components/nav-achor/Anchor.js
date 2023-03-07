import React from "react";
import { Link } from "react-router-dom";

const Anchor = ({ children, href, ...restProps }) => {
  return <Link to={href ? href : "/"} {...restProps} style={{textDecoration: 'none'}}>{children}</Link>;
};

export default Anchor;
