import Image from "next/image";
import MotionDiv from "./MotionDiv";

type VisionItemProps = {
  url: string;
  title: string;
  addClass?: string;
  addClassGrid?: string;
};

function VisionItem({ url, title, addClass, addClassGrid }: VisionItemProps) {
  return (
    <MotionDiv
      initial={{ y: -30, opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5, type: "spring", delay: 0.5 }}
      className={` ${addClassGrid} "  relative flex justify-center items-center "`}
    >
      <p className="z-10 text-4xl  pb-6  xl:text-5xl  3xl:pb-8">{title}</p>
      <Image
        src={url}
        alt="planing"
        fill
        className={` ${addClass}" z-[-1] absolute w-full h-full top-0 left-0 object-cover photo border border-black "`}
      />
    </MotionDiv>
  );
}

export default VisionItem;
