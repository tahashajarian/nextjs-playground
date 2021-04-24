import React, { ChangeEventHandler } from "react";
import style from "./input.module.scss";

interface Props {
  placeholder: string;
  value: any;
  onChange: ChangeEventHandler;
  label: string;
  width: string;
}

const Input = (props: Props) => {
  return (
    <div className={style.inputWrapper} style={{ width: props.width }}>
      <label className={style.label}>{props.label}</label>
      <input
        className={style.input}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
