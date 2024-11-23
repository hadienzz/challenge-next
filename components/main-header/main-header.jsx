"use client";

import Link from "next/link";
import classes from "./main-header.module.css";
import Image from "next/image";
import logoImg from "@/assets/logo.png";
import { usePathname } from "next/navigation";

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
          <Link
            href={"/meals"}
            className={path === "/meals" ? classes.active : ""}
          >
            Browse Meals
          </Link>
          <Link
            href={"/community"}
            className={path === "/community" ? classes.active : ""}
          >
            Go to community
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default MainHeader;
