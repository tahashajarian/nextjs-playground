import React, { useEffect, useState } from "react";
import { staticRoutes } from "../../constants/routes";
import style from "./pre-payment.module.scss";

import Button from "../../components/button/button";
import axiosInstance from "../../utils/axiosInstance";
import { apies } from "../../constants/api";
import Spinner from "../../components/spinner/spinner";
import {
  useAppContext,
  StateInterface,
  useAppContextUpdate,
} from "../../context/state";
import { useRouter } from "next/router";
const PrePayment = () => {
  const [loading, setLoading] = useState(false);
  const state: StateInterface = useAppContext();
  const updateState = useAppContextUpdate();

  useEffect(() => {
    // if (!state.mobileNumber) redirectToHome(); TODO: remove this line
  }, [state]);
  const submitForm = (e) => {
    e.preventDefault();
    setLoading(true);
    axiosInstance
      .post(apies.payment, {
        paymentMethod,
        trackId: state.trackId,
      })
      .then((response) => {
        setLoading(false);
        if (response.data && response.data.statusCode === 200) {
          updateState({
            bankHashCode: response.data.data.bankHashCode,
          });
          document.location.href =
            apies.zarinpal + response.data.data.bankHashCode;
        }
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  const [paymentMethod, setPaymentMethod] = useState<0 | 1>(0);

  const handleChangepaymentMethod = (method) => {
    setPaymentMethod(method);
  };

  const route = useRouter();
  const redirectToInquiry = () => {
    route.push(staticRoutes.inquiry);
  };
  const redirectToHome = () => {
    route.push(staticRoutes.home);
  };

  return (
    <form
      className="flex flex-col justify-start p-4 pt-24 max-w-sm m-auto"
      onSubmit={submitForm}
    >
      <Spinner show={loading} />
      <div className="flex flex-col justify-start items-center text-brandPrimary-main mb-2">
        <h2 className="text-xl xl:text-2xl font-bold">دریافت گزارش اعتباری</h2>
      </div>
      <div className={"text-center mt-4 text-gray-500 text-sm"}>
        <div>
          درخواست شما برای شماره ملی
          <b> {state.nationalCode} </b>و شماره همراه
          <b> {state.mobileNumber} </b>
          {state.reportType === "hoghoughi" && (
            <span>
              و شماره ملی مدیر عامل
              <b> {state.companyNationalCode} </b>
            </span>
          )}
          ثبت شد.
        </div>
        <div>
          <span>خطایی وجود دارد؟</span>
          <span
            className="text-brandSecondary-main hover:underline cursor-pointer p-2 text-xs"
            onClick={redirectToInquiry}
          >
            اصلاح اطلاعات
          </span>
        </div>
      </div>
      <div className="border border-gray-300 rounded-md bg-gray-200 my-6 text-sm text-gray-600">
        <div className="p-2">
          <div className="w-full flex justify-center items-center p-2">
            <span className="w-full">مبلغ گزارش:</span>
            <span>
              <span className="text-brandPrimary-main p-2 text-xl">10,000</span>
              <span className="text-gray-500 text-sm">تومان</span>
            </span>
          </div>
          <div className="w-full flex justify-center items-center p-2">
            <span className="w-full">9% مالیات بر ارزش افزوده:</span>
            <span>
              <span className="p-2 text-gray-900 text-xl">0</span>
              <span className="text-gray-500 text-sm">تومان</span>
            </span>
          </div>
        </div>
        <hr className="border-gray-300" />
        <div className="py-3 px-2">
          <div className="w-full flex justify-center items-center p-2">
            <span className="w-full">مبلغ قابل پرداخت:</span>
            <span>
              <span className="text-brandSecondary-main p-2 text-xl font-bold">
                10,000
              </span>
              <span className="text-gray-500 text-sm">تومان</span>
            </span>
          </div>
        </div>
      </div>
      <div className="mt-2 flexcolumn">
        <span>انتخاب درگاه پرداخت</span>
        <div className="flexrow">
          <div
            data-id="0"
            onClick={() => handleChangepaymentMethod(0)}
            className={`broder-1 border-solid border-gray-400 w-12 h-12 flexrow cursor-pointer my-4 mx-6 rounded-md ${
              paymentMethod === 0
                ? "shadow-md  border-brandPrimary-main"
                : undefined
            }`}
          >
            <span className="w-full h-full bg-cover bg-zarin"></span>
          </div>
          {/* <div
            data-id="1"
            onClick={() => handleChangepaymentMethod(1)}
            className={`${style.paymentMethod} ${
              paymentMethod === 1 ? style.active : undefined
            }`}
          >
            <span className={style.sadad}></span>
          </div> */}
        </div>
      </div>
      <div className="w-full flexcolumn mt-6">
        <button className={`btn btn-primary-lg shadow-lg`}>
          انتقال به درگاه و پرداخت آنلاین
        </button>
        <span
          className="text-sm text-gray-600 mt-3 cursor-pointer hover:underline"
          onClick={redirectToHome}
        >
          انصراف و لغو پرداخت
        </span>
      </div>
    </form>
  );
};

export default PrePayment;
