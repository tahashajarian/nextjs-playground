import React from "react";
import style from "./rule.module.scss";
import { staticRoutes } from "../../constants/routes";
import Button from "../../components/button/button";
import { useRouter } from "next/router";

const paragraph = [
  <p>
    شرکت تدبیرگران چابک افزار با نام تجاری اعتبارمن، سامانه جامع ارائه گزارش
    اعتباری شخص حقیقی و حقوقی با هدف تسهیل فرآیند اعتماد بین دو طرف قرارداد،
    خدمات مختلفی به کسب‌وکارها و متقاضیان دریافت گزارش اعتبارسنجی ارائه می‌نماید
    که این خدمات مطابق قرارداد با شرکت مشاوره و رتبه بندی ایران است.
  </p>,
  <p>
    این روزها باتوجه به افزایش مشکلات اقتصادی از یکسو و از سوی دیگر رقابت میان
    کسب‌وکارها برای جذب مشتری بیشتر فروش اقساطی و همچنین در اختیار قرار دادن
    تسهیلات وخدماتی از این دست به مشتری اهمیت بیشتری پیدا کرده است.
  </p>,
  <p>
    اعتبارمن با ارائه گزارشی تحلیل شده درواقع دستیاری مطمئن و مشاوری امین برای
    کسب‌وکارهای درخواست کننده گزارش اعتبارسنجی است تا بتوانند با درنظر گرفتن
    خوش‌حسابی و ریسک معاملات خود نرخ نکول را کنترل نموده و خطر وصول نشدن
    مطالباتشان را کاهش دهند.
  </p>,
];

const Aboute = () => {
  const route = useRouter();
  const backToPrevieusPage = () => {
    route.back();
  };
  return (
    <main className="pt-20 p-4 space-y-4 max-w-4xl m-auto ">
      <div className="flex flex-col justify-start items-center text-brandPrimary-main mb-8 xl:mb-12">
        <h2 className="text-xl xl:text-2xl font-bold">درباره ما</h2>
      </div>
      {paragraph.map((p) => (
        <div className="text-justify text-gray-600 md:pb-2 lg:pb-6 xl:pb-8">
          {p}
        </div>
      ))}
    </main>
  );
};

export default Aboute;
