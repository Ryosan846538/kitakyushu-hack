import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="divide-y border-b border-gray-200 dark:border-gray-800">
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
            {/* <Link
              className="bg-black py-3 px-4 text-white rounded-md font-medium"
              href="/create"
            >
              Create Post
            </Link> */}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
