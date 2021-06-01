import React from "react";
import style from "./button.module.scss";
import utils from "../utils.module.scss";

interface Props {
  label: string;
  disabled?: boolean;
  style?: any;
  onclick?: any;
  type?: "button" | "submit";
  noShadow?: boolean;
  className:
    | "lgButtonPrimary"
    | "lgButtonSecondry"
    | "lgButtonPrimaryOutline"
    | "lgButtonSecondryOutline"
    | "mdButtonPrimary"
    | "mdButtonSecondry"
    | "mdButtonPrimaryOutline"
    | "mdButtonSecondryOutline"
    | "smButtonPrimary";
}

const Button = (props: Props) => (
  <button
    className={`${style.button} ${utils[props.className]} ${
      utils.shadowPrimary
    } ${props.disabled || props.noShadow ? utils.noShadow : ""} ${
      props.disabled ? style.disabled : ""
    }`}
    type="submit"
    style={{
      cursor: props.disabled ? "not-allowed" : "pointer",
      ...props.style,
    }}
    disabled={props.disabled}
    onClick={props.onclick}
  >
    {props.label}
  </button>
);

export default Button;
