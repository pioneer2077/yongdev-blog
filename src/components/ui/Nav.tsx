"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import ColorLink from "./icons/ColorLink";

export default function Nav() {
  const pathname = usePathname();
  const menu = [
    {
      name: "home",
      href: "/",
      changedColor: "blue-500",
    },
    {
      name: "info",
      href: "/info",
      changedColor: "blue-500",
    },
    {
      name: "portfolio",
      href: "/portfolio",
      changedColor: "blue-500",
    },
    {
      name: "career",
      href: "/career",
      changedColor: "blue-500",
    },
  ];
  return (
    <nav className="flex gap-14 font-semibold max-md:hidden">
      {menu.map((item) => (
        <ColorLink
          key={item.name}
          changedColor={item.changedColor}
          href={item.href}
          clicked={item.href === pathname}
          name={item.name}
        />
      ))}
    </nav>
  );
}
