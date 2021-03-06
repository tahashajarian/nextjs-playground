import React from "react";
import Image from "next/image";
import style from "./home.module.scss";
import utils from "../../components/utils.module.scss";

const Home = () => {
  return (
    <div className={style.home}>
      <section className={style.homeSection}>
        <div className={style.backgroundSection1}>
          <img className={style.el1} src="/images/el1.svg" />
          <img className={style.dot1} src="/images/dot1.svg" />
          <img className={style.leftSide} src="/images/left-silde.png" />
          <img className={style.dot2} src="/images/dots2.svg" />
          <img className={style.circle1} src="/images/circle.svg" />
          <img className={style.circle2} src="/images/circle.svg" />
        </div>
        <span>دسترسی به گزارشات اعتباری حقیقی و حقوقی</span>
        <h1>سامانه اعتبار من</h1>
        <p>
          بانک‌ها، موسسات مالی اعتباری، بنگاه‌های اقتصادی و ... امروزه برای سنجش
          اعتبار شما و اینکه بدانند مشتریانشان تا چه حد خوش حساب هستند، از
          گزارشات اعتباری استفاده می‌نمایند. شما با استفاده از سامانه اعتبار من
          می‌توانید به راحتی و در کمترین زمان این گزارش را دریافت نموده و میزان
          اعتبار خود را در نزد آنها مشاهده نمایید.
        </p>
        <div className={style.actions}>
          <button className={`${utils.lgButtonPrimary} ${utils.shadowPrimary}`}>
            دریافت گزارش اعتباری
          </button>
          <button className={utils.lgButtonSecondryOutline}>
            رتبه اعتباری چیست؟
          </button>
        </div>
      </section>
      <section className={style.homeSection2}>
        <h2>رتبه اعتباری چیست؟</h2>

        <p>
          امروزه یکی از ملاک‌های پرداخت وام در بانک‌ها و موسسات مالی اعتباری،
          رتبه اعتباری می‌باشد. در حال حاضر هر فرد که اقدام به دریافت تسهیلات
          می‌کند، توسط بانک یا موسسه اعطا کننده تسهیلات بعنوان یک شرط لازم
          دریافت وام، ‌اعتبارسنجی می‌شود.
        </p>
        <p>
          رتبه اعتباری مشخص کننده خوش حسابی شما (حقیقی یا حقوقی) در نزد
          بنگاه‌های اقتصادی است. پرداخت به موقع اقساط تسهیلات بصورت منظم و عدم
          وجود بدهی مالیاتی، رتبه اعتباری شما را بهبود بخشیده و آن را ارتقا
          می‌دهد.
        </p>
        <p>
          مطالبه رتبه اعتباری از افراد حقیقی و حقوقی، سبب کاهش خطر کلاه‌برداری و
          ریسک اعطای تسهیلات، سرمایه‌گذاری و معاملات می‌شود.
        </p>
        <p>
          شما می‌توانید با استفاده از خدمات سامانه اعتبار من به راحتی و در
          کمترین زمان رتبه اعتباری خود را دریافت کنید.
        </p>
        <div className={`${style.gauge} ${utils.shadowNormal}`}>
          <img src="/images/gauge.svg" />
          <span>رتبه اعتباری شما خوب</span>
          <span>امتیاز شما:</span>
          <span>158</span>
        </div>
      </section>
      <section className={style.homeSection}>
        <div className={style.backgroundSection2}>
          <img className={style.bgSection3} src="/images/bg-section3.svg" />
        </div>
        test
      </section>
    </div>
  );
};

export default Home;
