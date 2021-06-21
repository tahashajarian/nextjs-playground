import React, { useEffect, useState } from "react";
import Switch from "../../components/switch/switch";
import { staticRoutes } from "../../constants/routes";
import style from "./inquiry.module.scss";
import utils from "../../components/utils.module.scss";
import Input from "../../components/input/input";
import Button from "../../components/button/button";
import {
  checkMelliCode,
  checkMobile,
  checkMelliShenase,
} from "../../utils/validate";
import axiosInstance from "../../utils/axiosInstance";
import { apies } from "../../constants/api";
import Spinner from "../../components/spinner/spinner";
import {
  useAppContextUpdate,
  useAppContext,
  StateInterface,
} from "../../context/state";
import { useRouter } from "next/router";
import { useToasts } from "react-toast-notifications";
const Inquiry = () => {
  const [reportType, setReportType] =
    useState<"haghighi" | "hoghoughi">("haghighi");
  const handleChnageReportType = (reportType) => {
    setReportType(reportType);
  };

  const state: StateInterface = useAppContext();
  const { addToast } = useToasts();
  const [companyNationalCode, setCompanyNationalCode] = useState(
    state.companyNationalCode
  );
  const [nationalCode, setNationalCode] = useState(state.nationalCode);
  const [mobileNumber, setMobileNumber] = useState(state.mobileNumber);

  const [companyNationalCodeError, setCompanyNationalCodeError] =
    useState(false);
  const [nationalCodeError, setNationalCodeError] = useState(false);
  const [mobileNumberError, setMobileNumberError] = useState(false);

  const [disableSubmit, setDisableSubmit] = useState<boolean>(true);
  const [loading, setLoading] = useState(false);

  const [acceptedRules, setAcceptedRules] = useState(false);
  const [acceptedRulesError, setAcceptedRulesError] = useState(false);

  useEffect(() => {
    console.log("disabled submit => ", disableSubmit);
  }, [disableSubmit]);

  useEffect(() => {
    if (reportType === "haghighi") {
      if (nationalCode && mobileNumber) setDisableSubmit(false);
      else setDisableSubmit(true);
    } else {
      if (nationalCode && mobileNumber && companyNationalCode)
        setDisableSubmit(false);
      else setDisableSubmit(true);
    }
  }, [companyNationalCode, nationalCode, mobileNumber, reportType]);

  const handleChangeNationalCode = (e) => {
    const value = e.target.value;
    setNationalCode(value);
    setNationalCodeError(false);
    updateState({
      nationalCode: value,
    });
  };

  const updateState = useAppContextUpdate();

  const route = useRouter();
  const redircetToPrePaymentPage = () => {
    route.push(staticRoutes["pre-payment"]);
  };

  const handleChangeCompanyNationCode = (e) => {
    const value = e.target.value;
    setCompanyNationalCode(value);
    setCompanyNationalCodeError(false);
    updateState({
      companyNationalCode: value,
    });
  };

  const handleChangeMobileNumber = (e) => {
    const value = e.target.value;
    setMobileNumber(value);
    setMobileNumberError(false);
    updateState({
      mobileNumber: value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    let hasError: boolean = false;
    if (!acceptedRules) {
      setAcceptedRulesError(true);
      hasError = true;
    }
    if (reportType === "haghighi") {
      if (!checkMelliCode(nationalCode)) {
        setNationalCodeError(true);
        hasError = true;
      }
      if (!checkMobile(mobileNumber)) {
        setMobileNumberError(true);
        hasError = true;
      }
      if (!hasError) {
        setLoading(true);
        axiosInstance
          .post(apies.paymentRequest, {
            mobileNumber,
            nationalCode,
          })
          .then((response) => {
            setLoading(false);
            if (response.data && response.data.statusCode === 200) {
              updateState({
                mobileNumber,
                nationalCode,
                reportType,
                trackId: response.data.data,
              });
              redircetToPrePaymentPage();
            }
            if (response.data.message) {
              addToast(response.data.message, {
                appearance: "info",
                autoDismiss: true,
              });
            }
          })
          .catch((error) => {
            setLoading(false);
          });
      }
    } else {
      if (!checkMelliShenase(nationalCode)) {
        setNationalCodeError(true);
        hasError = true;
      }
      if (!checkMelliCode(companyNationalCode)) {
        setCompanyNationalCodeError(true);
        hasError = true;
      }
      if (!checkMobile(mobileNumber)) {
        setMobileNumberError(true);
        hasError = true;
      }
      if (!hasError) {
        setLoading(true);
        axiosInstance
          .post(apies.paymentRequest, {
            mobileNumber,
            nationalCode,
            companyNationalCode,
          })
          .then((response) => {
            setLoading(false);
            if (response.data && response.data.statusCode === 200) {
              updateState({
                mobileNumber,
                nationalCode,
                reportType,
                companyNationalCode,
                trackId: response.data.data,
              });
              redircetToPrePaymentPage();
            }
            if (response.data.message) {
              addToast(response.data.message, {
                appearance: "info",
                autoDismiss: true,
              });
            }
          })
          .catch((error) => {
            setLoading(false);
          });
      }
    }
  };

  const onchangeAcceptedRuls = (e) => {
    const value = e.target.checked;
    setAcceptedRules(value);
    setAcceptedRulesError(false);
  };

  const redirectToRulesPage = () => {
    route.push(staticRoutes.rules);
  };

  return (
    <form className={style.inquiryContainer} onSubmit={submitForm}>
      <Spinner show={loading} />
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
          errorText={`${
            reportType === "haghighi" ? "شماره ملی" : "شناسه ملی شرکت"
          } اشتباه است`}
          type="number"
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
            errorText={"شماره ملی اشتباه است"}
            type="number"
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
          errorText={"شماره تلفن همراه اشتباه است"}
          type="number"
        />
      </div>
      <div className={style.agreement}>
        <input
          type="checkbox"
          checked={acceptedRules}
          onChange={onchangeAcceptedRuls}
        />
        <span></span>
        <span>
          <a className={style.link} onClick={redirectToRulesPage}>
            قوانین اعتبار من
          </a>
          &nbsp;
          <span>را مطالعه نموده و می‌پذیرم</span>
        </span>
        {acceptedRulesError && (
          <div className={style.errorText}>
            <img src="/images/information-error.svg" />
            <span>انتخاب این فیلد الزامی است</span>
          </div>
        )}
      </div>
      <div className={style.submit}>
        <Button
          label="تایید و مشاهده هزینه گزارش"
          disabled={disableSubmit}
          className={`lgButtonPrimary`}
        />
      </div>
    </form>
  );
};

export default Inquiry;
