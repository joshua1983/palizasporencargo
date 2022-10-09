import Link from "next/link";
import React, { CSSProperties } from "react";
import { ActiveLink } from "./ActiveLink";
import styles from "./Navbar.module.css";
import { Text, useTheme } from "@nextui-org/react";

export const Navbar = () => {
  const { theme } = useTheme();

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

  return (
    <div style={styleMenu}>
      <nav className={styles["menu-container"]}>
        {menuItems.map(({ text, href }) => (
          <ActiveLink key={href} text={text} href={href}></ActiveLink>
        ))}
      </nav>
    </div>
  );
};
