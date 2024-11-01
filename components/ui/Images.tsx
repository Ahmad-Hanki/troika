import Image from "next/image";

import logo from "@/public/logo.png";

type LogoProps = {
  classs?: string;
  url: string;
};

const Images = ({ classs , url }: LogoProps) => {
  return (
    <div className={` ${classs} " aspect-square relative overflow-hidden"`}>
        <Image
          src={url}
          alt={url}
          fill
          className="object-cover object-center"
        />
    </div>
  );
};

export default Images;
