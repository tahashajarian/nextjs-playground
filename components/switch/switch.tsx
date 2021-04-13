import React from "react";
import style from "./switch.module.scss";

interface Props {
  label: string;
  options: { title: string; value: "haghighi" | "hoghoughi" }[];
  value: "haghighi" | "hoghoughi";
  onchange: Function;
}

const Switch = (props: Props) => {
  return (
    <div className={style.switchContainer}>
      <span className={style.label}>{props.label}</span>
      <div className={style.options}>
        {props.options.map((option, index) => (
          <span
            className={`${style.option} ${
              props.value === option.value ? style.activeOption : ""
            }`}
            key={index}
            onClick={() => props.onchange(option.value)}
          >
            {option.title}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Switch;
