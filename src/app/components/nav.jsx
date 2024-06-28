import Link from "next/link";
const Nav = () => {
  return (
    <nav className="flex items-center justify-between w-screen py-5 px-20">
      <h1>MWA</h1>
      <ul className="flex items-center justify-evenly w-1/2">
        <li>
          <Link href="pricing">Pricing</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/about">Who we are</Link>
        </li>
        <li>
          <Link href="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
