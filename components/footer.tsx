import React from "react";
import style from "./footer.module.scss";

interface Props {
  pages: any[];
}

export const Footer = (props: Props) => {
  return (
    <footer>
      <div>
        <ul>
          <span className="title">تماس با ما</span>
          <li>
            <span>icon</span>
            <span className={"text"}>alkdjflaksdjfalsdfjsl;dfj</span>
          </li>
          <li>
            <span>icon</span>
            <span className={"text"}>alkdjflaksdjfalsdfjsl;dfj</span>
          </li>
          <li>
            <span>icon</span>
            <span className={"text"}>alkdjflaksdjfalsdfjsl;dfj</span>
          </li>
        </ul>
      </div>
    </footer>
  );
};
