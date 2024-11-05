import Image from "next/image";
import MotionDiv from "../MotionDiv";
type LogoProps = {
  classs?: string;
  url: string;
  addClass?: string;
};

const Images = ({ classs , url,addClass }: LogoProps) => {
  return (
    <MotionDiv
    initial={{ y: -30, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 1.5, type: "spring" }}
    className={` ${classs} " aspect-square relative overflow-hidden"`}>
        <Image
          src={url}
          alt={url}
          fill
          className={`" object-cover object-center " ${addClass}`}
        />
    </MotionDiv>
  );
};

export default Images;
