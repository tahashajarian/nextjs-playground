import React from "react";
import style from "./spinner.module.scss";

interface Props {
  show: boolean;
}

const Spinner = (props: Props) => {
  return props.show ? (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-gray-500 bg-opacity-50">
      <div className="animate-spin">
        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#fff"
        >
          <g fill="none" fill-rule="evenodd">
            <g transform="translate(1 1)" stroke-width="2">
              <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
              <path d="M36 18c0-9.94-8.06-18-18-18"></path>
            </g>
          </g>
        </svg>
      </div>
    </div>
  ) : null;
};

export default Spinner;
