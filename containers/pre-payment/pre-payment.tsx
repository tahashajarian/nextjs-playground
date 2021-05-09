import React, { useEffect, useState } from "react";
import { staticRoutes } from "../../constants/routes";
import style from "./pre-payment.module.scss";

import Button from "../../components/button/button";
import axiosInstance from "../../utils/axiosInstance";
import { apies } from "../../constants/api";
import Spinner from "../../components/spinner/spinner";
import { useAppContext, StateInterface } from "../../context/state";
import { useRouter } from "next/router";
const PrePayment = () => {
  const [loading, setLoading] = useState(false);
  const state: StateInterface = useAppContext();
  useEffect(() => {
    // if (!state.mobileNumber) redirectToHome();
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
    <form className={style.prePaymentContainer} onSubmit={submitForm}>
      <Spinner show={loading} />
      <div className={style.title}>
        <h2>دریافت گزارش اعتباری</h2>
      </div>
      <div className={style.description}>
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
          <span className={style.change} onClick={redirectToInquiry}>
            اصلاح اطلاعات
          </span>
        </div>
      </div>
      <div className={style.price}>
        <div>
          <div>
            <span className={style.titleSpan}>مبلغ گزارش:</span>
            <span>
              <span className={style.pricePrimary}>10,000</span>
              <span>تومان</span>
            </span>
          </div>
          <div>
            <span className={style.titleSpan}>9% مالیات بر ارزش افزوده:</span>
            <span>
              <span className={style.priceTax}>0</span>
              <span>تومان</span>
            </span>
          </div>
        </div>
        <hr />
        <div className={style.total}>
          <div>
            <span className={style.titleSpan}>مبلغ قابل پرداخت:</span>
            <span>
              <span className={style.priceTotal}>10,000</span>
              <span>تومان</span>
            </span>
          </div>
        </div>
      </div>
      <div className={style.paymentMethodsContainer}>
        <span>انتخاب درگاه پرداخت</span>
        <div className={style.paymentMethods}>
          <div
            data-id="0"
            onClick={() => handleChangepaymentMethod(0)}
            className={`${style.paymentMethod} ${
              paymentMethod === 0 ? style.active : undefined
            }`}
          >
            <span className={style.zarin}></span>
          </div>
          <div
            data-id="1"
            onClick={() => handleChangepaymentMethod(1)}
            className={`${style.paymentMethod} ${
              paymentMethod === 1 ? style.active : undefined
            }`}
          >
            <span className={style.sadad}></span>
          </div>
        </div>
      </div>
      <div className={style.submit}>
        <Button
          label="انتقال به درگاه و پرداخت آنلاین"
          disabled={false}
          className={`lgButtonSecondry`}
        />
      </div>
      <span className={style.cancel} onClick={redirectToHome}>
        انصراف و لغو پرداخت
      </span>
    </form>
  );
};

export default PrePayment;
