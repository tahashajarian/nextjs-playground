import Head from "next/head";
import Layout from "../components/layout/layout";
import Otp from "../containers/otp/otp";

export default function InquiryContainer(props) {
  return (
    <Layout home>
      <Head>
        <title>{"استعلام"}</title>
      </Head>
      <Otp />
    </Layout>
  );
}
