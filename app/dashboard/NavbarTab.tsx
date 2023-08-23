"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarTabProps {
  href: string;
  children: React.ReactNode;
}

export default function NavbarTab({ href, children }: NavbarTabProps) {
  const path = usePathname();
  const isActive = path === href;

  return (
    <li>
      <Link
        href={href}
        className={`${
          isActive ? "text-white" : ""
        } hover:opacity-80 active:opacity-70`}
      >
        {children}
      </Link>
    </li>
  );
}
