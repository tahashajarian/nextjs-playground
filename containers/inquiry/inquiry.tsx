import React, { useEffect, useState } from "react";
import Switch from "../../components/switch/switch";
import { routes } from "../../constants/routes";
import style from "./inquiry.module.scss";
import utils from "../../components/utils.module.scss";

const Inquiry = () => {
  const [reportType, setReportType] = useState<"haghighi" | "hoghoughi">(
    "haghighi"
  );
  const handleChnageReportType = (reportType) => {
    setReportType(reportType);
  };
  useEffect(() => {
    console.log("report type changed => ", reportType);
  }, [reportType]);
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
