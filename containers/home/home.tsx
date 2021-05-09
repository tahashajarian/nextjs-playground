import React from "react";
import Image from "next/image";
import style from "./home.module.scss";
import utils from "../../components/utils.module.scss";
import Link from "next/link";
import { staticRoutes } from "../../constants/routes";

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
          <Link href={staticRoutes.inquiry}>
            <button
              className={`${utils.lgButtonPrimary} ${utils.shadowPrimary}`}
            >
              دریافت گزارش اعتباری
            </button>
          </Link>
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
      <section className={` ${style.homeSection3}`}>
        <div className={style.backgroundSection2}>
          <img className={style.bgSection3} src="/images/bg-section3.svg" />
          <img className={style.cricle3} src="/images/circle3.svg" />
          <img className={style.dots4} src="/images/dots4.svg" />
        </div>
        <h2>راهنمای دریافت گزارش اعتباری</h2>
        <span>
          به راحتی و در کمترین زمان با سامانه اعتبار من رتبه اعتباری خود را
          دریافت نمایید
        </span>
        <div className={style.plateContainer}>
          <div>
            <img src="/images/phone-nationalcode.svg" />
            <b>ورود شماره همراه و شماره ملی</b>
            <span>
              ابتدا شماره تلفن و شماره همراه خود را وارد نمایید. توجه کنید که هر
              دو باید به نام یک شخص باشد
            </span>
          </div>
          <div>
            <img src="/images/payment.svg" />
            <b>پرداخت هزینه گزارش</b>
            <span>
              بعد از مشاهده تعرفه گزارش به صفحه درگاه پرداخت اینترنتی منتقل
              خواهید شد تا هزینه گزارش را پرداخت نمایید
            </span>
          </div>
          <div>
            <img src="/images/verify.svg" />
            <b>تایید هویت</b>
            <span>
              پس از بازگشت از صفحه درگاه پرداخت، سیستم هویت شما را تایید نموده و
              آماده تحویل گزارش به شما خواهد شد
            </span>
          </div>
          <div>
            <img src="/images/report.svg" />
            <b>مشاهده گزارش اعتباری</b>
            <span>
              در مرحله آخر سامانه گزارش اعتباری و رتبه شما را نمایش خواهد داد.
              شما می‌توانید این گزارش را چاپ یا دریافت نمایید
            </span>
          </div>
        </div>
      </section>
      <section className={` ${style.homeSection4}`}>
        <div className={style.backgroundSection3}>
          <img className={style.cricle4} src="/images/circle4.svg" />
          <img className={style.dots5} src="/images/dots5.svg" />
          <div className={style.bg}>
            <img src="/images/pic_cta.png" />
          </div>
        </div>
        <div className={style.textContainer}>
          <div>
            <h3>همین حالا گزارش اعتباری خود را دریافت کنید</h3>
            <p>
              بدون نیاز به مراجعه به بانک و تنها با چند کلیک، ظرف چند دقیقه در
              سامانه اعتبار من گزارش اعتباری خود را دریافت و اقدام سنجش خود جهت
              دریافت تسهیلات در بانک‌ها و موسسات اقتصادی نمایید
            </p>
          </div>
          <div>
            <Link href={staticRoutes.inquiry}>
              <button
                className={`${utils.lgButtonPrimary} ${utils.shadowPrimary}`}
              >
                دریافت گزارش اعتباری
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className={style.homeSection5}>
        <div className={style.backgroundSection4}>
          <img className={style.cricle5} src="/images/circle5.svg" />
          <img className={style.cricle6} src="/images/circle6.svg" />
        </div>
        <h3>عوامل موثر بر رتبه‌بندی</h3>
        <span>
          اگر می‌خواهید رتبه اعتباری خود را افزایش دهید، باید بدانید چه عواملی
          بر آن موثر است
        </span>
        <div className={style.charts}>
          <div>
            <div className={style.texts}>
              <span className={style.title}>رفتار در بازپرداخت اقساط</span>
              <span className={style.text}>
                موثرترین عامل بر رتبه اعتباری، بازپرداخت به موقع اقساط است که
                باعث افزایش امتیاز و رتبه اعتباری می‌شود.
              </span>
            </div>
            <div className={style.chart}>
              <span>49%</span>
              <span className={style.chartColor}></span>
            </div>
          </div>
          <div>
            <div className={style.texts}>
              <span className={style.title}>نوع تسهیلات</span>
              <span className={style.text}>
                هرچه تنوع تسهیلات دریافتی مشتری( قرض‌الحسنه، مشارکت مدنی،
                ضمانت‌نامه و...) بیشتر باشد باعث افزایش امتیاز اعتباری وی خواهد
                شد.
              </span>
            </div>
            <div className={style.chart}>
              <span>12%</span>
              <span className={style.chartColor}></span>
            </div>
          </div>
          <div>
            <div className={style.texts}>
              <span className={style.title}>توانایی مسجل شده در بازپرداخت</span>
              <span className={style.text}>
                مشتریانی که توانایی خود را در بازپرداخت به موقع اقساط تسهیلات
                خود با مبالغ بیشتر نشان داده‌اند دارای امتیاز بالاتری هستند.
              </span>
            </div>
            <div className={style.chart}>
              <span>16%</span>
              <span className={style.chartColor}></span>
            </div>
          </div>
          <div>
            <div className={style.texts}>
              <span className={style.title}>بدهی جاری</span>
              <span className={style.text}>
                وجود بدهی جاری برای مشتریان منجر به کاهش امتیاز و رتبه اعتباری
                می‌شود.
              </span>
            </div>
            <div className={style.chart}>
              <span>9%</span>
              <span className={style.chartColor}></span>
            </div>
          </div>
          <div>
            <div className={style.texts}>
              <span className={style.title}>سایر اطلاعات</span>
              <span className={style.text}>
                انواع وضعیت منفی ( مشتری و قرارداد)، تعداد درخواست های مشتری
                برای تسهیلات، تعداد تسهیلاتی که وی ضامن آنها می‌باشد و سن مشتری
              </span>
            </div>
            <div className={style.chart}>
              <span>14%</span>
              <span className={style.chartColor}></span>
            </div>
          </div>
        </div>
      </section>
      <section className={style.homeSection6}>
        <div className={style.backgroundSection6}>
          <img className={style.bg5} src="/images/bg5.svg" />
          <img className={style.cricle8} src="/images/circle8.svg" />
          <img className={style.dots7} src="/images/dots7.svg" />
        </div>
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
      <section className={` ${style.homeSection7}`}>
        <div className={style.backgroundSection7}>
          <img className={style.logo2} src="/images/logo-etebareman2.svg" />
        </div>
        <div className={style.textContainer}>
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
              <button
                className={`${utils.lgButtonPrimary} ${utils.shadowPrimary}`}
              >
                دریافت گزارش اعتباری
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
