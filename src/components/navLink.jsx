"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathName = usePathname();

  return (
    <Link className={`rounded uppercase hover:bg-black hover:text-white transition-all duration-300 ease-in-out p-1 ${pathName === link.url && "bg-black text-white"}`} href={link.url}>
      {link.title}
    </Link>
  );
};

export default NavLink;
