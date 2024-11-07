import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";

import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

const BecomeAClient = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger
          className=" bg-primary  px-8 self-start
           disabled:bg-gray-500 text-lg py-3 rounded-none "
        >
          Contact
        </SheetTrigger>
        <SheetContent className="w-full sm:max-w-[50%] md:max-w-[40%] lg:max-w-[35%] xl:max-w-[35%]">
          <SheetHeader>
            <SheetTitle>Hey! Tell Us All The Things.</SheetTitle>
          </SheetHeader>

          {/*
         here goes the form
         */}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default BecomeAClient;
