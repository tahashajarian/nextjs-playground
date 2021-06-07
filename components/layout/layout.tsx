import Head from "next/head";
import Image from "next/image";
import style from "./layout.module.scss";
import Link from "next/link";
import Header from "../header/header";
import { Footer } from "../footer/footer";

export const siteTitle = "اعتبار من";
export const pages = [
  { path: "/contact", title: "رتبه اعتباری چیست؟" },
  { path: "/contact", title: "راهنمای دریافت گزارش اعتباری" },
  { path: "/aboute", title: "درباره ما" },
  { path: "/contact", title: "تماس با ما" },
];

export default function Layout({ children, home }) {
  return (
    <div className="">
      <Head>
        <link rel="icon" href="/images/logo.svg" />
        <meta name="description" content="My Credit" />
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
      </main>
      <Footer pages={pages} />
    </div>
  );
}
