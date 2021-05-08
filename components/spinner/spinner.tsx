import React from "react";
import style from "./spinner.module.scss";

interface Props {
  show: boolean;
}

const Spinner = (props: Props) => {
  return props.show ? (
    <div className={style.loaderContainer}>
      <div className={style.loader}></div>
    </div>
  ) : null;
};

export default Spinner;
