import React from "react";
import { staticRoutes } from "../../../constants/routes";
import Link from "next/link";

interface Props {}

const Section1 = (props: Props) => {
  return (
    <section className="bg-gray-50 p-4 flex justify-center items-center flex-col lg:flex-row">
      <div
        className={
          "flex justify-center items-center flex-col lg:flex-row lg:ml-4"
        }
      >
        <img className={"p-2"} src="/images/logo-etebareman2.svg" />
      </div>
      <div className="lg:p-12">
        <div>
          <h3 className="text-brandSecondary-main text-xl font-bold my-4">
            اولین قدم برای دریافت تسهیلات
          </h3>
          <p className="text-gray-500 max-w-lg 2xl:max-w-xl">
            پس از آشنایی با سامانه اعتبار من، اولین قدم برای دریافت تسهیلات
            دریافت گزارش اعتباری و مشاهده رتبه و امتیاز اعتباریتان است. با
            اینکار از هدر رفت وقت در بانک و موسسات جلوگیری می‌کنید
          </p>
        </div>
        <div>
          <Link href={staticRoutes.inquiry}>
            <span className="btn btn-primary ml-2 w-48 my-4">
              دریافت گزارش اعتباری
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Section1;
