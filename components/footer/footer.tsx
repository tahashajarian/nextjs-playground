import React from "react";
import style from "./footer.module.scss";
import { pages } from "../layout/layout";
interface Props {
  pages: any[];
}

export const Footer = (props: Props) => {
  return (
    <footer className="my-10">
      <div className="">
        {/* <img className=""} src="/images/circle8.svg" />
        <img className=""} src="/images/circle8.svg" /> */}
      </div>
      <div className="">
        <div>
          {/*
          <ul>
            <span className="">تماس با ما</span>
            <li>
              <img src="/images/email.svg" />
              <span className={"text"}>info@etebareman.ir</span>
            </li>
            <li>
              <img src="/images/phone.svg" />
              <span className={"text"}>
                <span>۰۹۲۱-۳۳۴۴۵۵۰</span>
                <span>۰۲۱-۲۲۲۴۵۷۸۲</span> 
              </span>
            </li>
            <li>
              <img src="/images/phone.svg" />
              <span className={"text"}>
                 تهران. میدان آرژانتین. گاندی ۱ . انتهای خیابان. شرکت رتبه بندی و
                اعتبار سنجی اعتبار من 
              </span>
            </li>
          </ul>
        */}
        </div>
        <div>
          <legend className="">
            <img className="" src="/images/logo2.svg" />
            <img className="" src="/images/dots10.svg" />
            <img className="" src="/images/dots10.svg" />
          </legend>
          <div className="">
            <span>
              کلیه حقوق مادی و معنوی این وبسایت متعلق به سامانه اعتبار من بوده و
              هرگونه استفاده از مطالب آن غیر مجاز است
            </span>
            <span>© 2020-2021 Etebareman.ir. All rights reserved.</span>
          </div>
        </div>
        <div>
          {/* <ul>
            <span className="">نقشه سایت</span>
            {pages.map((page, index) => (
              <li key={index}>
                <span></span>
                <span className={"text"}>{page.title}</span>
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </footer>
  );
};
