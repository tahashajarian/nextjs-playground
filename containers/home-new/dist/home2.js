"use strict";
exports.__esModule = true;
var react_1 = require("react");
var link_1 = require("next/link");
var routes_1 = require("../../constants/routes");
var button_1 = require("../../components/button/button");
var avamelMoaser = [
    {
        title: "رفتار در بازپرداخت اقساط",
        description: "موثرترین عامل بر رتبه اعتباری، بازپرداخت به موقع اقساط است که باعث افزایش امتیاز و رتبه اعتباری می‌شود.",
        persent: "49",
        color: "#5ac87b"
    },
    {
        title: "نوع تسهیلات",
        description: "هرچه تنوع تسهیلات دریافتی مشتری (قرض‌الحسنه، مشارکت مدنی، ضمانت‌نامه و...) بیشتر باشد باعث افزایش امتیاز اعتباری وی خواهد شد.",
        persent: "12",
        color: "#408de5"
    },
    {
        title: "توانایی مسجل شده در بازپرداخت",
        description: "مشتریانی که توانایی خود را در بازپرداخت به موقع اقساط تسهیلات خود با مبالغ بیشتر نشان داده‌اند دارای امتیاز بالاتری هستند.",
        persent: "16",
        color: "#af53ec"
    },
    {
        title: "بدهی جاری",
        description: "وجود بدهی جاری برای مشتریان منجر به کاهش امتیاز و رتبه اعتباری می‌شود.",
        persent: "9",
        color: "#e94e4e"
    },
    {
        title: "سایر اطلاعات",
        description: "انواع وضعیت منفی ( مشتری و قرارداد)، تعداد درخواست های مشتری برای تسهیلات، تعداد تسهیلاتی که وی ضامن آنها می‌باشد و سن مشتری",
        persent: "14",
        color: "#48d2d2"
    },
];
var steps = [
    {
        title: "ورود شماره همراه و شماره ملی",
        description: "ابتدا شماره تلفن و شماره همراه خود را وارد نمایید. توجه کنید که هر دو باید به نام یک شخص باشد",
        srcPic: "/images/phone-nationalcode.svg"
    },
    {
        title: "پرداخت هزینه گزارش",
        description: "بعد از مشاهده تعرفه گزارش به صفحه درگاه پرداخت اینترنتی منتقل خواهید شد تا هزینه گزارش را پرداخت نمایید",
        srcPic: "/images/payment.svg"
    },
    {
        title: "تایید هویت",
        description: "پس از بازگشت از صفحه درگاه پرداخت، سیستم هویت شما را تایید نموده و آماده تحویل گزارش به شما خواهد شد",
        srcPic: "/images/verify.svg"
    },
    {
        title: "مشاهده گزارش اعتباری",
        description: "در مرحله آخر سامانه گزارش اعتباری و رتبه شما را نمایش خواهد داد. شما می‌توانید این گزارش را چاپ یا دریافت نمایید",
        srcPic: "/images/report.svg"
    },
];
var Home2 = function () {
    return (react_1["default"].createElement("div", { className: "text-gray-500 bg-gray-100" },
        react_1["default"].createElement("section", { className: "py-16 pt-32 px-4" },
            react_1["default"].createElement("span", { className: "text-gray-400 text-sm" }, "\u062F\u0633\u062A\u0631\u0633\u06CC \u0628\u0647 \u06AF\u0632\u0627\u0631\u0634\u0627\u062A \u0627\u0639\u062A\u0628\u0627\u0631\u06CC \u062D\u0642\u06CC\u0642\u06CC \u0648 \u062D\u0642\u0648\u0642\u06CC"),
            react_1["default"].createElement("h1", { className: "text-brandPrimary-main text-2xl font-bold my-5 mt-2" }, "\u0633\u0627\u0645\u0627\u0646\u0647 \u0627\u0639\u062A\u0628\u0627\u0631 \u0645\u0646"),
            react_1["default"].createElement("p", { className: "text-justify text-sm pb-4" }, "\u0628\u0627\u0646\u06A9\u200C\u0647\u0627\u060C \u0645\u0648\u0633\u0633\u0627\u062A \u0645\u0627\u0644\u06CC \u0627\u0639\u062A\u0628\u0627\u0631\u06CC\u060C \u0628\u0646\u06AF\u0627\u0647\u200C\u0647\u0627\u06CC \u0627\u0642\u062A\u0635\u0627\u062F\u06CC \u0648 ... \u0627\u0645\u0631\u0648\u0632\u0647 \u0628\u0631\u0627\u06CC \u0633\u0646\u062C\u0634 \u0627\u0639\u062A\u0628\u0627\u0631 \u0634\u0645\u0627 \u0648 \u0627\u06CC\u0646\u06A9\u0647 \u0628\u062F\u0627\u0646\u0646\u062F \u0645\u0634\u062A\u0631\u06CC\u0627\u0646\u0634\u0627\u0646 \u062A\u0627 \u0686\u0647 \u062D\u062F \u062E\u0648\u0634 \u062D\u0633\u0627\u0628 \u0647\u0633\u062A\u0646\u062F\u060C \u0627\u0632 \u06AF\u0632\u0627\u0631\u0634\u0627\u062A \u0627\u0639\u062A\u0628\u0627\u0631\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0645\u06CC\u200C\u0646\u0645\u0627\u06CC\u0646\u062F. \u0634\u0645\u0627 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0633\u0627\u0645\u0627\u0646\u0647 \u0627\u0639\u062A\u0628\u0627\u0631 \u0645\u0646 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u0628\u0647 \u0631\u0627\u062D\u062A\u06CC \u0648 \u062F\u0631 \u06A9\u0645\u062A\u0631\u06CC\u0646 \u0632\u0645\u0627\u0646 \u0627\u06CC\u0646 \u06AF\u0632\u0627\u0631\u0634 \u0631\u0627 \u062F\u0631\u06CC\u0627\u0641\u062A \u0646\u0645\u0648\u062F\u0647 \u0648 \u0645\u06CC\u0632\u0627\u0646 \u0627\u0639\u062A\u0628\u0627\u0631 \u062E\u0648\u062F \u0631\u0627 \u062F\u0631 \u0646\u0632\u062F \u0622\u0646\u0647\u0627 \u0645\u0634\u0627\u0647\u062F\u0647 \u0646\u0645\u0627\u06CC\u06CC\u062F."),
            react_1["default"].createElement("div", { className: "flex flex-row mt-10 flex-wrap h-28 items-center justify-start" },
                react_1["default"].createElement(link_1["default"], { href: routes_1.staticRoutes.inquiry },
                    react_1["default"].createElement("span", { className: "btn btn-primary ml-2" }, "\u062F\u0631\u06CC\u0627\u0641\u062A \u06AF\u0632\u0627\u0631\u0634 \u0627\u0639\u062A\u0628\u0627\u0631\u06CC")),
                react_1["default"].createElement("span", { className: "btn btn-secondray-outline bg-transparent" }, "\u0631\u062A\u0628\u0647 \u0627\u0639\u062A\u0628\u0627\u0631\u06CC \u0686\u06CC\u0633\u062A\u061F"))),
        react_1["default"].createElement("section", { className: "py-16 px-4 pt-32 flex-col flex items-center justify-center" },
            react_1["default"].createElement("h2", { className: "w-full text-brandPrimary-main text-xl font-bold border-r-4 border-brandSecondary-main p-2 mb-4" }, "\u0631\u062A\u0628\u0647 \u0627\u0639\u062A\u0628\u0627\u0631\u06CC \u0686\u06CC\u0633\u062A\u061F"),
            react_1["default"].createElement("p", { className: "text-justify text-sm pb-4" }, "\u0627\u0645\u0631\u0648\u0632\u0647 \u06CC\u06A9\u06CC \u0627\u0632 \u0645\u0644\u0627\u06A9\u200C\u0647\u0627\u06CC \u067E\u0631\u062F\u0627\u062E\u062A \u0648\u0627\u0645 \u062F\u0631 \u0628\u0627\u0646\u06A9\u200C\u0647\u0627 \u0648 \u0645\u0648\u0633\u0633\u0627\u062A \u0645\u0627\u0644\u06CC \u0627\u0639\u062A\u0628\u0627\u0631\u06CC\u060C \u0631\u062A\u0628\u0647 \u0627\u0639\u062A\u0628\u0627\u0631\u06CC \u0645\u06CC\u200C\u0628\u0627\u0634\u062F. \u062F\u0631 \u062D\u0627\u0644 \u062D\u0627\u0636\u0631 \u0647\u0631 \u0641\u0631\u062F \u06A9\u0647 \u0627\u0642\u062F\u0627\u0645 \u0628\u0647 \u062F\u0631\u06CC\u0627\u0641\u062A \u062A\u0633\u0647\u06CC\u0644\u0627\u062A \u0645\u06CC\u200C\u06A9\u0646\u062F\u060C \u062A\u0648\u0633\u0637 \u0628\u0627\u0646\u06A9 \u06CC\u0627 \u0645\u0648\u0633\u0633\u0647 \u0627\u0639\u0637\u0627 \u06A9\u0646\u0646\u062F\u0647 \u062A\u0633\u0647\u06CC\u0644\u0627\u062A \u0628\u0639\u0646\u0648\u0627\u0646 \u06CC\u06A9 \u0634\u0631\u0637 \u0644\u0627\u0632\u0645 \u062F\u0631\u06CC\u0627\u0641\u062A \u0648\u0627\u0645\u060C \u200C\u0627\u0639\u062A\u0628\u0627\u0631\u0633\u0646\u062C\u06CC \u0645\u06CC\u200C\u0634\u0648\u062F."),
            react_1["default"].createElement("p", { className: "text-justify text-sm pb-4" }, "\u0631\u062A\u0628\u0647 \u0627\u0639\u062A\u0628\u0627\u0631\u06CC \u0645\u0634\u062E\u0635 \u06A9\u0646\u0646\u062F\u0647 \u062E\u0648\u0634 \u062D\u0633\u0627\u0628\u06CC \u0634\u0645\u0627 (\u062D\u0642\u06CC\u0642\u06CC \u06CC\u0627 \u062D\u0642\u0648\u0642\u06CC) \u062F\u0631 \u0646\u0632\u062F \u0628\u0646\u06AF\u0627\u0647\u200C\u0647\u0627\u06CC \u0627\u0642\u062A\u0635\u0627\u062F\u06CC \u0627\u0633\u062A. \u067E\u0631\u062F\u0627\u062E\u062A \u0628\u0647 \u0645\u0648\u0642\u0639 \u0627\u0642\u0633\u0627\u0637 \u062A\u0633\u0647\u06CC\u0644\u0627\u062A \u0628\u0635\u0648\u0631\u062A \u0645\u0646\u0638\u0645 \u0648 \u0639\u062F\u0645 \u0648\u062C\u0648\u062F \u0628\u062F\u0647\u06CC \u0645\u0627\u0644\u06CC\u0627\u062A\u06CC\u060C \u0631\u062A\u0628\u0647 \u0627\u0639\u062A\u0628\u0627\u0631\u06CC \u0634\u0645\u0627 \u0631\u0627 \u0628\u0647\u0628\u0648\u062F \u0628\u062E\u0634\u06CC\u062F\u0647 \u0648 \u0622\u0646 \u0631\u0627 \u0627\u0631\u062A\u0642\u0627 \u0645\u06CC\u200C\u062F\u0647\u062F."),
            react_1["default"].createElement("p", { className: "text-justify text-sm pb-4" }, "\u0645\u0637\u0627\u0644\u0628\u0647 \u0631\u062A\u0628\u0647 \u0627\u0639\u062A\u0628\u0627\u0631\u06CC \u0627\u0632 \u0627\u0641\u0631\u0627\u062F \u062D\u0642\u06CC\u0642\u06CC \u0648 \u062D\u0642\u0648\u0642\u06CC\u060C \u0633\u0628\u0628 \u06A9\u0627\u0647\u0634 \u062E\u0637\u0631 \u06A9\u0644\u0627\u0647\u200C\u0628\u0631\u062F\u0627\u0631\u06CC \u0648 \u0631\u06CC\u0633\u06A9 \u0627\u0639\u0637\u0627\u06CC \u062A\u0633\u0647\u06CC\u0644\u0627\u062A\u060C \u0633\u0631\u0645\u0627\u06CC\u0647\u200C\u06AF\u0630\u0627\u0631\u06CC \u0648 \u0645\u0639\u0627\u0645\u0644\u0627\u062A \u0645\u06CC\u200C\u0634\u0648\u062F."),
            react_1["default"].createElement("p", { className: "text-justify text-sm pb-4" }, "\u0634\u0645\u0627 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u062E\u062F\u0645\u0627\u062A \u0633\u0627\u0645\u0627\u0646\u0647 \u0627\u0639\u062A\u0628\u0627\u0631 \u0645\u0646 \u0628\u0647 \u0631\u0627\u062D\u062A\u06CC \u0648 \u062F\u0631 \u06A9\u0645\u062A\u0631\u06CC\u0646 \u0632\u0645\u0627\u0646 \u0631\u062A\u0628\u0647 \u0627\u0639\u062A\u0628\u0627\u0631\u06CC \u062E\u0648\u062F \u0631\u0627 \u062F\u0631\u06CC\u0627\u0641\u062A \u06A9\u0646\u06CC\u062F."),
            react_1["default"].createElement("div", { className: "p-4 shadow-lg rounded-3xl flex flex-col justify-center items-center bg-white max-w-xs my-8" },
                react_1["default"].createElement("img", { src: "/images/gauge.svg" }),
                react_1["default"].createElement("span", { className: "text-brandSecondary-dark font-bold text-lg" }, "\u0631\u062A\u0628\u0647 \u0627\u0639\u062A\u0628\u0627\u0631\u06CC \u0634\u0645\u0627 \u062E\u0648\u0628"),
                react_1["default"].createElement("span", { className: "my-3" }, "\u0627\u0645\u062A\u06CC\u0627\u0632 \u0634\u0645\u0627:"),
                react_1["default"].createElement("span", { className: "font-bold text-brandPrimary-dark text-4xl" }, "158"))),
        react_1["default"].createElement("section", { className: "bg-gray-200 flex-col flex items-center justify-center" },
            react_1["default"].createElement("h2", { className: " text-brandPrimary-main text-xl font-bold pt-8" }, "\u0631\u0627\u0647\u0646\u0645\u0627\u06CC \u062F\u0631\u06CC\u0627\u0641\u062A \u06AF\u0632\u0627\u0631\u0634 \u0627\u0639\u062A\u0628\u0627\u0631\u06CC"),
            react_1["default"].createElement("span", { className: "text-gray-400 text-sm py-2" }, "\u0628\u0647 \u0631\u0627\u062D\u062A\u06CC \u0648 \u062F\u0631 \u06A9\u0645\u062A\u0631\u06CC\u0646 \u0632\u0645\u0627\u0646 \u0628\u0627 \u0633\u0627\u0645\u0627\u0646\u0647 \u0627\u0639\u062A\u0628\u0627\u0631 \u0645\u0646 \u0631\u062A\u0628\u0647 \u0627\u0639\u062A\u0628\u0627\u0631\u06CC \u062E\u0648\u062F \u0631\u0627 \u062F\u0631\u06CC\u0627\u0641\u062A \u0646\u0645\u0627\u06CC\u06CC\u062F"),
            react_1["default"].createElement("div", { className: "flex items-center flex-wrap justify-center pb-12" }, steps.map(function (step, index) { return (react_1["default"].createElement("div", { key: index, className: "mx-8 p-4 shadow-lg rounded-3xl flex flex-col justify-center items-center bg-white w-64 my-8" },
                react_1["default"].createElement("img", { src: step.srcPic }),
                react_1["default"].createElement("b", { className: "my-4" }, step.title),
                react_1["default"].createElement("span", { className: "text-center text-sm text-gray-400" }, step.description))); }))),
        react_1["default"].createElement("section", { className: "bg-pic_cta bg-cover object-center" },
            react_1["default"].createElement("div", { className: "py-16 px-4" },
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("h3", { className: "text-brandSecondary-main text-lg font-bold mb-4" }, "\u0647\u0645\u06CC\u0646 \u062D\u0627\u0644\u0627 \u06AF\u0632\u0627\u0631\u0634 \u0627\u0639\u062A\u0628\u0627\u0631\u06CC \u062E\u0648\u062F \u0631\u0627 \u062F\u0631\u06CC\u0627\u0641\u062A \u06A9\u0646\u06CC\u062F"),
                    react_1["default"].createElement("p", { className: "text-white text-justify text-sm max-w-md" }, "\u0628\u062F\u0648\u0646 \u0646\u06CC\u0627\u0632 \u0628\u0647 \u0645\u0631\u0627\u062C\u0639\u0647 \u0628\u0647 \u0628\u0627\u0646\u06A9 \u0648 \u062A\u0646\u0647\u0627 \u0628\u0627 \u0686\u0646\u062F \u06A9\u0644\u06CC\u06A9\u060C \u0638\u0631\u0641 \u0686\u0646\u062F \u062F\u0642\u06CC\u0642\u0647 \u062F\u0631 \u0633\u0627\u0645\u0627\u0646\u0647 \u0627\u0639\u062A\u0628\u0627\u0631 \u0645\u0646 \u06AF\u0632\u0627\u0631\u0634 \u0627\u0639\u062A\u0628\u0627\u0631\u06CC \u062E\u0648\u062F \u0631\u0627 \u062F\u0631\u06CC\u0627\u0641\u062A \u0648 \u0627\u0642\u062F\u0627\u0645 \u0633\u0646\u062C\u0634 \u062E\u0648\u062F \u062C\u0647\u062A \u062F\u0631\u06CC\u0627\u0641\u062A \u062A\u0633\u0647\u06CC\u0644\u0627\u062A \u062F\u0631 \u0628\u0627\u0646\u06A9\u200C\u0647\u0627 \u0648 \u0645\u0648\u0633\u0633\u0627\u062A \u0627\u0642\u062A\u0635\u0627\u062F\u06CC \u0646\u0645\u0627\u06CC\u06CC\u062F"),
                    react_1["default"].createElement(link_1["default"], { href: routes_1.staticRoutes.inquiry },
                        react_1["default"].createElement("span", { className: "btn btn-primary my-6 w-48" }, "\u062F\u0631\u06CC\u0627\u0641\u062A \u06AF\u0632\u0627\u0631\u0634 \u0627\u0639\u062A\u0628\u0627\u0631\u06CC"))))),
        react_1["default"].createElement("section", { className: "bg-white flex-col flex items-center justify-center" },
            react_1["default"].createElement("h3", { className: "text-brandPrimary-main text-xl font-bold pt-8" }, "\u0639\u0648\u0627\u0645\u0644 \u0645\u0648\u062B\u0631 \u0628\u0631 \u0631\u062A\u0628\u0647\u200C\u0628\u0646\u062F\u06CC"),
            react_1["default"].createElement("span", { className: "text-gray-400 text-sm py-2" }, "\u0627\u06AF\u0631 \u0645\u06CC\u200C\u062E\u0648\u0627\u0647\u06CC\u062F \u0631\u062A\u0628\u0647 \u0627\u0639\u062A\u0628\u0627\u0631\u06CC \u062E\u0648\u062F \u0631\u0627 \u0627\u0641\u0632\u0627\u06CC\u0634 \u062F\u0647\u06CC\u062F\u060C \u0628\u0627\u06CC\u062F \u0628\u062F\u0627\u0646\u06CC\u062F \u0686\u0647 \u0639\u0648\u0627\u0645\u0644\u06CC \u0628\u0631 \u0622\u0646 \u0645\u0648\u062B\u0631 \u0627\u0633\u062A"),
            react_1["default"].createElement("div", { className: "flex flex-col items-center justify-center px-4 w-full" }, avamelMoaser.map(function (aamel, index) { return (react_1["default"].createElement("div", { key: index, className: "flex flex-row-reverse lg:flex-nowrap flex-wrap my-4 w-full max-w-md lg:max-w-3xl" },
                react_1["default"].createElement("div", { className: "flex flex-col w-full" },
                    react_1["default"].createElement("span", { className: "font-bold text-gray-900" }, aamel.title),
                    react_1["default"].createElement("span", { className: "text-sm text-justify max-w-sm" }, aamel.description)),
                react_1["default"].createElement("div", { className: "w-full flex justify-start items-center my-4 lg:ml-4 lg:flex-row-reverse" },
                    react_1["default"].createElement("span", { className: "font-bold text-xl ml-2 text-gray-900 lg:mr-2" },
                        aamel.persent,
                        "%"),
                    react_1["default"].createElement("span", { style: {
                            width: aamel.persent + "%",
                            background: aamel.color
                        }, className: "block h-3 rounded-full shadow-lg" })))); }))),
        react_1["default"].createElement("section", { className: "" },
            react_1["default"].createElement("h3", null, "\u067E\u0631\u0633\u0634\u200C\u0647\u0627\u06CC \u0645\u062A\u062F\u0627\u0648\u0644"),
            react_1["default"].createElement("span", null, "\u0628\u0633\u06CC\u0627\u0631\u06CC \u0627\u0632 \u06A9\u0627\u0631\u0628\u0631\u0627\u0646 \u0645\u0627 \u0633\u0648\u0627\u0644\u0627\u062A\u06CC \u0645\u0634\u0627\u0628\u0647 \u0633\u0648\u0627\u0644\u0627\u062A \u0634\u0645\u0627 \u062F\u0627\u0631\u0646\u062F \u06A9\u0647 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u0628\u0627 \u0645\u0634\u0627\u0647\u062F\u0647 \u0648 \u0645\u0637\u0627\u0644\u0639\u0647 \u0622\u0646\u0647\u0627 \u0628\u0647 \u067E\u0627\u0633\u062E \u062E\u0648\u062F \u0628\u0631\u0633\u06CC\u062F. \u062F\u0631 \u0635\u0648\u0631\u062A \u062F\u0627\u0634\u062A\u0646 \u067E\u0631\u0633\u0634 \u062C\u062F\u06CC\u062F\u060C \u062F\u0631 \u0628\u062E\u0634 \u062A\u0645\u0627\u0633 \u0628\u0627 \u0645\u0627\u060C \u0622\u0646 \u0631\u0627 \u0645\u0637\u0631\u062D \u0646\u0645\u0627\u06CC\u06CC\u062F."),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("span", null,
                    react_1["default"].createElement("img", { src: "/images/dash.svg" }),
                    "\u0622\u06CC\u0627 \u0633\u0627\u0645\u0627\u0646\u0647 \u0627\u0639\u062A\u0628\u0627\u0631 \u0645\u0646\u060C \u0627\u0645\u06A9\u0627\u0646 \u0686\u0627\u067E \u0648 \u062F\u0627\u0646\u0644\u0648\u062F \u06AF\u0632\u0627\u0631\u0634 \u0631\u0627 \u0645\u06CC\u200C\u062F\u0647\u062F \u061F"),
                react_1["default"].createElement("span", null, "\u0628\u0627\u0646\u06A9\u200C\u0647\u0627\u060C \u0645\u0648\u0633\u0633\u0627\u062A \u0645\u0627\u0644\u06CC \u0627\u0639\u062A\u0628\u0627\u0631\u06CC\u060C \u0628\u0646\u06AF\u0627\u0647\u200C\u0647\u0627\u06CC \u0627\u0642\u062A\u0635\u0627\u062F\u06CC \u0648 ... \u0627\u0645\u0631\u0648\u0632\u0647 \u0628\u0631\u0627\u06CC \u0633\u0646\u062C\u0634 \u0627\u0639\u062A\u0628\u0627\u0631 \u0634\u0645\u0627 \u0648 \u0627\u06CC\u0646\u06A9\u0647 \u0628\u062F\u0627\u0646\u0646\u062F \u0645\u0634\u062A\u0631\u06CC\u0627\u0646\u0634\u0627\u0646 \u062A\u0627 \u0686\u0647 \u062D\u062F \u062E\u0648\u0634 \u062D\u0633\u0627\u0628 \u0647\u0633\u062A\u0646\u062F\u060C \u0627\u0632 \u06AF\u0632\u0627\u0631\u0634\u0627\u062A \u0627\u0639\u062A\u0628\u0627\u0631\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0645\u06CC\u200C\u0646\u0645\u0627\u06CC\u0646\u062F. \u0634\u0645\u0627 \u0628\u0627 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0627\u0632 \u0633\u0627\u0645\u0627\u0646\u0647 \u0627\u0639\u062A\u0628\u0627\u0631 \u0645\u0646 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u0628\u0647 \u0631\u0627\u062D\u062A\u06CC \u0648 \u062F\u0631 \u06A9\u0645\u062A\u0631\u06CC\u0646 \u0632\u0645\u0627\u0646 \u0627\u06CC\u0646 \u06AF\u0632\u0627\u0631\u0634 \u0631\u0627 \u062F\u0631\u06CC\u0627\u0641\u062A \u0646\u0645\u0648\u062F\u0647 \u0648 \u0645\u06CC\u0632\u0627\u0646 \u0627\u0639\u062A\u0628\u0627\u0631 \u062E\u0648\u062F \u0631\u0627 \u062F\u0631 \u0646\u0632\u062F \u0622\u0646\u0647\u0627 \u0645\u0634\u0627\u0647\u062F\u0647 \u0646\u0645\u0627\u06CC\u06CC\u062F."),
                react_1["default"].createElement("ul", null,
                    react_1["default"].createElement("li", null, "\u0627\u0645\u06A9\u0627\u0646 \u062F\u0631\u06CC\u0627\u0641\u062A \u06AF\u0632\u0627\u0631\u0634 \u0627\u0639\u062A\u0628\u0627\u0631\u06CC \u0628\u062F\u0648\u0646 \u0634\u0645\u0627\u0631\u0647 \u0647\u0645\u0631\u0627\u0647 \u0648\u062C\u0648\u062F \u062F\u0627\u0631\u062F\u061F"),
                    react_1["default"].createElement("li", null, "\u06AF\u0632\u0627\u0631\u0634\u0627\u062A \u0627\u0639\u062A\u0628\u0627\u0631\u06CC \u062A\u0627 \u0686\u0646\u062F \u0648\u0642\u062A \u067E\u0633 \u0627\u0632 \u062F\u0631\u06CC\u0627\u0641\u062A \u0645\u0639\u062A\u0628\u0631 \u0647\u0633\u062A\u0646\u062F\u061F"),
                    react_1["default"].createElement("li", null, "\u0645\u0628\u0644\u063A \u06AF\u0632\u0627\u0631\u0634 \u0627\u0639\u062A\u0628\u0627\u0631\u06CC \u0686\u0642\u062F\u0631 \u0627\u0633\u062A\u061F"),
                    react_1["default"].createElement("li", null, "\u0622\u06CC\u0627 \u06AF\u0632\u0627\u0631\u0634 \u0645\u0633\u062A\u0642\u06CC\u0645 \u0628\u0647 \u0628\u0627\u0646\u06A9 \u062F\u0627\u062F\u0647 \u0645\u06CC\u200C\u0634\u0648\u062F\u061F"),
                    react_1["default"].createElement("li", null, "\u0646\u062D\u0648\u0647 \u0645\u062D\u0627\u0633\u0628\u0647 \u0627\u0645\u062A\u06CC\u0627\u0632\u0627\u062A \u0628\u0647 \u0686\u0647 \u0635\u0648\u0631\u062A \u0627\u0633\u062A\u061F"),
                    react_1["default"].createElement("li", null, "\u0686\u0646\u062F \u06AF\u0632\u0627\u0631\u0634 \u0628\u0631\u0627\u06CC \u06CC\u06A9 \u0641\u0631\u062F \u0648\u062C\u0648\u062F \u062F\u0627\u0631\u062F\u061F")))),
        react_1["default"].createElement("section", { className: " " + "" },
            react_1["default"].createElement("div", { className: "" },
                react_1["default"].createElement("img", { className: "", src: "/images/logo-etebareman2.svg" })),
            react_1["default"].createElement("div", { className: "" },
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("h3", null, "\u0627\u0648\u0644\u06CC\u0646 \u0642\u062F\u0645 \u0628\u0631\u0627\u06CC \u062F\u0631\u06CC\u0627\u0641\u062A \u062A\u0633\u0647\u06CC\u0644\u0627\u062A"),
                    react_1["default"].createElement("p", null, "\u067E\u0633 \u0627\u0632 \u0622\u0634\u0646\u0627\u06CC\u06CC \u0628\u0627 \u0633\u0627\u0645\u0627\u0646\u0647 \u0627\u0639\u062A\u0628\u0627\u0631 \u0645\u0646\u060C \u0627\u0648\u0644\u06CC\u0646 \u0642\u062F\u0645 \u0628\u0631\u0627\u06CC \u062F\u0631\u06CC\u0627\u0641\u062A \u062A\u0633\u0647\u06CC\u0644\u0627\u062A \u062F\u0631\u06CC\u0627\u0641\u062A \u06AF\u0632\u0627\u0631\u0634 \u0627\u0639\u062A\u0628\u0627\u0631\u06CC \u0648 \u0645\u0634\u0627\u0647\u062F\u0647 \u0631\u062A\u0628\u0647 \u0648 \u0627\u0645\u062A\u06CC\u0627\u0632 \u0627\u0639\u062A\u0628\u0627\u0631\u06CC\u062A\u0627\u0646 \u0627\u0633\u062A. \u0628\u0627 \u0627\u06CC\u0646\u06A9\u0627\u0631 \u0627\u0632 \u0647\u062F\u0631 \u0631\u0641\u062A \u0648\u0642\u062A \u062F\u0631 \u0628\u0627\u0646\u06A9 \u0648 \u0645\u0648\u0633\u0633\u0627\u062A \u062C\u0644\u0648\u06AF\u06CC\u0631\u06CC \u0645\u06CC\u200C\u06A9\u0646\u06CC\u062F")),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement(link_1["default"], { href: routes_1.staticRoutes.inquiry },
                        react_1["default"].createElement(button_1["default"], { label: " \u062F\u0631\u06CC\u0627\u0641\u062A \u06AF\u0632\u0627\u0631\u0634 \u0627\u0639\u062A\u0628\u0627\u0631\u06CC", className: "lgButtonPrimary" })))))));
};
exports["default"] = Home2;
