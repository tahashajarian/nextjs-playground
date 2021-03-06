import React, { useState } from "react";
import { staticRoutes } from "../../../constants/routes";
import Link from "next/link";

interface Props {}

const Section1 = (props: Props) => {
  const [qAndA, setQAndA] = useState([
    {
      question: "امکان دریافت گزارش اعتباری بدون شماره همراه وجود دارد؟",
      answer:
        "در هنگام درخواست گزارش اعتباری از آنجا که یکی از عوامل شناسایی شما در سامانه اعتبارسنجی بانکی مطابق قوانین اعلام شده، شماره تلفن همراهی است که به نام شما ثبت شده است، لذا داشتن شماره تلفن همراه برای دریافت گزارش اعتبارسنجی ضروری است",
      collapse: false,
    },
    {
      question: "گزارشات اعتباری تا چند وقت پس از دریافت معتبر هستند؟",
      answer:
        "هر گزارش اعتبارسنجی به مدت 24 ساعت در سامانه اعتبارمن معتبر بوده و شما می‌توانید به دفعات لازم در این بازه زمانی گزارش اعتبارسنجی خود را دریافت نمایید.",
      collapse: false,
    },
    {
      question: "آیا سامانه اعتبار من، امکان چاپ و دانلود گزارش را می‌دهد؟",
      answer:
        "بله، درحال حاضر سامانه اعتبارمن امکان دریافت گزارش اعتبارسنجی به صورت PDF را امکان پذیر کرده و شما می‌توانید گزارش اعتبارسنجی خود را دریافت نموده و چاپ کنید.",
      collapse: false,
    },
    {
      question: "مبلغ گزارش اعتباری چقدر است؟",
      answer:
        "هزینه سرویس های ارائه شده طبق قوانین تصویب شده می‌باشد و اعتبارمن در روند قیمت گذاری دخالتی ندارد. در صورت تمایل به مشاهده ریز قیمت ها اینجا کلیک کنید.",
      collapse: false,
    },
    {
      question: "آیا گزارش مستقیم به بانک داده می‌شود؟",
      answer:
        "بانک‌ها، موسسات مالی اعتباری، بنگاه‌های اقتصادی ارائه کننده تسهیلات امروزه برای سنجش اعتبار شما و اینکه بدانند مشتریانشان تا چه حد خوش حساب هستند، از گزارشات اعتباری استفاده می‌نمایند. شما با استفاده از سامانه اعتبار من می‌توانید به راحتی و در کمترین زمان این گزارش را دریافت نموده و میزان اعتبار خود را در نزد آنها مشاهده نمایید",
      collapse: false,
    },
    {
      question: "نحوه محاسبه امتیازات به چه صورت است؟",
      answer:
        "نحوه محاسبه امتیازات هر شخص براساس سابقه عملکرد بانکی وی در پنج سال گذشته محاسبه می‌گردد. اطلاعات ذکر شده در گزارش اعتباری توسط شرکت مشاوره رتبه بندی اعتباری ایران و بر اساس داده های موجود در بانک‌های کشور محاسبه می‌گردد.",
      collapse: false,
    },
    {
      question: "چند گزارش برای یک فرد وجود دارد؟",
      answer:
        "پاسخ استعلام از سامانه اعتبارسنجی در مورد هر شخص بنابر اینکه در پنج سال گذشته تاکنون از بانکهای عضو سامانه تسهیلات دریافت نموده باشد یا هيچ‌گونه تسهیلاتی دریافت نکرده باشد، به دو صورت خواهد بود:\n در صورت نداشتن هيچ‌گونه تسهيلات یا قرارداد، صرفاً گزارش آمار استعلام در سامانه توليد شده و در اختیار شخص قرار می‌گيرد.\nدر صورت دارا بودن تسهيلات یا قرارداد، گزارش اعتبارسنجی ارائه می‌گردد",
      collapse: false,
    },
  ]);
  const collapseThis = (index) => {
    qAndA[index].collapse = !qAndA[index].collapse;
    setQAndA([...qAndA]);
    console.log(qAndA);
  };
  return (
    <section className="bg-gray-100 flex-col flex items-center justify-center p-4 md:px-16 lg:px-24 relative 2xl:pr-72">
      <h3 className="text-brandPrimary-main text-xl font-bold pt-8">
        پرسش‌های متداول
      </h3>
      <span className="text-gray-400 text-sm py-2 text-center">
        بسیاری از کاربران ما سوالاتی مشابه سوالات شما دارند که می‌توانید با
        مشاهده و مطالعه آنها به پاسخ خود برسید. در صورت داشتن پرسش جدید، در بخش
        تماس با ما، آن را مطرح نمایید.
      </span>
      <ul className="w-full flex flex-col p-4 lg:p-12">
        {qAndA.map((qa, index) => (
          <li
            key={index}
            className="w-full my-6"
            onClick={() => collapseThis(index)}
          >
            <span className="inline-flex cursor-pointer w-full">
              <span className="text-xl ml-1 font-bold">
                {qa.collapse ? "-" : "+"}
              </span>
              <span className="pb-2">{qa.question}</span>
            </span>
            <p
              className={`p-4 py-0 text-gray-400 text-sm overflow-hidden  ${
                qa.collapse ? "h-full" : "h-0"
              }`}
            >
              {qa.answer || "بدون پاسخ"}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Section1;
