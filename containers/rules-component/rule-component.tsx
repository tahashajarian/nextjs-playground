import React from "react";
import style from "./rule.module.scss";
import { staticRoutes } from "../../constants/routes";
import Button from "../../components/button/button";
import { useRouter } from "next/router";

const Rules = () => {
  const route = useRouter();
  const backToPrevieusPage = () => {
    route.back();
  };
  return (
    <main className={style.container}>
      <h2>قوانین و مقررات</h2>
      <p>
        <b>
          کاربر گرامی لطفاً موارد زیر را جهت استفاده بهینه از خدمات سامانه{" "}
          <a href={staticRoutes.home}>اعتبارمن</a> به دقت ملاحظه فرمایید. هرگونه
          استفاده از این سامانه به معنی آگاهی و پذیرش تمامی شروط مندرج در این
          شرایط نامه است. توجه داشته باشید که ثبت درخواست نیز در هر زمان به معنی
          پذیرفتن کامل کلیه شرایط و قوانین سامانه اعتبارمن از سوی کاربر است
        </b>
      </p>
      <p>
        اطلاعات ذکر شده در گزارش اعتباری تماما توسط شرکت مشاوره رتبه بندی
        اعتباری ایرانیان و بر اساس داده های موجود در بانک‌های کشور می‌باشد. لذا
        در زمینه صحت اطلاعات، مسئولیتی متوجه سامانه{" "}
        <a href={staticRoutes.home}>اعتبارمن</a> نمی باشد. با این وجود این موارد
        به معنی صحت صد در صدی گزارش نیست. در صورتی که تصور می‌کنید در گزارش شما
        خطایی وجود دارد می‌توانید از طریق این فرم و یا از طریق تماس با واحد
        پشتیبانی به محتوای گزارش خود اعتراض کنید.
      </p>
      <p>
        <b>توجه:</b> پاسخ استعلام از سامانه اعتبارسنجی در مورد هر مشتری بنابر
        اینکه در پنج سال گذشته تاکنون از بانکهای عضو سامانه تسهیلات دریافت نموده
        باشد یا هيچ‌گونه تسهیلاتی دریافت نکرده باشد، به دو صورت خواهد بود: در
        صورت نداشتن هيچ‌گونه تسهيلات یا قرارداد: صرفاً گزارش آمار استعلام (گزارش
        خالی) در مورد این مشتری در سامانه توليد شده و در اختیار کاربر قرار
        میگ‌يرد. در صورت دارا بودن تسهيلات یا قرارداد (دارا بودن حداقل یک
        قرارداد): گزارش اعتبارسنجی در اختیار کاربر قرار می‌گيرد. در صورت دارا
        بود تسهیلات یا قرارداد جاری رتبه و امتیاز اعتبارسنجی در اختیار کاربر
        قرار می‌گيرد
      </p>
      <p>
        گزارش اعتباری شما فقط در اختیار شما قرار می گیرد و هیچ فرد دیگری حق
        دسترسی به این گزارش را نخواهد داشت، مگر آنکه خود کاربر دسترسی مشاهده
        گزارش خود را به کاربر دیگری ارائه کند.
      </p>
      <p>
        در هنگام درخواست گزارش اعتباری می بایست از خط تلفن همراهی استفاده کنید
        که متعلق به خودتان است. به این معنی که کد ملی و شماره تلفن همراه آن در
        شبکه تلفن همراه مطابقت داشته باشد و سند تلفن همراه به نام متقاضی دریافت
        کننده گزارش باشد. در غیر اینصورت گزارش اعتباری به کاربر نمایش داده
        نخواهد شد و مسئولیت کلیه عواقب آن به عهده کاربر می باشد. لازم به ذکر است
        کنترل تطابق بین شماره تلفن همراه و کد ملی بعد از عملیات پرداخت انجام شده
        و در صورت عدم تطابق، وجهی به متقاضی عودت داده نخواهد شد. لذا در این
        زمینه دقت لازم را به عمل آورید.
      </p>
      <p>
        هزینه سرویس های ارائه شده به مشتری طبق قوانین تصویب شده می باشد و
        اعتبارمن در روند قیمت گذاری دخالتی ندارد. در صورت تمایل به مشاهده ریز
        قیمت ها اینجا کلیک کنید.
      </p>
      <p>
        لازم به ذکر است اعتبارمن حق به روز رسانی این سند را (که بدون هیچ
        محدودیتی شامل تغییر یا حذف قوانین) در هر زمان و بدون اطلاع مشتری خواهد
        داشت. چنین تغییر و یا حذفی از زمان انتشار نسخه به روز شده این سند در وب
        سایت رسمی سامانه اعتبارسنجی اعتبارمن به صورت قانونی شامل حال مشتری خواهد
        شد و این کاملا به عهده مشتری است که از آخرین نسخه به روز شده این سند
        مطلع باشد.
      </p>
      <Button
        style={{ marginTop: "50px" }}
        label="بازگشت به صفحه قبل"
        className={`mdButtonSecondry`}
        onclick={backToPrevieusPage}
      />
    </main>
  );
};

export default Rules;
