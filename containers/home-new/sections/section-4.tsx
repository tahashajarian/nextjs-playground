import React from "react";
import { staticRoutes } from "../../../constants/routes";
import Link from "next/link";

interface Props {}

const Section1 = (props: Props) => {
  return (
    <section className="bg-pic_cta bg-cover object-center">
      <div className="py-16 px-4 lg:p-12">
        <div className="flex flex-col lg:flex-row ">
          <div className="w-full">
            <h3 className="text-brandSecondary-main text-lg font-bold mb-4">
              همین حالا گزارش اعتباری خود را دریافت کنید
            </h3>
            <p className="text-white text-justify text-sm max-w-md xl:max-w-xl">
              بدون نیاز به مراجعه به بانک و تنها با چند کلیک، ظرف چند دقیقه در
              سامانه اعتبار من گزارش اعتباری خود را دریافت و اقدام سنجش خود جهت
              دریافت تسهیلات در بانک‌ها و موسسات اقتصادی نمایید
            </p>
          </div>
          <div className="w-full">
            <Link href={staticRoutes.inquiry}>
              <span className="btn btn-primary my-6 w-48">
                دریافت گزارش اعتباری
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
