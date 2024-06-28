import Link from "next/link";
const Nav = () => {
  return (
    <nav className="flex items-center justify-between max-w-screen py-5 px-20">
      <h1>
        <Link href="/">MWA</Link>
      </h1>
      <ul className="flex items-center justify-evenly w-1/2">
        <li className="hover:scale-125 transition-all">
          <Link href="/pricing" className="hover:font-semibold">
            Pricing
          </Link>
        </li>
        <li className="hover:scale-125 transition-all">
          <Link href="/services" className="hover:font-semibold">
            Services
          </Link>
        </li>
        <li className="hover:scale-125 transition-all">
          <Link href="/about" className="hover:font-semibold">
            Who we are
          </Link>
        </li>
        <li className="hover:scale-125 transition-all">
          <Link href="/contact" className="hover:font-semibold">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
