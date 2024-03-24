"use client";

import Link from "next/link";
import React, { useEffect, useState, Suspense } from "react";
import GoogleAnalytics from "@/components/GoogleAnalytics";

function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsSticky(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`divide-y border-b border-gray-200 dark:border-gray-800 ${
        isSticky ? "fixed inset-x-0 top-0 z-10 bg-white shadow-md" : ""
      }`}
    >
      <Suspense>
        <GoogleAnalytics />
        <div className="px-4 py-3 md:py-6 lg:px-6">
          <div className="flex items-center space-y-2 md:space-x-6 md:space-y-0">
            <Link href="/" className="mr-4 text-2xl font-bold tracking-tighter">
              北九州ハッカソン
            </Link>
            <nav className="flex items-center space-x-6 text-sm">
              <Link
                className="font-medium text-gray-500 transition-colors hover:text-black dark:text-gray-400 dark:hover:text-black"
                href="/"
              >
                Home
              </Link>
              <Link
                className="font-medium text-gray-500 transition-colors hover:text-black dark:text-gray-400 dark:hover:text-black"
                href="/form"
              >
                お申し込み
              </Link>
              <Link
                className="font-medium text-gray-500 transition-colors hover:text-black dark:text-gray-400 dark:hover:text-black"
                href="/package"
              >
                パッケージ1
              </Link>
              <Link
                className="font-medium text-gray-500 transition-colors hover:text-black dark:text-gray-400 dark:hover:text-black"
                href="/package2"
              >
                パッケージ2
              </Link>
              <Link
                className="font-medium text-gray-500 transition-colors hover:text-black dark:text-gray-400 dark:hover:text-black"
                href="/package3"
              >
                パッケージ3
              </Link>
              {/* <Link
                className="bg-black py-3 px-4 text-white rounded-md font-medium"
                href="/create"
              >
                Create Post
              </Link> */}
            </nav>
          </div>
        </div>
      </Suspense>
    </div>
  );
}

export default Header;
