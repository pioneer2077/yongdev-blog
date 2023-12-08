import React from "react";
import Nav from "./ui/Nav";
import EarthIcon from "./ui/icons/EarthIcon";

export default function Header() {
  return (
    <section className="flex p-4  justify-between  items-center">
      <h1 className=" tracking-wide text-2xl basis-1/2 font-extrabold word">
        YONG&nbsp;Dev
      </h1>
      <div className=" flex basis-1/2 justify-end gap-20 items-center ">
        <Nav />
        <EarthIcon />
      </div>
    </section>
  );
}
