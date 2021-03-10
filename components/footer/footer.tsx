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
            <img className={style.icon} src="/images/logo2.svg" />
            <img className={style.dotsRight} src="/images/dots10.svg" />
            <img className={style.dotsLeft} src="/images/dots10.svg" />
          </legend>
          <div className={style.copyRight}>
            <span>
              کلیه حقوق مادی و معنوی این وبسایت متعلق به سامانه اعتبار من بوده و
              هرگونه استفاده از مطالب آن غیر مجاز است
            </span>
            <span>© 2020-2021 Etebareman.ir. All rights reserved.</span>
          </div>
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
