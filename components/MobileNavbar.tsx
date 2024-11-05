"use client";

import { Divide as Hamburger } from "hamburger-react";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";


const MobileNavbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    /// make it close when the nav is hited
  }, []);

  const navLinks = [
    {
      title: "Home",
      active: false,
    },
    {
      title: "About",
      active: false,
    },
    {
      title: "Services",
      active: false,
    },
    {
      title: "Portfolio",
      active: false,
    },
  ];

  return (
    <div className="lg:hidden">
      <div className="flex justify-between items-center ">
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
            className="fixed inset-0 z-50 w-full bg-popover pt-[112px] text-popover-foreground px-4 flex justify-center flex-col  h-[100vh]"
          >
            {/* here goes the navbar content */}
            <p className="text-lg text-muted-foreground">Menu Text</p>

            <div className="flex flex-col gap-8 mt-7">
              {navLinks.map((link, index) => (
                <div
                  key={index}
                  className={`text-5xl ${
                    link.active ? "text-primary" : "text-secondary-foreground"
                  }`}
                >
                  {link.title}
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-2">
              <p className="text-muted-foreground  text-lg">{'Get In Touch'}</p>

              <Link className="text-2xl" href={"mailto:itxti909@gmail.com"}>
                itxti909@gmail.com
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNavbar;
