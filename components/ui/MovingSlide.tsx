"use client";

import useMeasure from "react-use-measure";
import { animate, useMotionValue, motion } from "framer-motion";
import { useEffect } from "react";
import GalleryItem from "../GalleryItem";
import { company } from "@/Data/data";

const SlideBar = () => {
  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let finalPosition = -15000;

    const controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 1000,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation, width]);
  return (
    <div className="py-8 w-full overflow-hidden">
      <motion.div
        className="left-0 flex gap-16 "
        ref={ref}
        style={{
          x: xTranslation,
        }}
      >
        <div className=" flex gap-20 items-center">
          {company.map((items, i) => {
            return <GalleryItem key={i} url={items.url} delay={0.3 * i} />;
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default SlideBar;
