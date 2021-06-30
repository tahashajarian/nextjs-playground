import Head from "next/head";
import Layout from "../components/layout/layout";
import Aboute from "../containers/aboute-component/aboute";
export default function AbouteContainer(props) {
  return (
    <Layout home>
      <Head>
        <title>{"اعتبار من - فوانین و مقررات"}</title>
      </Head>
      <Aboute />
    </Layout>
  );
}
