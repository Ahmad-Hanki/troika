import { Button } from "@/components/ui/button";
import Container from "./Container";
import Link from "next/link";
import Logo from "./Logo";
import MobileNavbar from "./MobileNavbar";
import MotionDiv from "./MotionDiv";
function NavBar() {
  return (
    <MotionDiv
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 2 , type: "spring", delay: 0.2 }}
    className="bg-background">
      <Container clas="  py-10 justify-between  hidden lg:flex lg:px-8 xl:px-4 ">
        <Logo />
        <div className="flex space-x-44">
          <nav
            className="space-x-12
         xl:space-x-20 font-light items-center text-textColor flex"
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
            <Button asChild variant={"ghost"}>
              <Link href="#portfolio">Portfolio</Link>
            </Button>
          </nav>
          <div>
            <Button
              className="border h-full py-1 border-textColor px-8 rounded-none"
              asChild
              variant={"ghost"}
            >
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </Container>
      <MobileNavbar/>
    </MotionDiv>
  );
}

export default NavBar;
