import Head from "next/head";
import Layout from "../components/layout/layout";
import Inquiry from "../containers/inquiry/inquiry";

export default function InquiryContainer() {
  return (
    <Layout home>
      <Head>
        <title>{"استعلام"}</title>
      </Head>
      <Inquiry />
    </Layout>
  );
}
