import React from "react";
import style from "./footer.module.scss";
import Image from "next/image";

interface Props {
  pages: any[];
}

export const Footer = (props: Props) => {
  return (
    <footer className={style.footerContainer}>
      <div className={style.footer}>
        <div>
          <ul>
            <span className={style.title}>تماس با ما</span>
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
        <div>
          <legend className={style.legend}>
            <Image src="/images/icon.png" height={60} width={60} alt="logo" />
          </legend>
          <ul>
            <span className={style.title}>تماس با ما</span>
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
        <div>
          <ul>
            <span className={style.title}>نقشه سایت</span>
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
      </div>
    </footer>
  );
};
