import React from "react";
import style from "./otp.module.scss";
import { useRouter } from "next/router";
import Input from "../../components/input/input";
import utils from "../../components/utils.module.scss";

const Otp = ({ post }) => {
  const route = useRouter();
  const url = new URL("http://example" + route.asPath);
  const status = url.searchParams.get("status");
  const nationalCode = url.searchParams.get("nationalCode");
  const phoneNumber = url.searchParams.get("phoneNumber");
  console.log(status);

  return (
    <div className={style.container}>
      <div className={style.payment}>
        {status === "true" ? (
          <span className={style.success}>پرداخت شما با موفقیت انجام شد</span>
        ) : (
          <span className={style.fail}>پرداخت انجام نشد</span>
        )}
        <p>
          گزارش اعتباری برای شماره ملی
          <b> {nationalCode} </b>و شماره همراه
          <b> {phoneNumber} </b>
          آماده دریافت است لطفا کد یکبار مصرف که به شماره همراه ثبت شده ارسال
          شده در کادر زیر وارد نمایید سپس دکمه
          <b> دانلود گزارش اعتباری </b>
          را بزنید
        </p>
      </div>
      <div>
        <Input
          label={""}
          onChange={() => {}}
          placeholder={"کد یک بار مصرف را وارد کنید"}
          value={""}
          width={"400px"}
        />
      </div>
      <div>
        <span></span>
        <span></span>
      </div>
      <div className={style.submit}>
        <button className={`${utils.lgButtonPrimary} ${utils.shadowPrimary}`}>
          تایید و مشاهده هزینه گزارش
        </button>
      </div>
    </div>
  );
};

export default Otp;
