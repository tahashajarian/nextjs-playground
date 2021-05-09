import React, { useEffect, useState } from "react";
import style from "./otp.module.scss";
import { useRouter } from "next/router";
import Input from "../../components/input/input";
import utils from "../../components/utils.module.scss";
import Link from "next/link";
import { staticRoutes } from "../../constants/routes";

const Otp = () => {
  const timeWait = 120;
  const [timer, setTimer] = useState(timeWait);
  const [status, setStatus] = useState<any>();
  const [nationalCode, setNationalCode] = useState<any>();
  const [phoneNumber, setphoneNumber] = useState<any>();
  const route = useRouter();
  useEffect(() => {
    const url = new URL("http://example" + route.asPath);
    setStatus(url.searchParams.get("status"));
    setNationalCode(url.searchParams.get("nationalCode"));
    setphoneNumber(url.searchParams.get("phoneNumber"));
  }, []);

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
    }
  }, [timer]);

  const resend = () => {
    setTimer(timeWait);
  };

  return (
    <div className={style.container}>
      <div className={style.payment}>
        {status === "true" ? (
          <span className={style.success}>پرداخت شما با موفقیت انجام شد</span>
        ) : (
          <span className={style.fail}>پرداخت انجام نشد</span>
        )}
        {status !== "true" ? (
          <p></p>
        ) : (
          <p>
            گزارش اعتباری برای شماره ملی
            <b> {nationalCode} </b>و شماره همراه
            <b> {phoneNumber} </b>
            آماده دریافت است لطفا کد یکبار مصرف که به شماره همراه ثبت شده ارسال
            شده در کادر زیر وارد نمایید سپس دکمه
            <b> دانلود گزارش اعتباری </b>
            را بزنید
          </p>
        )}
      </div>
      {status === "true" ? (
        <div>
          <div>
            <Input
              label={""}
              onChange={() => {}}
              placeholder={"کد یک بار مصرف را وارد کنید"}
              value={""}
              width={"400px"}
              type="number"
            />
          </div>
          <div className={style.timer}>
            {timer > 0 ? (
              <div>{`0${Math.trunc(timer / 60)}:${
                timer % 60 < 10 ? "0" + (timer % 60) : timer % 60
              }`}</div>
            ) : (
              <div>
                <span>کد را دریافت نکردید؟</span>
                <span className={style.resend} onClick={resend}>
                  ارسال مجدد
                </span>
              </div>
            )}
          </div>
          <div className={style.submit}>
            <button
              className={`${utils.lgButtonPrimary} ${utils.shadowPrimary}`}
            >
              ارسال
            </button>
          </div>
        </div>
      ) : (
        <Link href={staticRoutes.home}>
          <button className={`${utils.lgButtonPrimary} ${utils.shadowPrimary}`}>
            بازگشت به صفحه اصلی{" "}
          </button>
        </Link>
      )}
    </div>
  );
};

export default Otp;
