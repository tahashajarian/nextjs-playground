import React from "react";
import Switch from "../../components/switch/switch";
import { routes } from "../../constants/routes";
import style from "./inquiry.module.scss";
import utils from "../../components/utils.module.scss";

const Inquiry = () => {
  return (
    <div className={style.inquiryContainer}>
      <div className={style.title}>
        <h2>دریافت گزارش اعتباری</h2>
      </div>
      <Switch />
      <div className={style.input}>
        <span>شماره ملی</span>
        <input placeholder="شماره ملی بدون خط تیره وارد نمایید" />
      </div>
      <div className={style.input}>
        <span>شماره تلفن همراه</span>
        <input placeholder="مثلا: 0912xxxxxxx" />
      </div>
      <div className={style.agreement}>
        <input type="checkbox" />
        <span>
          <a href={routes.rules}>قوانین اعتبار من</a>
          <span>را مطالعه نموده و می‌پذیرم</span>
        </span>
      </div>
      <div>
        <button className={`${utils.lgButtonPrimary} ${utils.shadowPrimary}`}>
          تایید و مشاهده هزینه گزارش
        </button>
      </div>
    </div>
  );
};

export default Inquiry;
