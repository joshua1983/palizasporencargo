import Link from "next/link";
import React, { CSSProperties } from "react";
import { ActiveLink } from "./ActiveLink";
import styles from "./Navbar.module.css";
import { Text, useTheme } from "@nextui-org/react";
import { useRouter } from "next/router";
import logoNextJs from "../../public/next.png";
import Image from "next/image";

export const Navbar = () => {
  const router = useRouter();
  const pathName = router.pathname;

  const menuItems = [
    {
      text: "Nueva Paliza",
      href: "/",
    },
  ];

  const styleMenu: CSSProperties = {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "1px 20px",
  };

  let menuNav;
  if (pathName === "/") {
    menuNav = (
      <nav className={styles["menu-container"]}>
        <Image src={logoNextJs} alt="NextJS" width={103} height={62}></Image>
        <Text>
          Codigo fuente: <a href="https://github.com/joshua1983/palizasporencargo">GitHub</a>
        </Text>
      </nav>
    );
  } else {
    menuNav = (
      <nav className={styles["menu-container"]}>
        {menuItems.map(({ text, href }) => (
          <ActiveLink key={href} text={text} href={href}></ActiveLink>
        ))}
      </nav>
    );
  }
  return (
    <div style={styleMenu}>
      {menuNav}
    </div>
  );
};
