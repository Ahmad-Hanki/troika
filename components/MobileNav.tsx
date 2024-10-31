"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function MobileBar() {
  const [show, setShow] = useState(false);

  const closeMenu = () => {
    setShow(false);
  };
  return (
    <>
      <div className="py-8 flex px-2 justify-between  lg:hidden  items-center">
        <nav
          className={`${
            show ? "flex" : "hidden"
          } lg:hidden flex z-10 text-white absolute top-[70px] md:top-[68px]
          left-0 px-5 py-7 h-[37%]
         w-[100%]  flex-col space-y-8 items-center bg-[#1a1a1a] `}
        >
          <Button
            asChild
            variant={"ghost"}
            className=" border-b w-[50%] border-primary"
            onClick={closeMenu}
          >
            <Link href="/">Home</Link>
          </Button>
          <Button
            asChild
            variant={"ghost"}
            className=" border-b w-[50%] border-primary"
            onClick={closeMenu}
          >
            <Link href="#about">About</Link>
          </Button>
          <Button
            asChild
            variant={"ghost"}
            className=" border-b w-[50%] border-primary"
            onClick={closeMenu}
          >
            <Link href="#services">Services</Link>
          </Button>
          <Button
            asChild
            variant={"ghost"}
            className=" border-b w-[50%] border-primary"
            onClick={closeMenu}
          >
            <Link href="#portfolio">Portfolio</Link>
          </Button>
        </nav>
        <i
          className="ri-menu-line text-2xl text-white md:text-[27px]"
          style={{ marginLeft: "0px" }}
          onClick={() => setShow(!show)}
        ></i>
        <h2 className="text-2xl md:text-[27px] pr-4 md:pr-6 uppercase font-semibold text-white">
          troika
        </h2>
        <p>{"  "}</p>
      </div>
    </>
  );
}

export default MobileBar;
