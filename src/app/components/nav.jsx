"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex items-center justify-between max-w-screen py-5 px-20">
      <h1>
        <Link href="/">MWA</Link>
      </h1>
      <ul className="flex items-center justify-evenly w-1/2">
        <li className="hover:scale-125 transition-all">
          <Link
            href="/pricing"
            className={`hover:font-semibold ${
              pathname === "/pricing" ? "font-bold text-green-600" : ""
            }`}
          >
            Pricing
          </Link>
        </li>
        <li className="hover:scale-125 transition-all">
          <Link
            href="/services"
            className={`hover:font-semibold ${
              pathname === "/services" ? "font-bold text-yellow-600" : ""
            }`}
          >
            Services
          </Link>
        </li>
        <li className="hover:scale-125 transition-all">
          <Link
            href="/about"
            className={`hover:font-semibold ${
              pathname === "/about" ? "font-bold text-red-600" : ""
            }`}
          >
            Who we are
          </Link>
        </li>
        <li className="hover:scale-125 transition-all">
          <Link
            href="/contact"
            className={`hover:font-semibold ${
              pathname === "/contact" ? "font-bold text-blue-600" : ""
            }`}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
