import React from "react";
import Image from "next/image";
import style from "./home.module.scss";
import utils from "../../components/utils.module.scss";
import Link from "next/link";
import { staticRoutes } from "../../constants/routes";
import Button from "../../components/button/button";

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

const Home2 = () => {
  return (
    <div className={"text-gray-500 bg-gray-100"}>
      <section className={"py-16 pt-32 px-4"}>
        <span className="text-gray-400 text-sm">
          دسترسی به گزارشات اعتباری حقیقی و حقوقی
        </span>
        <h1 className="text-brandPrimary-main text-2xl font-bold my-5 mt-2">
          سامانه اعتبار من
        </h1>
        <p className="text-justify text-sm pb-4">
          بانک‌ها، موسسات مالی اعتباری، بنگاه‌های اقتصادی و ... امروزه برای سنجش
          اعتبار شما و اینکه بدانند مشتریانشان تا چه حد خوش حساب هستند، از
          گزارشات اعتباری استفاده می‌نمایند. شما با استفاده از سامانه اعتبار من
          می‌توانید به راحتی و در کمترین زمان این گزارش را دریافت نموده و میزان
          اعتبار خود را در نزد آنها مشاهده نمایید.
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
      <section className="py-16 px-4 pt-32 flex-col flex items-center justify-center">
        <h2 className="w-full text-brandPrimary-main text-xl font-bold border-r-4 border-brandSecondary-main p-2 mb-4">
          رتبه اعتباری چیست؟
        </h2>

        <p className="text-justify text-sm pb-4">
          امروزه یکی از ملاک‌های پرداخت وام در بانک‌ها و موسسات مالی اعتباری،
          رتبه اعتباری می‌باشد. در حال حاضر هر فرد که اقدام به دریافت تسهیلات
          می‌کند، توسط بانک یا موسسه اعطا کننده تسهیلات بعنوان یک شرط لازم
          دریافت وام، ‌اعتبارسنجی می‌شود.
        </p>
        <p className="text-justify text-sm pb-4">
          رتبه اعتباری مشخص کننده خوش حسابی شما (حقیقی یا حقوقی) در نزد
          بنگاه‌های اقتصادی است. پرداخت به موقع اقساط تسهیلات بصورت منظم و عدم
          وجود بدهی مالیاتی، رتبه اعتباری شما را بهبود بخشیده و آن را ارتقا
          می‌دهد.
        </p>
        <p className="text-justify text-sm pb-4">
          مطالبه رتبه اعتباری از افراد حقیقی و حقوقی، سبب کاهش خطر کلاه‌برداری و
          ریسک اعطای تسهیلات، سرمایه‌گذاری و معاملات می‌شود.
        </p>
        <p className="text-justify text-sm pb-4">
          شما می‌توانید با استفاده از خدمات سامانه اعتبار من به راحتی و در
          کمترین زمان رتبه اعتباری خود را دریافت کنید.
        </p>
        <div className="p-4 shadow-lg rounded-3xl flex flex-col justify-center items-center bg-white max-w-xs my-8">
          <img src="/images/gauge.svg" />
          <span className="text-brandSecondary-dark font-bold text-lg">
            رتبه اعتباری شما خوب
          </span>
          <span className="my-3">امتیاز شما:</span>
          <span className="font-bold text-brandPrimary-dark text-4xl">158</span>
        </div>
      </section>
      <section className="bg-gray-200 flex-col flex items-center justify-center">
        <h2 className=" text-brandPrimary-main text-xl font-bold pt-8">
          راهنمای دریافت گزارش اعتباری
        </h2>
        <span className="text-gray-400 text-sm py-2">
          به راحتی و در کمترین زمان با سامانه اعتبار من رتبه اعتباری خود را
          دریافت نمایید
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
      <section className="bg-pic_cta bg-cover object-center">
        <div className="py-16 px-4">
          <div>
            <h3 className="text-brandSecondary-main text-lg font-bold mb-4">
              همین حالا گزارش اعتباری خود را دریافت کنید
            </h3>
            <p className="text-white text-justify text-sm max-w-md">
              بدون نیاز به مراجعه به بانک و تنها با چند کلیک، ظرف چند دقیقه در
              سامانه اعتبار من گزارش اعتباری خود را دریافت و اقدام سنجش خود جهت
              دریافت تسهیلات در بانک‌ها و موسسات اقتصادی نمایید
            </p>
            <Link href={staticRoutes.inquiry}>
              <span className="btn btn-primary my-6 w-48">
                دریافت گزارش اعتباری
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-white flex-col flex items-center justify-center">
        <h3 className="text-brandPrimary-main text-xl font-bold pt-8">
          عوامل موثر بر رتبه‌بندی
        </h3>
        <span className="text-gray-400 text-sm py-2">
          اگر می‌خواهید رتبه اعتباری خود را افزایش دهید، باید بدانید چه عواملی
          بر آن موثر است
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
      <section className="">
        <h3>پرسش‌های متداول</h3>
        <span>
          بسیاری از کاربران ما سوالاتی مشابه سوالات شما دارند که می‌توانید با
          مشاهده و مطالعه آنها به پاسخ خود برسید. در صورت داشتن پرسش جدید، در
          بخش تماس با ما، آن را مطرح نمایید.
        </span>
        <div>
          <span>
            <img src="/images/dash.svg" />
            آیا سامانه اعتبار من، امکان چاپ و دانلود گزارش را می‌دهد ؟
          </span>
          <span>
            بانک‌ها، موسسات مالی اعتباری، بنگاه‌های اقتصادی و ... امروزه برای
            سنجش اعتبار شما و اینکه بدانند مشتریانشان تا چه حد خوش حساب هستند،
            از گزارشات اعتباری استفاده می‌نمایند. شما با استفاده از سامانه
            اعتبار من می‌توانید به راحتی و در کمترین زمان این گزارش را دریافت
            نموده و میزان اعتبار خود را در نزد آنها مشاهده نمایید.
          </span>
          <ul>
            <li>امکان دریافت گزارش اعتباری بدون شماره همراه وجود دارد؟</li>
            <li>گزارشات اعتباری تا چند وقت پس از دریافت معتبر هستند؟</li>
            <li>مبلغ گزارش اعتباری چقدر است؟</li>
            <li>آیا گزارش مستقیم به بانک داده می‌شود؟</li>
            <li>نحوه محاسبه امتیازات به چه صورت است؟</li>
            <li>چند گزارش برای یک فرد وجود دارد؟</li>
          </ul>
        </div>
      </section>
      <section className={` ${""}`}>
        <div className={""}>
          <img className={""} src="/images/logo-etebareman2.svg" />
        </div>
        <div className={""}>
          <div>
            <h3>اولین قدم برای دریافت تسهیلات</h3>
            <p>
              پس از آشنایی با سامانه اعتبار من، اولین قدم برای دریافت تسهیلات
              دریافت گزارش اعتباری و مشاهده رتبه و امتیاز اعتباریتان است. با
              اینکار از هدر رفت وقت در بانک و موسسات جلوگیری می‌کنید
            </p>
          </div>
          <div>
            <Link href={staticRoutes.inquiry}>
              <Button
                label=" دریافت گزارش اعتباری"
                className={`lgButtonPrimary`}
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home2;
