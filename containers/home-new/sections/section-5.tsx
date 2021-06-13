import React from "react";
import { staticRoutes } from "../../../constants/routes";
import Link from "next/link";

interface Props {}

const avamelMoaser = [
  {
    title: "رفتار در بازپرداخت اقساط",
    description:
      "موثرترین عامل بر رتبه اعتباری، بازپرداخت به موقع اقساط است که باعث افزایش امتیاز و رتبه اعتباری می‌شود.",
    persent: "49",
    color: "#5ac87b",
  },
  {
    title: "نوع تسهیلات",
    description:
      "هرچه تنوع تسهیلات دریافتی مشتری (قرض‌الحسنه، مشارکت مدنی، ضمانت‌نامه و...) بیشتر باشد باعث افزایش امتیاز اعتباری وی خواهد شد.",
    persent: "12",
    color: "#408de5",
  },
  {
    title: "توانایی مسجل شده در بازپرداخت",
    description:
      "مشتریانی که توانایی خود را در بازپرداخت به موقع اقساط تسهیلات خود با مبالغ بیشتر نشان داده‌اند دارای امتیاز بالاتری هستند.",
    persent: "16",
    color: "#af53ec",
  },
  {
    title: "بدهی جاری",
    description:
      "وجود بدهی جاری برای مشتریان منجر به کاهش امتیاز و رتبه اعتباری می‌شود.",
    persent: "9",
    color: "#e94e4e",
  },
  {
    title: "سایر اطلاعات",
    description:
      "انواع وضعیت منفی ( مشتری و قرارداد)، تعداد درخواست های مشتری برای تسهیلات، تعداد تسهیلاتی که وی ضامن آنها می‌باشد و سن مشتری",
    persent: "14",
    color: "#48d2d2",
  },
];

const Section1 = (props: Props) => {
  return (
    <section className="bg-white flex-col flex items-center justify-center">
      <h3 className="text-brandPrimary-main text-xl font-bold pt-8">
        عوامل موثر بر رتبه‌بندی
      </h3>
      <span className="text-gray-400 text-sm py-2 text-center">
        اگر می‌خواهید رتبه اعتباری خود را افزایش دهید، باید بدانید چه عواملی بر
        آن موثر است
      </span>
      <div className="flex flex-col items-center justify-center px-4 w-full">
        {avamelMoaser.map((aamel, index) => (
          <div
            key={index}
            className="flex flex-row-reverse lg:flex-nowrap flex-wrap my-4 w-full max-w-md lg:max-w-3xl"
          >
            <div className="flex flex-col w-full">
              <span className="font-bold text-gray-900">{aamel.title}</span>
              <span className="text-sm text-justify max-w-sm">
                {aamel.description}
              </span>
            </div>
            <div className="w-full flex justify-start items-center my-4 lg:ml-4 lg:flex-row-reverse">
              <span className="font-bold text-xl ml-2 text-gray-900 lg:mr-2">
                {aamel.persent}%
              </span>
              <span
                style={{
                  width: aamel.persent + "%",
                  background: aamel.color,
                }}
                className="block h-3 rounded-full shadow-lg"
              ></span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section1;
