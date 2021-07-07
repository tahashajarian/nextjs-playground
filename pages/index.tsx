import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Layout, { siteTitle } from "../components/layout/layout";
import { staticRoutes } from "../constants/routes";
import Home2 from "../containers/home-new/home2";
import { useAppContextUpdate } from "../context/state";
// import Home from "../containers/home/home";

export default function Index() {
  const route = useRouter();
  const updateState = useAppContextUpdate();
  useEffect(() => {
    const url = new URL("http://example" + route.asPath);
    const nationalCode = url.searchParams.get("nationalCode");
    const mobileNumber = url.searchParams.get("mobileNumber");
    const companyNationalCode = url.searchParams.get("companyNationalCode");
    updateState({
      nationalCode,
      mobileNumber,
      companyNationalCode,
    });
    if (nationalCode && mobileNumber) {
      route.push(staticRoutes.inquiry);
    }
  }, []);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Home2 />
    </Layout>
  );
}
