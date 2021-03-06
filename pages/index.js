import Head from "next/head";
import Layout, { siteTitle } from "../components/layout/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
// import Date from "../components/date";
import Home from "../containers/home/home";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

/** @param {import('next').InferGetStaticPropsType<typeof getStaticProps> } props */
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
