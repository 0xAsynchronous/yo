import Image from "next/image";
import Link from "next/link";
import logo from "../logo.svg";
import NavbarTab from "./NavbarTab";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4 font-ambi text-blue-700">
      <Link href="/" className="flex items-center space-x-2">
        <Image src={logo} alt="Yield Optimizor" height={50} priority />
        <h1 className="hidden text-xs sm:block">
          Yield
          <br />
          Optimizor
        </h1>
      </Link>

      <ul className="flex items-center space-x-4 text-xs sm:space-x-12 sm:text-sm">
        <NavbarTab href="/dashboard">
          <span className="hidden sm:inline">Yield </span>Pools
        </NavbarTab>
        <NavbarTab href="/dashboard/portfolio">Portfolio</NavbarTab>
        <NavbarTab href="/dashboard/wallets">Wallets</NavbarTab>
      </ul>
    </nav>
  );
}
