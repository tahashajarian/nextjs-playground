import React, { useEffect, useState } from "react";
import style from "./otp.module.scss";
import { useRouter } from "next/router";
import Input from "../../components/input/input";
import utils from "../../components/utils.module.scss";
import Link from "next/link";
import { staticRoutes } from "../../constants/routes";
import Spinner from "../../components/spinner/spinner";
import axiosInstance from "../../utils/axiosInstance";
import { apies } from "../../constants/api";
import Button from "../../components/button/button";
import { downloadFile } from "../../utils/download";

const Otp = () => {
  const timeWait = 120;
  const [timer, setTimer] = useState(timeWait);
  const [hashCode, setHashCode] = useState<any>();
  const [nationalCode, setNationalCode] = useState<any>();
  const [mobileNumber, setMobileNumber] = useState<any>();
  const [companyNationalCode, setCompanyNationalCode] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");

  const route = useRouter();
  useEffect(() => {
    const url = new URL("http://example" + route.asPath);
    setHashCode(url.searchParams.get("hashCode"));
    setNationalCode(url.searchParams.get("nationalCode"));
    setMobileNumber(url.searchParams.get("mobileNumber"));
    setCompanyNationalCode(url.searchParams.get("companyNationalCode"));
  }, []);

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
    }
  }, [timer]);

  const resend = () => {
    setLoading(true);
    axiosInstance
      .post(apies.renewToken(hashCode), {})
      .then((response) => {
        setLoading(false);
        if (response.data) {
          setTimer(timeWait);
        }
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  const submitForm = (e) => {
    e.preventDefault();
    setLoading(true);
    axiosInstance
      .post(
        apies.generateReport(hashCode),
        {
          otp,
        },
        {
          responseType: "blob",
        }
      )
      .then((response) => {
        setLoading(false);
        if (response.data) {
          downloadFile(
            response.data,
            `report-${nationalCode}-${new Date().getTime()}.pdf`
          );
        }
        route.push("/");
      })
      .catch((err) => {
        setLoading(false);
      });
    console.log("for submited");
  };

  return (
    <form className={style.container} onSubmit={submitForm}>
      <Spinner show={loading} />
      <div className={style.payment}>
        {hashCode ? (
          <span className={style.success}>پرداخت شما با موفقیت انجام شد</span>
        ) : (
          <span className={style.fail}>پرداخت انجام نشد</span>
        )}
        {hashCode ? (
          <p>
            گزارش اعتباری برای شماره ملی
            <b> {nationalCode} </b>و شماره همراه
            <b> {mobileNumber} </b>
            {companyNationalCode
              ? ` و شماره ملی مدیر عامل ${companyNationalCode} `
              : ""}
            آماده دریافت است لطفا کد یکبار مصرف که به شماره همراه ثبت شده ارسال
            شده در کادر زیر وارد نمایید سپس دکمه
            <b> دانلود گزارش اعتباری </b>
            را بزنید
          </p>
        ) : (
          <p></p>
        )}
      </div>
      {hashCode ? (
        <div>
          <div>
            <Input
              label={""}
              onChange={(e: any) => setOtp(e.target.value)}
              placeholder={"کد یک بار مصرف را وارد کنید"}
              value={otp}
              width={"400px"}
              type="number"
            />
          </div>
          <div className={style.timer}>
            {timer > 0 ? (
              <div>
                {`0${Math.trunc(timer / 60)}:${
                  timer % 60 < 10 ? "0" + (timer % 60) : timer % 60
                }`}{" "}
                <span style={{ color: "silver" }}>ارسال مجدد کد</span>
              </div>
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
            {/* <button
              className={`${utils.lgButtonPrimary} ${utils.shadowPrimary}`}
              type="submit"
              disabled={!otp}
            >
              ارسال کد و دریافت گزارش
            </button> */}
            <Button
              label="ارسال کد و دریافت گزارش"
              disabled={!otp}
              className={`lgButtonPrimary`}
              type="submit"
            />
          </div>
        </div>
      ) : (
        <Link href={staticRoutes.home}>
          <button
            className={`${utils.lgButtonPrimary} ${utils.shadowPrimary}`}
            type="button"
          >
            بازگشت به صفحه اصلی{" "}
          </button>
        </Link>
      )}
    </form>
  );
};

export default Otp;
