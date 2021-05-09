import Head from "next/head";
import Layout from "../components/layout/layout";
import PrePayment from "../containers/pre-payment/pre-payment";

export default function InquiryContainer() {
  return (
    <Layout home>
      <Head>
        <title>{"اعتبار من - پیش پرداخت"}</title>
      </Head>
      <PrePayment />
    </Layout>
  );
}
