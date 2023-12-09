// Copyright Ayush Singh 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaayush/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import styles from "./Button.module.scss";
// @ts-ignore
import PropTypes from "prop-types";
import React, {useEffect, useRef, useState} from "react";

export enum ButtonTypes {
  PRIMARY = "primary",
  OUTLINE = "outline",
  WHITE = "white",
}

const Button = ({
  type,
  onClick = () => {},
  name,
  href,
  classes = "",
  otherProps,
  isTip,
}: {
  type: ButtonTypes;
  onClick?: () => void;
  name: string;
  href?: string;
  classes?: string;
  otherProps?: Record<string, string>;
  isTip?:boolean;
}) => {
  const buttonClasses =
    "py-2 px-7 font-medium rounded text-base md:text-xl tracking-wide link duration-300 flex items-center";
  const [email,setEmail] = useState(name)

  const changeText = () => {
    email === name ? setEmail('java_s@qq.com') : setEmail(name)
  }

  return (
    <a
      {...otherProps}
      onClick={ isTip ? changeText : onClick}
      href={href}
      className={`${getButtonTypeStyles(type)} ${buttonClasses} ${classes}` }
    >
      {isTip ? email : name}
    </a>
  );

  function getButtonTypeStyles(type: ButtonTypes) {
    return type === ButtonTypes.PRIMARY
      ? styles.primary
      : type === ButtonTypes.WHITE
        ? styles.white
        : styles.outline;
  }
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  name: PropTypes.string.isRequired,
  href: PropTypes.string,
  classes: PropTypes.string,
};

export default Button;
