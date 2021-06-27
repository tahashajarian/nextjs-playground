import React from "react";
import { staticRoutes } from "../../../constants/routes";
import Link from "next/link";

interface Props {}

const Section1 = (props: Props) => {
  return (
    <section className={"py-16 pt-32 p-4 md:px-16 lg:px-24 relative 2xl:pr-72"}>
      <img
        className="hidden lg:block absolute left-0 top-0 w-1/2 lg:max-w-3xl"
        src="/images/left-silde.png"
      />

      <span className="text-gray-400 text-sm">
        دسترسی به گزارشات اعتباری حقیقی و حقوقی
      </span>
      <h1 className="text-brandPrimary-main text-2xl font-bold my-5 mt-2">
        سامانه اعتبار من
      </h1>
      <p className="text-justify text-sm pb-4 max-w-lg">
        بانک‌ها، موسسات مالی اعتباری، بنگاه‌های اقتصادی و ... امروزه برای سنجش
        اعتبار شما و اینکه بدانند مشتریانشان تا چه حد خوش حساب هستند، از گزارشات
        اعتباری استفاده می‌نمایند. شما با استفاده از سامانه اعتبار من می‌توانید
        به راحتی و در کمترین زمان این گزارش را دریافت نموده و میزان اعتبار خود
        را در نزد آنها مشاهده نمایید.
      </p>
      <div className="flex flex-row mt-10 flex-wrap h-28 items-center justify-start">
        <Link href={staticRoutes.inquiry}>
          <span className="btn btn-primary ml-2">دریافت گزارش اعتباری</span>
        </Link>
        <span className="btn btn-secondray-outline bg-transparent">
          رتبه اعتباری چیست؟
        </span>
      </div>
    </section>
  );
};

export default Section1;
