"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Logo from "./Logo";
import MotionIcon from "./MotionIcon";
import MotionDiv from "./MotionDiv";

function MobileBar() {
  const [show, setShow] = useState(false);

  const closeMenu = () => {
    setShow(false);
  };
  return (
    <>
      <div className="py-8 flex px-5 xs:px-7 sm:px-10 justify-between  lg:hidden  items-center">
        <MotionDiv
          initial={{ opacity: 1, y: -20 }}
          exit={{ opacity: 1, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className={`${
            show ? "flex" : "hidden"
          } lg:hidden flex z-10 text-white absolute top-[75px] 
          left-0 px-5 py-20 h-[50%]
         w-[100%]  flex-col space-y-12 items-center bg-[#1a1a1a] `}
        >
          <Button
            asChild
            variant={"ghost"}
            className=" border-b rounded-none pb-4 w-[50%] border-primary"
            onClick={closeMenu}
          >
            <Link href="/">Home</Link>
          </Button>
          <Button
            asChild
            variant={"ghost"}
            className=" border-b rounded-none pb-4 w-[50%] border-primary"
            onClick={closeMenu}
          >
            <Link href="#about">About</Link>
          </Button>
          <Button
            asChild
            variant={"ghost"}
            className=" border-b rounded-none pb-4 w-[50%] border-primary"
            onClick={closeMenu}
          >
            <Link href="#services">Services</Link>
          </Button>
          <Button
            asChild
            variant={"ghost"}
            className=" border-b rounded-none pb-4 w-[50%] border-primary"
            onClick={closeMenu}
          >
            <Link href="#portfolio">Portfolio</Link>
          </Button>
        </MotionDiv>

        <div className="pb-2 pr-4 md:pr-5 ">
          <Logo />
        </div>
        <MotionIcon
          whileTap={{ translateY: 5, scale: 1.2, rotate: 360 }}
          transition={{
            duration: 0.8,
            type: "spring",
          }}
          className={` ${
            show ? " ri-close-large-line " : " ri-menu-line "
          } "  text-white text-[30px] "`}
          style={{ marginLeft: "0px" }}
          onClick={() => setShow(!show)}
        ></MotionIcon>
      </div>
    </>
  );
}

export default MobileBar;
