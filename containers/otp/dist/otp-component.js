"use strict";
exports.__esModule = true;
var react_1 = require("react");
var router_1 = require("next/router");
var input_1 = require("../../components/input/input");
var link_1 = require("next/link");
var routes_1 = require("../../constants/routes");
var spinner_1 = require("../../components/spinner/spinner");
var axiosInstance_1 = require("../../utils/axiosInstance");
var api_1 = require("../../constants/api");
var download_1 = require("../../utils/download");
var Otp = function () {
    var timeWait = 120;
    var _a = react_1.useState(timeWait), timer = _a[0], setTimer = _a[1];
    var _b = react_1.useState(), hashCode = _b[0], setHashCode = _b[1];
    var _c = react_1.useState(), nationalCode = _c[0], setNationalCode = _c[1];
    var _d = react_1.useState(), mobileNumber = _d[0], setMobileNumber = _d[1];
    var _e = react_1.useState(), companyNationalCode = _e[0], setCompanyNationalCode = _e[1];
    var _f = react_1.useState(false), loading = _f[0], setLoading = _f[1];
    var _g = react_1.useState(""), otp = _g[0], setOtp = _g[1];
    var route = router_1.useRouter();
    react_1.useEffect(function () {
        var url = new URL("http://example" + route.asPath);
        setHashCode(url.searchParams.get("hashCode"));
        setNationalCode(url.searchParams.get("nationalCode"));
        setMobileNumber(url.searchParams.get("mobileNumber"));
        setCompanyNationalCode(url.searchParams.get("companyNationalCode"));
    }, []);
    react_1.useEffect(function () {
        if (timer > 0) {
            setTimeout(function () {
                setTimer(function (timer) { return timer - 1; });
            }, 1000);
        }
    }, [timer]);
    var resend = function () {
        setLoading(true);
        axiosInstance_1["default"]
            .get(api_1.apies.renewToken(hashCode), {})
            .then(function (response) {
            setLoading(false);
            if (response.data) {
                setTimer(timeWait);
            }
        })["catch"](function (err) {
            setLoading(false);
        });
    };
    var submitForm = function (e) {
        e.preventDefault();
        setLoading(true);
        axiosInstance_1["default"]
            .post(api_1.apies.generateReportPdf(hashCode), {
            otp: otp
        }, {
            responseType: "blob"
        })
            .then(function (response) {
            setLoading(false);
            if (response.data.statusCode) {
                console.log("response genarate report have status code then is not pdf");
            }
            else if (response.data) {
                var blob = new Blob([response.data]);
                download_1.downloadFile(response.data, "report-" + nationalCode + "-" + new Date().getTime() + ".pdf");
                route.push("/");
            }
        })["catch"](function (err) {
            setLoading(false);
        });
        console.log("for submited");
    };
    return (react_1["default"].createElement("form", { className: "flex flex-col justify-start p-4 pt-24 max-w-sm m-auto", onSubmit: submitForm },
        react_1["default"].createElement(spinner_1["default"], { show: loading }),
        react_1["default"].createElement("div", { className: "my-6 text-center" },
            hashCode ? (react_1["default"].createElement("span", { className: "text-brandSecondary-main" }, "\u067E\u0631\u062F\u0627\u062E\u062A \u0634\u0645\u0627 \u0628\u0627 \u0645\u0648\u0641\u0642\u06CC\u062A \u0627\u0646\u062C\u0627\u0645 \u0634\u062F")) : (react_1["default"].createElement("span", { className: "text-red-500" }, "\u067E\u0631\u062F\u0627\u062E\u062A \u0627\u0646\u062C\u0627\u0645 \u0646\u0634\u062F")),
            hashCode ? (react_1["default"].createElement("p", { className: "text-justify my-6 text-md text-gray-600" },
                "\u06AF\u0632\u0627\u0631\u0634 \u0627\u0639\u062A\u0628\u0627\u0631\u06CC \u0628\u0631\u0627\u06CC \u0634\u0645\u0627\u0631\u0647 \u0645\u0644\u06CC",
                react_1["default"].createElement("b", { className: "m-2" },
                    " ",
                    nationalCode,
                    " "),
                "\u0648 \u0634\u0645\u0627\u0631\u0647 \u0647\u0645\u0631\u0627\u0647",
                react_1["default"].createElement("b", { className: "m-2" },
                    " ",
                    mobileNumber,
                    " "),
                companyNationalCode
                    ? " \u0648 \u0634\u0645\u0627\u0631\u0647 \u0645\u0644\u06CC \u0645\u062F\u06CC\u0631 \u0639\u0627\u0645\u0644 " + companyNationalCode + " "
                    : "",
                "\u0622\u0645\u0627\u062F\u0647 \u062F\u0631\u06CC\u0627\u0641\u062A \u0627\u0633\u062A \u0644\u0637\u0641\u0627 \u06A9\u062F \u06CC\u06A9\u0628\u0627\u0631 \u0645\u0635\u0631\u0641 \u06A9\u0647 \u0628\u0647 \u0634\u0645\u0627\u0631\u0647 \u0647\u0645\u0631\u0627\u0647 \u062B\u0628\u062A \u0634\u062F\u0647 \u0627\u0631\u0633\u0627\u0644 \u0634\u062F\u0647 \u062F\u0631 \u06A9\u0627\u062F\u0631 \u0632\u06CC\u0631 \u0648\u0627\u0631\u062F \u0646\u0645\u0627\u06CC\u06CC\u062F \u0633\u067E\u0633 \u062F\u06A9\u0645\u0647",
                react_1["default"].createElement("b", { className: "m-2" }, " \u062F\u0627\u0646\u0644\u0648\u062F \u06AF\u0632\u0627\u0631\u0634 \u0627\u0639\u062A\u0628\u0627\u0631\u06CC "),
                "\u0631\u0627 \u0628\u0632\u0646\u06CC\u062F")) : (react_1["default"].createElement("p", null))),
        hashCode ? (react_1["default"].createElement("div", { className: "flexcolumn" },
            react_1["default"].createElement("div", { className: "w-full" },
                react_1["default"].createElement(input_1["default"], { label: "", onChange: function (e) { return setOtp(e.target.value); }, placeholder: "کد یک بار مصرف را وارد کنید", value: otp, type: "number" })),
            react_1["default"].createElement("div", { className: "py-2 text-gray-500 text-sm" }, timer > 0 ? (react_1["default"].createElement("div", null, "0" + Math.trunc(timer / 60) + ":" + (timer % 60 < 10 ? "0" + (timer % 60) : timer % 60),
                " ",
                react_1["default"].createElement("span", { style: { color: "silver" } }, "\u0627\u0631\u0633\u0627\u0644 \u0645\u062C\u062F\u062F \u06A9\u062F"))) : (react_1["default"].createElement("div", null,
                react_1["default"].createElement("span", null, "\u06A9\u062F \u0631\u0627 \u062F\u0631\u06CC\u0627\u0641\u062A \u0646\u06A9\u0631\u062F\u06CC\u062F\u061F"),
                react_1["default"].createElement("span", { className: "text-brandPrimary-main px-2 cursor-pointer hover:underline", onClick: resend }, "\u0627\u0631\u0633\u0627\u0644 \u0645\u062C\u062F\u062F")))),
            react_1["default"].createElement("div", { className: "mt-12 xl:mt-16" },
                react_1["default"].createElement("button", { className: "btn btn-primary-lg shadow-lg", type: "submit" }, "\u0627\u0631\u0633\u0627\u0644 \u06A9\u062F \u0648 \u062F\u0631\u06CC\u0627\u0641\u062A \u06AF\u0632\u0627\u0631\u0634")))) : (react_1["default"].createElement(link_1["default"], { href: routes_1.staticRoutes.home },
            react_1["default"].createElement("button", { className: "btn btn-secondray-lg shadow-lg", type: "button" },
                "\u0628\u0627\u0632\u06AF\u0634\u062A \u0628\u0647 \u0635\u0641\u062D\u0647 \u0627\u0635\u0644\u06CC",
                " ")))));
};
exports["default"] = Otp;
