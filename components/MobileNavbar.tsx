"use client";

import { Divide as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  const closeMenu = () => {
    setShow(false);
  };

  useEffect(() => {
    setOpen(false);
    /// make it close when the nav is hited
  }, []);

  const navLinks = [
    {
      title: "Home",
      active: false,
      url:"/"
    },
    {
      title: "About",
      active: false,
      url:"#about"
    },
    {
      title: "Services",
      active: false,
      url:"#services"
    },
    {
      title: "Portfolio",
      active: false,
      url:"#portfolio"
    },
  ];

  return (
    <div className="lg:hidden w-full overflow-hidden">
      <div className="flex justify-between items-center">
        <div className="z-[100]">
          <Logo w="w-20" />
        </div>

        <div className="z-[100] flex gap-4 items-center">
          <Hamburger
            toggled={open}
            onToggle={() => setOpen((prev) => !prev)}
            duration={0.5}
            size={32}
          />
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 w-full
             bg-popover pt-[112px] text-popover-foreground px-4 flex justify-center flex-col  h-[100vh]"
          >
            {/* here goes the navbar content */}
            <p className="text-lg text-muted-foreground">TROIKA</p>

            <div className="flex flex-col gap-8 mt-7 items-start ">
              {navLinks.map((link, index) => (
            <Button
            asChild
            variant={"ghost"}
            className={` ${link.active ? "text-primary" : "text-secondary-foreground" } " px-0 text-4xl hover:text-primary hover:bg-transparent "`}
            onClick={closeMenu}
          >
            <Link href={link.url}>{link.title}</Link>
          </Button>))}
             </div>
            <div className="mt-10 flex flex-col gap-2">
              <p className="text-muted-foreground  text-lg">{"Get In Touch"}</p>

              <Link className="text-2xl" href={"mailto:itxti909@gmail.com"}>
               Social@troikaprod.com
              </Link>
            </div>
            <div className=" text-[#333] mt-10 flex flex-col gap-4">
            <p className="text-muted-foreground  text-lg">
             FOLLOW US
             </p>
            <div className="flex space-x-10 ">
              <a href="https://www.linkedin.com/company/troika-events-production/">
                <i className="ri-linkedin-box-fill bg-white rounded-[50%] px-2 py-2 text-[25px] hover:text-primary hover:cursor-pointer transition duration-300 ease-in-out  "></i>
              </a>
              <a href="https://x.com/troika_prod?s=21">
                <i className="ri-twitter-x-line bg-white rounded-[50%] px-2 py-2 text-[25px] hover:text-primary hover:cursor-pointer transition duration-300 ease-in-out  "></i>
              </a>
              <a href="https://www.instagram.com/troika_prod">
                <i className="ri-instagram-fill bg-white rounded-[50%] px-2 py-2 text-[25px] hover:text-primary hover:cursor-pointer transition duration-300 ease-in-out  "></i>
              </a>
            </div>
          </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNavbar;
