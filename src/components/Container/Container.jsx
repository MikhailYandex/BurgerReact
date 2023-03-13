import React from "react";
import _ from "./Container.module.css";
import classNames from "classnames";

export const Container = ({ children, className }) => {
  return <div className={classNames(_.container, className)}>{children}</div>;
};
