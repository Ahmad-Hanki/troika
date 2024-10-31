import { Button } from "@/components/ui/button";
import Container from "./Container";
import Link from "next/link";
import MobileBar from "./MobileNav";
function NavBar() {
  return (
    <header className="bg-background">
      <Container clas="  py-10 justify-between lg:px-12 hidden lg:flex ">
       <div className="flex space-x-4 items-center">
          <h2 className=" text-xl md:text-4xl font-bold uppercase text-white">troika</h2>
        </div>
        <nav className="space-x-12 xl:space-x-20 font-light items-center text-textColor flex">
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
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
        </Container>
      <MobileBar />
    </header>
  );
}

export default NavBar;
