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
    <div className="select-none">
      <span className="text-gray-500">{props.label}</span>
      <div className="bg-gray-200 rounded-full mx-0 mt-10 mb-20 text-gray-500 text-md h-14 flex flex-row justify-center items-center">
        {props.options.map((option, index) => (
          <span
            className={`transition-all h-full w-1/2 px-8 py-4 whitespace-nowrap cursor-pointer flex justify-center items-center rounded-full ${
              props.value === option.value
                ? "text-white bg-brandSecondary-main shadow-md"
                : ""
            }`}
            key={index}
            onClick={() => props.onchange(option.value)}
          >
            {""}
            {option.title}{" "}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Switch;
