import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Input from "../../components/input/input";
import Link from "next/link";
import { staticRoutes } from "../../constants/routes";
import Spinner from "../../components/spinner/spinner";
import axiosInstance from "../../utils/axiosInstance";
import { apies } from "../../constants/api";
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
      .get(apies.renewToken(hashCode), {})
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
        apies.generateReportPdf(hashCode),
        {
          otp,
        },
        {
          responseType: "blob",
        }
      )
      .then((response) => {
        setLoading(false);
        if (response.data.statusCode) {
          console.log(
            "response genarate report have status code then is not pdf"
          );
        } else if (response.data) {
          const blob = new Blob([response.data]);
          downloadFile(
            response.data,
            `report-${nationalCode}-${new Date().getTime()}.pdf`
          );
          route.push("/");
        }
      })
      .catch((err) => {
        setLoading(false);
      });
    console.log("for submited");
  };

  return (
    <form
      className="flex flex-col justify-start p-4 pt-24 max-w-sm m-auto"
      onSubmit={submitForm}
    >
      <Spinner show={loading} />
      <div className="my-6 text-center">
        {hashCode ? (
          <span className="text-brandSecondary-main">
            پرداخت شما با موفقیت انجام شد
          </span>
        ) : (
          <span className="text-red-500">پرداخت انجام نشد</span>
        )}
        {hashCode ? (
          <p className="text-justify my-6 text-md text-gray-600">
            گزارش اعتباری برای شماره ملی
            <b className="m-2"> {nationalCode} </b>و شماره همراه
            <b className="m-2"> {mobileNumber} </b>
            {companyNationalCode
              ? ` و شماره ملی مدیر عامل ${companyNationalCode} `
              : ""}
            آماده دریافت است لطفا کد یکبار مصرف که به شماره همراه ثبت شده ارسال
            شده در کادر زیر وارد نمایید سپس دکمه
            <b className="m-2"> دانلود گزارش اعتباری </b>
            را بزنید
          </p>
        ) : (
          <p></p>
        )}
      </div>
      {hashCode ? (
        <div className="flexcolumn">
          <div className="w-full">
            <Input
              label={""}
              onChange={(e: any) => setOtp(e.target.value)}
              placeholder={"کد یک بار مصرف را وارد کنید"}
              value={otp}
              type="number"
            />
          </div>
          <div className="py-2 text-gray-500 text-sm">
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
                <span
                  className="text-brandPrimary-main px-2 cursor-pointer hover:underline"
                  onClick={resend}
                >
                  ارسال مجدد
                </span>
              </div>
            )}
          </div>
          <div className="mt-12 xl:mt-16">
            <button className={`btn btn-primary-lg shadow-lg`} type="submit">
              ارسال کد و دریافت گزارش
            </button>
          </div>
        </div>
      ) : (
        <Link href={staticRoutes.home}>
          <button className={`btn btn-secondray-lg shadow-lg`} type="button">
            بازگشت به صفحه اصلی{" "}
          </button>
        </Link>
      )}
    </form>
  );
};

export default Otp;
