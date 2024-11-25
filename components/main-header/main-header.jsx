"use client";

import Link from "next/link";
import classes from "./main-header.module.css";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import { usePathname } from "next/navigation";
import NavLink from "./nav-link";

const MainHeader = () => {
  const path = usePathname();

  return (
    <div className={classes.header}>
      <Link href={"/"} className={classes.logo}>
        <Image src={logoImg} alt="Logo" priority />
        <p>Nextlevel food</p>
      </Link>
      <div className={classes.nav}>
        <ul>
          <NavLink href={"/meals"}>Browse Meals</NavLink>
          <NavLink href={"/community"}>Go to Community</NavLink>
        </ul>
      </div>
    </div>
  );
};

export default MainHeader;
