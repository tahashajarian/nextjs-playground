import React from "react";
import style from "./header.module.scss";
import utils from "../../styles/utils.module.scss";
import Link from "next/link";
import Image from "next/image";
interface Props {
  pages: any[];
}

const Header = (props: Props) => (
  <header className={style.header}>
    <span className={style.icon}>
      <Image
        src="/images/logo.svg" // Route of the image file
        height={50} // Desired size with correct aspect ratio
        width={50} // Desired size with correct aspect ratio
        alt="Your Name"
      />
      <span>اعتبار من</span>
    </span>
    <ul className={style.menus}>
      {props.pages.map((page, index) => (
        <li key={index}>
          <Link href={page.path}>
            <a className={utils.navLink}>{page.title}</a>
          </Link>
        </li>
      ))}
    </ul>
    <div className={style.loginActions}>
      <ul>
        <li className={utils.mdButtonPrimaryOutline}>ورود به سامانه</li>
        <li className={utils.mdButtonSecondry}>عضویت در سامانه</li>
      </ul>
    </div>
  </header>
);

export default Header;
