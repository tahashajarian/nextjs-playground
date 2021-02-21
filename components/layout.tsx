import Head from "next/head";
import Image from "next/image";
import style from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Header from "./header";
import { Footer } from "./footer";

export const siteTitle = "اعتبار من";
export const pages = [
  { path: "/aboute", title: "درباره ما" },
  { path: "/contact", title: "ارتباط با ما" },
  { path: "/contact", title: "ارتباط با ما" },
  { path: "/contact", title: "ارتباط با ما" },
  { path: "/contact", title: "ارتباط با ما" },
];

export default function Layout({ children, home }) {
  return (
    <div className={style.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <main className={style.main}>
        <Header pages={pages} />
        <div>{children}</div>
        <Footer pages={pages} />
      </main>
    </div>
  );
}
