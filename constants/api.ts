export const apies = {
  inquiryPersonal: "/Inquiry/Personal",
  inquiryLegal: "/Inquiry/Legal",
  paymentRequest: "/PaymentRequest",
  payment: "/payment",
  zarinpal: "https://www.zarinpal.com/pg/StartPay/",
  generateReport: (hashCode) => `/Inquiry/${hashCode}/GenerateReport`,
  validateOtp: (hashCode) => `/Inquiry/${hashCode}/ValidateReport`,
  generateReportPdf: (hashCode) => `/Inquiry/${hashCode}/GenerateReport/pdf`,
  renewToken: (hashCode) => `/Inquiry/${hashCode}/RenewToken`,
};
