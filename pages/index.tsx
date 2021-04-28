import Head from "next/head";
import Layout, { siteTitle } from "../components/layout/layout";
import Home from "../containers/home/home";

export default function Index({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Home />
    </Layout>
  );
}
