import React from "react";

interface Props {}

const ptags = [
  "امروزه یکی از ملاک‌های پرداخت وام در بانک‌ها و موسسات مالی اعتباری، رتبه اعتباری می‌باشد. در حال حاضر هر فرد که اقدام به دریافت تسهیلات می‌کند، توسط بانک یا موسسه اعطا کننده تسهیلات بعنوان یک شرط لازم دریافت وام، ‌اعتبارسنجی می‌شود.",
  "رتبه اعتباری مشخص کننده خوش حسابی شما (حقیقی یا حقوقی) در نزد بنگاه‌های اقتصادی است. پرداخت به موقع اقساط تسهیلات بصورت منظم و عدم وجود بدهی مالیاتی، رتبه اعتباری شما را بهبود بخشیده و آن را ارتقا می‌دهد.  ",
  "مطالبه رتبه اعتباری از افراد حقیقی و حقوقی، سبب کاهش خطر کلاه‌برداری و ریسک اعطای تسهیلات، سرمایه‌گذاری و معاملات می‌شود.",
  "شما می‌توانید با استفاده از خدمات سامانه اعتبار من به راحتی و در کمترین زمان رتبه اعتباری خود را دریافت کنید.",
];

const Section2 = (props: Props) => {
  return (
    <section className="py-16 px-4 pt-32 flex-col flex items-center justify-center  lg:px-12">
      <h2 className="w-full text-brandPrimary-main text-xl font-bold border-r-4 border-brandSecondary-main p-2 mb-4">
        رتبه اعتباری چیست؟
      </h2>
      <div className="w-full">
        {ptags.map((p) => (
          <p className="text-justify text-sm pb-4 max-w-lg">{p}</p>
        ))}
      </div>

      <div className="p-4 shadow-lg rounded-3xl flex flex-col justify-center items-center bg-white max-w-xs my-8">
        <img src="/images/gauge.svg" />
        <span className="text-brandSecondary-dark font-bold text-lg">
          رتبه اعتباری شما خوب
        </span>
        <span className="my-3">امتیاز شما:</span>
        <span className="font-bold text-brandPrimary-dark text-4xl">158</span>
      </div>
    </section>
  );
};

export default Section2;
