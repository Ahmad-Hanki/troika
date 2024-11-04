import Image from "next/image";

import logo from "@/public/logo.png";

type LogoProps = {
  classs?: string;
  url: string;
  addClass?: string;
};

const Images = ({ classs , url,addClass }: LogoProps) => {
  return (
    <div className={` ${classs} " aspect-square relative overflow-hidden"`}>
        <Image
          src={url}
          alt={url}
          fill
          className={`" object-cover object-center " ${addClass}`}
        />
    </div>
  );
};

export default Images;
