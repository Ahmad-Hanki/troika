import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

import logo from "@/public/logo.png";

const Logo = ({ w }: { w?: string }) => {
  return (
    <div className={cn("w-10 aspect-square relative overflow-hidden", w)}>
      <Link href={"/"}>
        <Image
          src={logo}
          alt="logo"
          fill
          className="object-cover object-center"
        />
      </Link>
    </div>
  );
};

export default Logo;
