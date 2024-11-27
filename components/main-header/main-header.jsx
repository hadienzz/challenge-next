<<<<<<< HEAD
import Link from 'next/link'
import classes from './main-header.module.css'
import logo from '@/assets/logo.png'


const MainHeader = () => {
    return (
        <div className={classes.header}>
            <Link href={'/'} className={classes.logo}>
                <img src={logo.src} alt="Logo" />
                Next Level Food
            </Link>
            <div className={classes.nav}>
                <ul className={classes.ul}>
                </ul>
            </div>
        </div>
    )
}

export default MainHeader
=======
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
>>>>>>> fc290168e10ccd4f744aa771ef742e1f620dd85f
