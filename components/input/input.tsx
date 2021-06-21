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
    <div style={{ width: props.width }}>
      <label className="block text-gray-500 mb-2 text-md">{props.label}</label>
      <input
        className={`w-full rounded-full h-12 px-6 outline-none border border-gray-400 ${
          props.error ? "text-red-500 border-red-500" : ""
        }`}
        value={props.value ? props.value : ""}
        onChange={props.onChange}
        placeholder={props.placeholder}
        name={props.name}
        type={props.type}
      />
      {props.error && (
        <div className="text-red-500 text-sm flex pt-4">
          <img
            className="pl-2 w-7 text-red-500"
            src="/images/information-error.svg"
          />
          <span>{props.errorText}</span>
        </div>
      )}
      {props.helperText && (
        <div className="text-gray-500 text-sm flex pt-2">
          <img className="pl-2 w-7" src="/images/information.svg" />
          <span>{props.helperText}</span>
        </div>
      )}
    </div>
  );
};

export default Input;
