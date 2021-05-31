import React from "react";
import style from "./button.module.scss";
import utils from "../utils.module.scss";

interface Props {
  label: string;
  disabled?: boolean;
  type?: "button" | "submit";
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
      props.disabled ? "" : utils.shadowPrimary
    } ${props.disabled ? style.disabled : ""}`}
    type="submit"
    style={{ cursor: props.disabled ? "not-allowed" : "pointer" }}
    disabled={props.disabled}
  >
    {props.label}
  </button>
);

export default Button;
