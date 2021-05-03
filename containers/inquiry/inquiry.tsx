import React, { useEffect, useState } from "react";
import Switch from "../../components/switch/switch";
import { routes } from "../../constants/routes";
import style from "./inquiry.module.scss";
import utils from "../../components/utils.module.scss";
import Input from "../../components/input/input";

const Inquiry = () => {
  const [reportType, setReportType] = useState<"haghighi" | "hoghoughi">(
    "haghighi"
  );
  const handleChnageReportType = (reportType) => {
    setReportType(reportType);
  };

  const [companyNationalCode, setCompanyNationalCode] = useState();
  const [nationalCode, setNationalCode] = useState();
  const [mobileNumber, setMobileNumber] = useState();

  const [companyNationalCodeError, setCompanyNationalCodeError] = useState(
    false
  );
  const [nationalCodeError, setNationalCodeError] = useState(false);
  const [mobileNumberError, setMobileNumberError] = useState(false);
  const [
    companyNationalCodeErrorText,
    setCompanyNationalCodeErrorText,
  ] = useState("");
  const [nationalCodeErrorText, setNationalCodeErrorText] = useState("");
  const [mobileNumberErrorText, setMobileNumberErrorText] = useState("");

  const handleChangeNationalCode = (e) => {
    setNationalCode(e.target.value);
    setNationalCodeError(false);
  };

  const handleChangeCompanyNationCode = (e) => {
    setCompanyNationalCode(e.target.value);
    setCompanyNationalCodeError(false);
  };

  const handleChangeMobileNumber = (e) => {
    setMobileNumber(e.target.value);
    setMobileNumberError(false);
  };

  const submitForm = (e) => {
    setMobileNumberErrorText("با این شماره وارد کردنت این چه مشاره ایه آخه...");
    setMobileNumberError(true);
    e.preventDefault();
  };

  return (
    <form className={style.inquiryContainer} onSubmit={submitForm}>
      <div className={style.title}>
        <h2>دریافت گزارش اعتباری</h2>
      </div>
      <Switch
        label={"نوع گزارش خود را انتخاب کنید"}
        options={[
          { title: "گزارش شخص حقیقی", value: "haghighi" },
          { title: "گزارش شخص حقوقی", value: "hoghoughi" },
        ]}
        value={reportType}
        onchange={handleChnageReportType}
      />
      <div className={style.input}>
        <Input
          label={reportType === "haghighi" ? "شماره ملی" : "شناسه ملی شرکت"}
          onChange={handleChangeNationalCode}
          placeholder={"شماره ملی بدون خط تیره وارد نمایید"}
          value={nationalCode}
          width={"400px"}
          error={nationalCodeError}
          errorText={nationalCodeErrorText}
        />
      </div>
      {reportType === "hoghoughi" && (
        <div className={style.input}>
          <Input
            label={"شماره ملی مدیر عامل"}
            onChange={handleChangeCompanyNationCode}
            placeholder="شماره ملی بدون خط تیره وارد نمایید"
            value={companyNationalCode}
            width={"400px"}
            error={companyNationalCodeError}
            errorText={companyNationalCodeErrorText}
          />
        </div>
      )}
      <div className={style.input}>
        <Input
          label={
            reportType === "haghighi"
              ? "شماره تلفن همراه"
              : " شماره تلفن همراه مدیر عامل"
          }
          onChange={handleChangeMobileNumber}
          placeholder="مثلا: 0912xxxxxxx"
          value={mobileNumber}
          width={"400px"}
          error={mobileNumberError}
          helperText={
            "دقت کنید شماره تلفن همراه باید متعلق به شماره ملی مندرج باشد."
          }
          errorText={mobileNumberErrorText}
        />
      </div>
      <div className={style.agreement}>
        <input type="checkbox" />
        <span></span>
        <span>
          <a href={routes.rules}>قوانین اعتبار من</a>
          &nbsp;
          <span>را مطالعه نموده و می‌پذیرم</span>
        </span>
      </div>
      <div className={style.submit}>
        <button
          className={`${utils.lgButtonPrimary} ${utils.shadowPrimary}`}
          type="submit"
        >
          تایید و مشاهده هزینه گزارش
        </button>
      </div>
    </form>
  );
};

export default Inquiry;
