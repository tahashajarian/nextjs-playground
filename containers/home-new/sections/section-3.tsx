import React from "react";
import { staticRoutes } from "../../../constants/routes";
import Link from "next/link";

interface Props {}
const steps = [
  {
    title: "ورود شماره همراه و شماره ملی",
    description:
      "ابتدا شماره تلفن و شماره همراه خود را وارد نمایید. توجه کنید که هر دو باید به نام یک شخص باشد",
    srcPic: "/images/phone-nationalcode.svg",
  },
  {
    title: "پرداخت هزینه گزارش",
    description:
      "بعد از مشاهده تعرفه گزارش به صفحه درگاه پرداخت اینترنتی منتقل خواهید شد تا هزینه گزارش را پرداخت نمایید",
    srcPic: "/images/payment.svg",
  },
  {
    title: "تایید هویت",
    description:
      "پس از بازگشت از صفحه درگاه پرداخت، سیستم هویت شما را تایید نموده و آماده تحویل گزارش به شما خواهد شد",
    srcPic: "/images/verify.svg",
  },
  {
    title: "مشاهده گزارش اعتباری",
    description:
      "در مرحله آخر سامانه گزارش اعتباری و رتبه شما را نمایش خواهد داد. شما می‌توانید این گزارش را چاپ یا دریافت نمایید",
    srcPic: "/images/report.svg",
  },
];

const Section1 = (props: Props) => {
  return (
    <section className="bg-gray-200 flex-col flex items-center justify-center">
      <h2 className=" text-brandPrimary-main text-xl font-bold pt-8">
        راهنمای دریافت گزارش اعتباری
      </h2>
      <span className="text-gray-400 text-sm py-2">
        به راحتی و در کمترین زمان با سامانه اعتبار من رتبه اعتباری خود را دریافت
        نمایید
      </span>
      <div className={"flex items-center flex-wrap justify-center pb-12"}>
        {steps.map((step, index) => (
          <div
            key={index}
            className="mx-8 p-4 shadow-lg rounded-3xl flex flex-col justify-center items-center bg-white w-64 my-8"
          >
            <img src={step.srcPic} />
            <b className="my-4">{step.title}</b>
            <span className="text-center text-sm text-gray-400">
              {step.description}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section1;
