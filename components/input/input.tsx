import React, { ChangeEventHandler } from "react";
import style from "./input.module.scss";

interface Props {
  placeholder: string;
  value?: any;
  onChange?: ChangeEventHandler;
  label: string;
  width: string;
  helperText?: string;
  name?: string;
  error?: boolean;
  errorText?: string;
  type: "number" | "text";
}

const Input = (props: Props) => {
  return (
    <div className={style.inputWrapper} style={{ width: props.width }}>
      <label className={style.label}>{props.label}</label>
      <input
        className={`${style.input} ${props.error ? style.error : ""}`}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        name={props.name}
        type={props.type}
      />
      {props.error && (
        <div className={style.errorText}>
          <img src="/images/information-error.svg" />
          <span>{props.errorText}</span>
        </div>
      )}
      {props.helperText && (
        <div className={style.helperText}>
          <img src="/images/information.svg" />
          <span>{props.helperText}</span>
        </div>
      )}
    </div>
  );
};

export default Input;
