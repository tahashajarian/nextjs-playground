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
    <div className="min-h-screen flex flex-col">
      <Head>
        <link rel="icon" href="/images/logo.svg" />
        <meta name="description" content="My Credit" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <main className="mb-auto">
        <Header pages={pages} />
        <div>{children}</div>
      </main>
      <Footer pages={pages} />
    </div>
  );
}
