import Head from "next/head";
import Layout from "../components/layout/layout";
import Rules from "../containers/rules-component/rule-component";
export default function InquiryContainer(props) {
  return (
    <Layout home>
      <Head>
        <title>{"اعتبار من - فوانین و مقررات"}</title>
      </Head>
      <Rules />
    </Layout>
  );
}
