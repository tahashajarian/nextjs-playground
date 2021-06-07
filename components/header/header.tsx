import React, { useState } from "react";
import style from "./header.module.scss";
import utils from "../utils.module.scss";
import Link from "next/link";
import Image from "next/image";
interface Props {
  pages: any[];
}

const Header = (props: Props) => {
  const [openMenu, setOpenMenu] = useState(false);
  const fadeInMenu = () => {
    setOpenMenu(true);
  };

  const fadeOutMenu = () => {
    setOpenMenu(false);
  };

  return (
    <header className="sticky top-0 bg-white shadow-sm">
      <div className="hidden lg:flex py-2 justify-around items-center">
        <Link href="/">
          <span className="flex items-center">
            <img
              src="/images/logo.svg" // Route of the image file
              height={50} // Desired size with correct aspect ratio
              width={50} // Desired size with correct aspect ratio
              alt="Your Name"
            />
            <span className="whitespace-nowrap text-brandPrimary-main pr-2">
              اعتبار من
            </span>
          </span>
        </Link>
        <ul className="flex flex-row justify-start items-center">
          {props.pages.map((page, index) => (
            <li key={index} className="mx-4 flex justify-center items-center">
              <Link href={page.path}>
                <a className="whitespace-nowrap text-gray-500 lg:text-sm text-xs">
                  {page.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <div className="">
          <ul className="flex flex-row">
            <li className="btn btn-primary-outline-sm ml-5">ورود به سامانه</li>
            <li className="btn btn-secondray-sm">عضویت در سامانه</li>
          </ul>
        </div>
      </div>

      <div className="lg:hidden flex">
        <div className="w-full flex flex-row justify-center items-center bg-white shadow-md h-12 fixed z-40 right-0 top-0">
          <span
            onClick={fadeInMenu}
            className=" flex flex-col justify-center items-center ml-auto w-10 h-full cursor-pointer pr-2"
          >
            <img src="/images/menu-icon.svg" alt="menu icon" />
          </span>
          <div className="w-full flex justify-center">
            <Link href="/">
              <span className="flex items-center">
                <img
                  src="/images/logo.svg" // Route of the image file
                  alt="etebareman"
                  className="h-9"
                />
                <span className="whitespace-nowrap text-brandPrimary-main pr-2">
                  اعتبار من
                </span>
              </span>
            </Link>
          </div>
          <li className="btn btn-primary-outline-sm ml-1">ورود به سامانه</li>
        </div>
      </div>

      <div
        className={`fixed z-50 h-full w-full top-0 ${
          openMenu ? "right-0" : "left-full"
        }`}
      >
        <div
          className={`bg-gray-400 inset-0 absolute transition ${
            openMenu ? "opacity-50" : "opacity-0"
          }`}
          onClick={fadeOutMenu}
        ></div>
        <div
          className={`absolute h-full bg-white flex flex-col items-center py-10 shadow-lg w-64 transition  ${
            openMenu ? "right-0" : "left-full"
          }`}
        >
          <span
            className="cursor-pointer absolute top-5 left-5"
            onClick={fadeOutMenu}
          >
            &#10005;
          </span>
          <Link href="/">
            <span className="flex items-center">
              <img
                src="/images/logo.svg" // Route of the image file
                height={50} // Desired size with correct aspect ratio
                width={50} // Desired size with correct aspect ratio
                alt="Your Name"
              />
              <span className="whitespace-nowrap text-brandPrimary-main pr-2">
                اعتبار من
              </span>
            </span>
          </Link>
          <ul className="flex flex-col justify-center items-center my-8">
            {props.pages.map((page, index) => (
              <li key={index} className="my-4 flex justify-center items-center">
                <Link href={page.path}>
                  <a className="whitespace-nowrap text-gray-500 text-xs">
                    {page.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <hr />
          <ul className="flex flex-row my-5 w-full justify-around">
            <li className="btn btn-primary-outline-sm">ورود به سامانه</li>
            <li className="btn btn-secondray-sm">عضویت در سامانه</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
