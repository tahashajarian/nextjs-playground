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

  const handleChangeNationalCode = (e) => {
    setNationalCode(e.target.value);
  };

  return (
    <div className={style.inquiryContainer}>
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
        />
      </div>
      {reportType === "hoghoughi" && (
        <div className={style.input}>
          <Input
            label={"شماره ملی مدیر عامل"}
            onChange={() => {}}
            placeholder="شماره ملی بدون خط تیره وارد نمایید"
            value={""}
            width={"400px"}
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
          onChange={() => {}}
          placeholder="مثلا: 0912xxxxxxx"
          value={""}
          width={"400px"}
          helperText={
            "دقت کنید شماره تلفن همراه باید متعلق به شماره ملی مندرج باشد."
          }
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
        <button className={`${utils.lgButtonPrimary} ${utils.shadowPrimary}`}>
          تایید و مشاهده هزینه گزارش
        </button>
      </div>
    </div>
  );
};

export default Inquiry;
