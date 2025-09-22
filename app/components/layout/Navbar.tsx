"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

/**
 * Renders the navigation bar for the portfolio website.
 * This component includes links to the main pages of the site and is responsive for mobile devices.
 * It uses the `usePathname` hook to highlight the active link and `useState` to manage the mobile menu toggle.
 */
const Navbar = () => {
  const pathname = usePathname();
  const [toggle, setToggle] = useState(false);

  const navItems = [
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sm:px-16 px-6 w-full flex items-center py-2 fixed top-0 z-20 bg-flashWhite sm:opacity-[0.97] xxs:h-[12vh]">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-eerieBlack hover:text-taupe text-[21px] font-medium uppercase tracking-[3px] cursor-pointer nav-links">
            Godwin
          </span>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-14 mt-2">
          {navItems.map((item) => (
            <li
              key={item.path}
              className="text-eerieBlack hover:text-taupe text-[21px] font-medium uppercase tracking-[3px] cursor-pointer nav-links"
            >
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu */}
        <div className="sm:hidden flex flex-1 w-screen justify-end items-center">
          <svg
            onClick={() => setToggle(!toggle)}
            className="w-6 h-6 cursor-pointer"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          <div
            className={`${!toggle ? "hidden" : "flex"} p-6 bg-flashWhite absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex flex-col justify-end items-start gap-4">
              {navItems.map((item) => (
                <li
                  key={item.path}
                  className="text-eerieBlack text-[16px] font-medium cursor-pointer"
                >
                  <Link href={item.path} onClick={() => setToggle(false)}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
