import Image from "next/image";
import MotionDiv from "./MotionDiv";
type GalleryItemProps = {
  url: string;
  addClass?: string;
  delay?: number;
};

function GalleryItem({ url, addClass, delay }: GalleryItemProps) {
  return (
    <MotionDiv
      initial={{ y: -30, opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5, type: "spring", delay: delay }}
      className={` ${addClass}  ${ (url === "/comp-2.png" || url === "/comp-3.png") ? " w-[100px] h-[70px] " : "  "} " aspect-square relative overflow-hidden "`}
    >
      <Image
        fill
        alt={url}
        src={url}
        className=" object-contain object-center "
      />
    </MotionDiv>
  );
}

export default GalleryItem;
