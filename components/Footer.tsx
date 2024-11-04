import Container from "./Container";
import { Button } from "./ui/button";
import Link from "next/link";
import GalleryItem from "./GalleryItem";

function Footer() {
  return (
    <footer className="mt-24">
      <Container
        clas=" flex flex-col lg:flex-row md:max-lg:space-y-3 px-2
        sm:px-8 md:px-12 3xl:px-20 justify-center
         items-center
          lg:space-x-32 xl:space-x-44 2xl:space-x-56 3xl:space-x-[425px] text-center "
      >
        <GalleryItem url="/footer-logo.png" addClass=" w-[85%] xs:w-[75%]
         sm:w-[65%] md:w-[60%] lg:w-[420px] xl:w-[40%] 2xl:w-[30%] 3xl:w-[25%] order-first " />
      <div className=" text-white
          w-[80%] xs:w-[75%] sm:w-[65%] md:max-lg:w-[60%] 
          flex flex-col xl:max-w-[650px] grow 
           items-center justify-center
        space-y-16 lg:space-y-14 2xl:sapce-y-12"
      >
        <p className="text-start mb-8 lg:text-start text-md font-extralight">
          E CONSEQUAT, VEL ILLUM DOLORE EU FEUGIAT NULLA FACILISIS AT VERO EROS
          ET ACCUMSAN ET IUSTO ODIO DIGNISSIM QUI BLANDIT PRAESENT LUPTATUM
          ZZRIL DELENIT AUGUE DUIS DOLORE TE FEUGAIT NULLA FACILISI.{" "}
        </p>
        <nav
          className=" max-lg:gap-y-5  gap-x-3 xs:gap-x-5 sm:gap-x-16 md:gap-x-24
           grid grid-cols-3 w-full lg:grid-cols-5  place-content-start place-items-start	
         lg:gap-x-3 xl:gap-x-8 font-light"
        >
          <Button asChild variant={"ghost"}>
            <Link href="/">Home</Link>
          </Button>
          <Button asChild variant={"ghost"}>
            <Link href="#about">About</Link>
          </Button>
          <Button asChild variant={"ghost"}>
            <Link href="#services">Services</Link>
          </Button>
          <Button  asChild variant={"ghost"}>
            <Link href="#portfolio">Projects</Link>
          </Button>
          <Button asChild variant={"ghost"}>
            <Link  href="#contact">Contact</Link>
          </Button>
        </nav>
        <div className="flex flex-col lg:flex-row
         justify-start items-start w-full  
         max-lg:space-y-16 lg:space-x-8  xl:space-x-12 2xl:space-x-16">
          <div className="flex flex-col space-y-4
           justify-start items-start lg:max-w-[50%]">
            <h3 className="text-lg text-start">Adress :</h3>
            <p className="text-start font-light max-w-[100%]">Imam Abdullah Bin Abdulaziz, district,Riyadh 13241, Saudi Arabia</p>
            <Button
              asChild
              variant={"default"}
              className=" bg-primary  px-8 self-start
           disabled:bg-gray-500 text-lg py-3 rounded-none "
            >
              <Link href="#contact">Contact</Link>
            </Button>
          </div>
          <div className="flex flex-col space-y-3 justify-start items-start">
            <h3 className="text-lg text-start">Contact :</h3>
            <h4 className="text-start font-light">Email : Social@troikaprod.com</h4>
            <h5 className="text-start font-light">Phone : +966 59 890 7735</h5>
          </div>
        </div>
      </div>
      </Container>
      <Container clas="sm:px-8 mt-12 mb-0 py-12 md:px-12 3xl:px-20 justify-center
         items-center">
      <hr className="lg:w-[103%] w-full lg:-ml-[17px] 2xl:-ml-[23px] h-[3px]  bg-textColor" />
      <div className="py-7 text-textColor flex flex-col max-lg:space-y-5 lg:flex-row lg:justify-between">
        <p className="xs:text-center">All Rights Reserved</p>
        <div className="flex flex-col xs:flex-row max-xs:space-y-5 xs:justify-around  lg:space-x-8 xl:space-x-12 2xl:space-x-16">
            <p>Privacy Policy</p>
            <p>Terms and Services</p>
        </div>
      </div>
      </Container>
    </footer>
  );
}

export default Footer;
